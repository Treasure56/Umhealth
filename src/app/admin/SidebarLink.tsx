'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export type SidebarLinkProps = {
    title: string;
    icon: ReactNode;
    href: string;
    className?: string;
}

export default function SidebarLink({ href, title, icon, className }: SidebarLinkProps) {
    const pathname = usePathname();
    const isActive = pathname == href;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const classNames = "admin-side-link-logout mt-10"
    
    return (
        <Link href={href}
            className={`admin-side-link ${className ?? ''} ${!isActive ? '' : '!bg-brand-secondary !text-white hover:text-primary'}`}
        >
            {icon}
            <span>{title}</span>
        </Link>
    );
}