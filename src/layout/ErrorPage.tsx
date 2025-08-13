"use client";

import { AppPageError } from "@/types";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }: AppPageError) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  console.log("cause of", error.cause);

  const errorMessage =
    process.env.NEXT_PUBLIC_APP_ENV === "production"
      ? "Ooops! Something went wrong"
      : error.message;

  return (
    <section className="h-[90vh] w-full flex flex-col gap-6 justify-center items-center app-container text-center">
      <h2 className="text-xl font-semibold opacity-50">
        {/* Something went wrong! */}
      </h2>
      <p className="text-3xl font-bold max-w-[400px]">{errorMessage}</p>
      <p className="text-lg opacity-10">{error.digest}</p>
      {/* <p className="text-lg opacity-40">{(error.cause as string).toString()}</p> */}
      <div className="grid grid-cols-2 w-[320px] gap-4">
        <button
          className="btn btn-dark rounded-3xl px-8 !py-3"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </button>
        <button
          className="btn btn-primary rounded-3xl px-8 !py-3"
          onClick={reset}
        >
          Try again
        </button>
      </div>
    </section>
  );
}
