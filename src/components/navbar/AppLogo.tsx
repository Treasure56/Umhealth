/* eslint-disable @next/next/no-img-element */
import { paths } from "@/utils/paths";
import Link from "next/link";

const HOST = process.env.HOST || "";
export function AppLogo({toWebsite = false}:{toWebsite?:boolean}) {
  return (
    <Link href={toWebsite ? HOST : paths.home}>
      <div className="flex gap-1 items-center origin-left max-sm:scale-95">
       
         <img
          src="/images/logo.png"
          alt="umhealth Logo"
          className="w-[134px] max-w-full"
        />
        
      </div>
    </Link>
  );
}
