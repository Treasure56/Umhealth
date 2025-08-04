import Image from "next/image";
import Header from "./Header";

export default function Page() {
  return (
    <main className="py-4">
      <Header />
      <div className=" app-container py-12 grid grid-cols-2">
        <Image
          src="/images/heroimg.png"
          alt="UM-Health Patient Portal"
          width={537}
          height={665}
          className="w-full"
        />
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold leading-tight">
            Prioritize and <br />
            Take Charge of Your <br />
            Health with <span className="text-brand-primary">UM-Health</span>
          </h1>
          <p className="text-lg text-gray-700">
            Book Appointments, Access Medical Records, Track Medications,
            Monitor Bills, and Get Personalized Health Insights — all in one
            easy-to-use Patient Platform.
          </p>
          <button className="btn btn-primary rounded-lg !py-3 !px-9 w-fit">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
