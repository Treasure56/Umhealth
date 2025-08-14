"use server";

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse } from "@/types";
import { api } from "@/utils/apis";
import { AuthFetch } from "@/utils/authFetch";

export async function $deleteNotification(
  _: ActionResponse,
  formdata: FormData
): Promise<ActionResponse> {
  const data = formDataToObject<{ id: string }>(formdata);
  const res = await AuthFetch.del(api.user.deleteNotification(data.id));
  if (!res)
    return {
      error: "Connection failed. Please try again later.",
    };

  if (res.message !== "Notification deleted successfully")
    return {
      error: res.message ?? "something went wrong",
    };

  return {
    success: res.message,
  };
}
