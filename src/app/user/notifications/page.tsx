import NotificationCard from "@/components/user/NotificationCard";
import { dummyNotifications } from "@/types/notification";

export default function Page() {
  const notifications = dummyNotifications;
  return (
    <div className="flex flex-col md:max-w-[700px]">
      {notifications.map((notification) => (
        <NotificationCard key={notification._id} {...notification} />
      ))}
    </div>
  );
}
