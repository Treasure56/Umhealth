import DeleteModal from "@/app/user/notifications/DeleteModal";
import { Notification } from "@/types/notification";
import { LuX } from "react-icons/lu";

/* eslint-disable @next/next/no-img-element */
export default function NotificationCard(notification: Notification) {
  const { date, description, img, title } = notification;
  return (
    <div className="flex items-center gap-5  p-3">
      <div className="flex justify-between items-center gap-3">
        <img src={img} alt="" className="w-14 h-14 rounded-full" />
        <div className="flex flex-col gap-1">
          <div className="flex">
            <p className="font-semibold text-sm md:text-base">
              {title}: {description}
            </p>
          </div>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
        <DeleteModal notification={notification}>
          <LuX className="text-red-500" />
        </DeleteModal>
      </div>
    </div>
  );
}
