import Image from "next/image";
import Header from "./Header";
import Link from "next/link";
import { paths } from "@/utils/paths";

export default function Page() {
  return (
    <main className="md:bg-[url(/images/side-image.png)] bg-no-repeat [background-size:400px] bg-left-bottom">
      <div className="h-2"></div>
      <Header />
      <div className="md:hidden text-center flex-1">
        <span className="text-gray-700 text-base md:text-lg">
          Welcome to{" "}
          <span className="font-semibold">UM-Health Patient Portal</span>
        </span>
      </div>
      <div className=" app-container py-12 grid md:grid-cols-2 items-center">
        <Image
          src="/images/heroimg.png"
          alt="UM-Health Patient Portal"
          width={537}
          height={665}
          className="w-full"
        />
        <div className="flex flex-col gap-6">
          <h1 className=" text-2xl md:text-5xl font-bold leading-tight">
            Prioritize and <br />
            Take Charge of Your <br />
            Health with <span className="text-brand-primary">UM-Health</span>
          </h1>
          <p className=" text-base md:text-lg text-gray-700">
            Book Appointments, Access Medical Records, Track Medications,
            Monitor Bills, and Get Personalized Health Insights — all in one
            easy-to-use Patient Platform.
          </p>
          <Link
            href={paths.register}
            className="btn btn-primary rounded-lg !py-3 !px-9 w-fit"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "url(/images/curves.png)",
        }}
        className=" w-full h-42 md:h-56  bg-bottom bg-no-repeat bg- grid place-items-center"
      >
        <p className="text-center">© 2025 UM-Health. All rights reserved.</p>
      </div>
    </main>
  );
}
