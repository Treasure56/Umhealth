/* eslint-disable @next/next/no-img-element */
"use client";
import { useUserStore } from "@/store/userStore";
import { paths } from "@/utils/paths";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuBell } from "react-icons/lu";
import PageTitle from "../user/PageTitle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Navbar() {
  const pathname = usePathname();

  // Map pathname to page title
  const getTitle = () => {
    if (pathname === "/user") return "Dashboard";
    if (pathname === "/user/help") return "Need Help?";
    if (pathname === "/user/consultations") return "Consultations";
    if (pathname === "/user/contact-doctor") return "Contact Doctor";
    if (pathname === "/user/settings") return "Settings";
    if (pathname === "/user/notifications") return "Notifications";
    if (pathname === "/user/profile") return "Profile";
    if (pathname.startsWith("/user/contact-doctor/")) return "Contact Doctor";

    return "page";
  };

  const user = useUserStore(s=>s.user);
  const initials = user?.name?.charAt(0);

  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-black/16  bg-white navbar">
     <PageTitle  className="font-semibold">{getTitle()}</PageTitle>
      <div className=" max-md:hidden flex items-center gap-6">
        {/* <div className="relative">
          <span className="text-gray-500">
            <LuMessageSquare />
          </span>
        </div> */}
        {/* Notification Icon with Badge */}
        <div className="relative">
          <Link href={paths.notifications} className="text-gray-500">
            <LuBell />
          </Link>
          {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span> */}
        </div>
        {/* <span className="text-gray-500 text-sm">Need Help?</span> */}
        {/* Divider */}
        <div className="h-6 w-px bg-gray-200 mx-2" />
       <Avatar className="h-10 w-10 bg-gray-700 flex-shrink-0">
            <AvatarImage
              src={user?.date_joined}
              alt={user?.name}
              className="object-cover"
            />
            <AvatarFallback className="bg-brand-secondary text-sm font-semibold text-gray-100">
              {initials}
            </AvatarFallback>
          </Avatar>
      </div>
    </div>
  );
}
