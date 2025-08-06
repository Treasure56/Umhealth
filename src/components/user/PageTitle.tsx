"use client"
import { useUserStore } from "@/store/userStore";
import { HTMLAttributes } from "react";
import { LuMenu } from "react-icons/lu";

export default function PageTitle( { className,...props}: HTMLAttributes<HTMLHeadingElement>) {
    const setOpen = useUserStore(s=>s.setSidebar);

    return (
        <div className="flex gap-3 items-center justify-stretch w-full">
            <button onClick={()=>setOpen(true)} className="text-xl icon-btn md:hidden p-2 aspect-square flex-shrink-0">
                <LuMenu className="text-brand-secondary text-2xl font-bold" />
            </button>
            <h3 {...props} className={`heading ${className}`}/>
        </div>
    );
}