"use client"

import ErrorPage from "@/layout/ErrorPage";


export default function Error({
   error,
   reset
}: {
   error: Error & { digest?: string },
   reset: () => void
}) {



  return (
    <ErrorPage error={error} reset={reset} />
  );
}