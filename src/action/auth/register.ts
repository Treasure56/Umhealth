"use server";

import { COOKIE_MAX_AGE } from "@/constants";
import { appCookies } from "@/constants/cookies";
import { formDataToObject } from "@/functions/helpers";
import { ActionResponse } from "@/types";
import { api } from "@/utils/apis";
import { AppFetch } from "@/utils/appFetch";
import { cookies } from "next/headers";
import { z } from "zod";

const schema = z.object({
  email: z.email(),
  password: z.string().min(8).max(100),
  confirmPassword: z.string().min(8).max(100),
  first_name: z.string().min(2).max(100),
  last_name: z.string().min(2).max(100),
  phone_number: z.string().min(10).max(15),
  address: z.string().min(5).max(255),
});
type FormType = z.infer<typeof schema>;

export async function $register(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  const data = formDataToObject<FormType>(formData);
  const validate = schema.safeParse(data);
  //check if validation was successful
  if (!validate.success)
    return { fieldErrors: validate.error.flatten().fieldErrors };

  // check if passwords match
  if (data.password !== data.confirmPassword)
    return { fieldErrors: { confirmPassword: ["Passwords do not match"] } };

//   make api request
const res = await AppFetch.post(api.auth.register, data);

console.log({ res , data});
if (!res || !res.token) {
  return {
    error: "Registration failed. Please try again later.",
  };
}

// Set user token cookie
    (await
        // Set user token cookie
        cookies()).set(appCookies.userToken, res.token, {
  maxAge: COOKIE_MAX_AGE,
});

return {
  success: "Account created successfully!",
};

}
