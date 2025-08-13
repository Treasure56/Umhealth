"use server";

import { COOKIE_MAX_AGE } from "@/constants";
import { appCookies } from "@/constants/cookies";
import { formDataToObject } from "@/functions/helpers";
import { ActionResponse } from "@/types";
import { api } from "@/utils/apis";
import { AppFetch } from "@/utils/appFetch";
import { paths } from "@/utils/paths";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

export async function $login(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  const data = formDataToObject<{ email: string; password: string }>(formData);
  const schema = z.object({
    email: z.email(),
    password: z.string().min(8).max(100),
  });
  const validate = schema.safeParse(data);
  //check if validation was successful
  if (!validate.success)
    return { fieldErrors: validate.error.flatten().fieldErrors };

  // make api request
  const res = await AppFetch.postForm(api.auth.login, formData, {});
  console.log({ res, data });
  if (!res || !res.token) {
    return {
      error: res?.message ?? "Login failed. Please try again later.",
    };
  }

  // Set user token cookie
  (await cookies()).set(appCookies.userToken, res.token, {
    maxAge: COOKIE_MAX_AGE,
  });

  redirect(paths.user);
}
