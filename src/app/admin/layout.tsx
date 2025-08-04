import Sidebar from "./Sidebar";
// import { adminDashboard } from "@/actions/admin";
import { AppLayoutProps } from "@/type";
import { redirect, RedirectType } from "next/navigation";
import { paths } from "../utils/paths";
import Navbar from "@/components/navbar/navbar";




export default function Layout({ children }: AppLayoutProps) {
    const admin = {};
    if(!admin || admin === 'error') redirect(paths.login, RedirectType.replace);

    return (
                
                <section className="flex font-switzer">
                    <aside className="w-0 md:w-[250px] md:min-w-[250px] flex-shrink-0 relative bg-[#EDFFE4]">
                        <Sidebar />
                    </aside>
                    <aside className="w-full md:w-[calc(100%-250px)] md:max-w-[calc(100%-250px)] bg-neutral-background min-h-screen px-4 lg:px-8">
                        <Navbar />
                        <div className="py-2" />
                        {children}
                        <div className="py-2" />
                    </aside>
                </section>
    );
}