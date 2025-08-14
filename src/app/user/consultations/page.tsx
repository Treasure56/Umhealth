import { LuPlus } from "react-icons/lu";
import DataTable from "./Table";
import ConsultationModal from "./ConsultationModal";
import { $fetchAllDoctors } from "@/action/user/fetchAllDoctors";

export default async function Page() {
  const doctor = await $fetchAllDoctors();
  return (
    <main className="flex flex-col py-6 gap-5">
      <div className="flex items-start md:justify-between flex-col-reverse md:flex-row md:items-center w-full">
        <h1 className="md:text-2xl text-lg font-bold">Pending Consultations</h1>
        <ConsultationModal doctors={doctor}>
          <button className="btn btn-primary !bg-brand-primary border !border-brand-primary rounded-md ">
            <LuPlus className="text-white" />
            Book New Consultation
          </button>
        </ConsultationModal>
      </div>
      <div className="flex flex-col w-full mt-4">
        <DataTable />
      </div>
    </main>
  );
}
