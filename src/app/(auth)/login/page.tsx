import { AppLogo } from "@/components/navbar/AppLogo";
import LoginForm from "./LoginForm";
import Link from "next/link";
import { paths } from "@/utils/paths";

export default function Page() {
  return (
    <section className="app-container lg:py-20 py-10">
      <div className="flex justify-between">
         <AppLogo />
         <p className="text-base text-gray-500">Don&apos;t have an account? <Link  className="text-brand-primary" href={paths.register}>Sign Up</Link> </p>
      </div>
      <section className="max-w-[500px] w-full flex justify-self-center items-center   lg:px-10 lg:py-15 py-12">
        <div className="w-[100%]">
          <h2 className="lg:text-4xl text-3xl font-bold pb-5 text-brand-primary">
            Welcome Back!
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Sign-in to continue using UM-Health
          </p>
          <div className="">
            <LoginForm />
          </div>
        </div>
      </section>
    </section>
  );
}
