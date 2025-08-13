import { $fetchAllDoctors } from "@/action/user/fetchAllDoctors";
import DoctorCard from "@/components/user/DoctorCard";

export default async function Contact() {
    const doctor = await $fetchAllDoctors();
    return (
        <div className="grid md:grid-cols-3 gap-4">
          {doctor.map((doc) => (
            <DoctorCard key={doc.id} {...doc} />
          ))}
        </div>
    );
}