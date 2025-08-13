import { Notification } from "@/types/notification"
import { api } from "@/utils/apis";
import { AuthFetch } from "@/utils/authFetch";

export async function $fetchAllNotifications(): Promise<Notification[]> {
  const res = await AuthFetch.get(api.user.fetchNotifications);
  console.log({ res });
  if (!res) {
    throw new Error("Failed to fetch all notifications");
  }
  if (!Array.isArray(res)) {
    throw new Error("Invalid notifications data");
  }

  return res as unknown as Notification[];
}
