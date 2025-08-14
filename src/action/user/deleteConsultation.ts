/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { appCookies } from "@/constants/cookies";
import { formDataToObject } from "@/functions/helpers";
import { ActionResponse } from "@/types";
import { api } from "@/utils/apis";
import { paths } from "@/utils/paths";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function $deleteConsultation(
  _: ActionResponse,
  formdata: FormData
): Promise<ActionResponse> {
  const data = formDataToObject<{ id: string }>(formdata);
  try {
    const res = await fetch(api.user.deleteConsultation(data.id), {
      method: "DELETE",
      headers: {
        Authorization: `Token ${
          (await cookies()).get(appCookies.userToken)?.value
        }`,
      },
    });

    if (!res.ok)
      return {
        error: "Failed to delete consultation",
      };

      revalidatePath(paths.consultations)
      revalidatePath(paths.user)
    return {
      success: "Consultation deleted",
    };
  } catch (error) {
    return {
      error: "Connection failed. Please try again later.",
    };
  }
}
