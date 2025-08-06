import DoctorCard from "@/components/user/DoctorCard";
import { dummyDoctors } from "@/types/doctor";

export default function Contact() {
    const doctor = dummyDoctors
    return (
        <div className="grid md:grid-cols-3 gap-4">
          {doctor.map((doc) => (
            <DoctorCard key={doc.id} {...doc} />
          ))}
        </div>
    );
}