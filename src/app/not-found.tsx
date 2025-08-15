"use client";

import { AppLogo } from "@/components/navbar/AppLogo";
import { paths } from "@/utils/paths";

export default function NotFound() {
  return (
    <section className=" app-container flex flex-col justify-center items-center h-screen w-full">
      <div className="absolute top-4 left-4 md:left-6 lg:left-10">
        <AppLogo />
      </div>
      <div className="max-w-[300px] text-center">
        <h1 className="h1 text-brand-primary-dark text-pretty font-bold max-w-[380px] mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 font-medium mb-10">
          The page you are looking for does not exist or has been removed.
        </p>
        <button
          onClick={() => (window.location.href = paths.home)}
          className="btn btn-primary !px-10 !py-3 !rounded-3xl"
        >
          Go to Home
        </button>
      </div>
    </section>
  );
}
