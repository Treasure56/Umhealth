"use client";

import { useUserStore } from "@/store/userStore";
import { paths } from "@/utils/paths";
import { AppLogo } from "@/components/navbar/AppLogo";
import { User } from "@/types/user";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { IoGrid } from "react-icons/io5";
import { LuX } from "react-icons/lu";
import { PiBellSimpleRingingBold, PiGearSixBold, PiHeadsetBold, PiPulseBold } from "react-icons/pi";
import SidebarLink, { SidebarLinkProps } from "./SidebarLink";

export default function Sidebar({ user }: { user: User}) {
  const pathname = usePathname();
 const {
    sidebarOpen: open,
    setSidebar: setOpen,
    setUser,
    user: _user,
  } = useUserStore();

  useLayoutEffect(() => {
    setUser(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div
      className={`w-full flex flex-col gap-4 fixed md:sticky bg-[#EDFFE4] top-0 left-0 h-screen p-4 overflow-y-auto transition-transform z-50 ${
        open ? "max-md:translate-x-0" : "max-md:translate-x-[-110%]"
      }`}
    >
      <div className="flex justify-between items-center">
        <AppLogo />
        <button
          onClick={() => setOpen(false)}
          className="text-xl icon-btn md:hidden p-2"
        >
          <LuX />
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
