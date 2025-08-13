"use server";

import { COOKIE_MAX_AGE } from "@/constants";
import { appCookies } from "@/constants/cookies";
import { formDataToObject } from "@/functions/helpers";
import { ActionResponse } from "@/types";
import { api } from "@/utils/apis";
import { AuthFetch } from "@/utils/authFetch";
import { cookies } from "next/headers";
import { z } from "zod";

const schema = z.object({
  address: z.string().min(2).max(100),
  first_name: z.string().min(2).max(100),
  last_name: z.string().min(2).max(100),
});
type FormType = z.infer<typeof schema>;

export async function $updateAccount(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  const data = formDataToObject<FormType>(formData);
  const validate = schema.safeParse(data);
  //check if validation was successful
  if (!validate.success)
    return { fieldErrors: validate.error.flatten().fieldErrors };

  //   make api request
  const res = await AuthFetch.patchForm(api.user.updateAccount, formData, {});

  console.log({ res, data });
  if (!res || !res.user) {
    return {
      error: res?.message ?? "Update failed. Please try again later.",
    };
  }

  // Set user token cookie

  return {
    success: "Account updated successfully!",
  };
}
