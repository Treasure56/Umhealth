import { $fetchAllNotifications } from "@/action/user/fetchNotifications";
import NotificationCard from "@/components/user/NotificationCard";

export default async function Page() {
  const notifications = await $fetchAllNotifications();
  return (
    <div className="flex flex-col md:max-w-[700px]">
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} {...notification} />
      ))}
    </div>
  );
}
