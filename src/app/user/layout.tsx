import Sidebar from "./(overview)/Sidebar";
import { AppLayoutProps } from "@/types";
import { redirect, RedirectType } from "next/navigation";
import { paths } from "../../utils/paths";
import Navbar from "@/components/navbar/navbar";
import { User } from "@/types/user";

export default function Layout({ children }: AppLayoutProps) {
  const user:User|"error" = {};
  if (!user || user === "error") redirect(paths.login, RedirectType.replace);

  return (
    <section className="flex font-switzer">
      <aside className="w-0 md:w-[250px] md:min-w-[250px] flex-shrink-0 relative bg-[#EDFFE4]">
        <Sidebar user={user} />
      </aside>
      <aside className="w-full  bg-neutral-background min-h-screen px-4 lg:px-8">
        <Navbar />
        <div className="py-2" />
        {children}
        <div className="py-2" />
      </aside>
    </section>
  );
}
