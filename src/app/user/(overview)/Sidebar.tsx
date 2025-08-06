"use client";

import SidebarLink, { SidebarLinkProps } from "./SidebarLink";
// import AppIcons from "@/components/AppIcons";
import { AppLogo } from "@/components/navbar/AppLogo";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaX } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { PiBellSimpleRingingBold, PiGearSixBold, PiHeadsetBold, PiPulseBold } from "react-icons/pi";
import { paths } from "../../utils/paths";

export default function Sidebar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div
      className={`w-full flex flex-col gap-4 fixed md:sticky bg-light top-0 left-0 h-screen p-4 overflow-y-auto transition-transform z-50 ${
        sidebarOpen ? "max-md:translate-x-0" : "max-md:translate-x-[-110%]"
      }`}
    >
      <div className="flex justify-between items-center">
        <AppLogo />
        <button
          onClick={() => setSidebarOpen(false)}
          className="text-xl icon-btn md:hidden p-2"
        >
          <FaX />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <SidebarLink key={link.href} {...link} />
        ))}
      </div>
    </div>
  );
}
const links: SidebarLinkProps[] = [
  {
    title: "Dashboard",
    icon: <IoGrid />,
    href: paths.user,
  },
  {
    title: "Consultations",
    icon: <PiPulseBold />,
    href: paths.consultations,
  },
  {
    title: "Contact Doctor",
    icon: <PiHeadsetBold />,
    href: paths.contactDoctor,
  },
  {
    title: "Notifications & Support",
    icon: <PiBellSimpleRingingBold />,
    href: paths.notifications,
  },
  {
    title: "Profile & Settings",
    icon: <PiGearSixBold />,
    href: paths.profile,
  },
];
