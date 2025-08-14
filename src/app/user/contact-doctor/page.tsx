import { $fetchAllDoctors } from "@/action/user/fetchAllDoctors";
import DoctorCard, { DoctorCardSkeleton } from "@/components/user/DoctorCard";
import { Suspense } from "react";
export default function DoctorGrid() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
    </>
  );
}

async function Contact() {
  const doctor = await $fetchAllDoctors();
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {doctor.map((doc) => (
        <DoctorCard key={doc.id} {...doc} />
      ))}
    </div>
  );
}

function Loading() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {Array(9).fill(Number).map((_, index) => (
        <DoctorCardSkeleton key={index} />
      ))}
    </div>
  );
}
