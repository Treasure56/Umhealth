"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { LuBell, LuMessageSquare } from "react-icons/lu";
import PageTitle from "../user/PageTitle";

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
    return "Page";
  };

  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-black/16  bg-white navbar">
     <PageTitle  className="font-semibold">{getTitle()}</PageTitle>
      <div className=" max-md:hidden flex items-center gap-6">
        <div className="relative">
          <span className="text-gray-500">
            <LuMessageSquare />
          </span>
        </div>
        {/* Notification Icon with Badge */}
        <div className="relative">
          <span className="text-gray-500">
            <LuBell />
          </span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </div>
        <span className="text-gray-500 text-sm">Need Help?</span>
        {/* Divider */}
        <div className="h-6 w-px bg-gray-200 mx-2" />
        <Image
          src="/images/profile.png" 
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full border border-gray-300"
        />
      </div>
    </div>
  );
}
