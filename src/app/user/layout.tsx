import { $fetchDashboardData } from "@/action/user/fetchDashboardData";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "./(overview)/Sidebar";
import { AppLayoutProps } from "@/types";

export default async function Layout({ children }: AppLayoutProps) {
  const dashboardData = await $fetchDashboardData();

  return (
    <section className="flex font-switzer">
      <aside className="w-0 md:w-[250px] md:min-w-[250px] flex-shrink-0 relative bg-[#EDFFE4]">
        <Sidebar user={dashboardData} />
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
