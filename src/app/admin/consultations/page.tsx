import { LuPlus } from "react-icons/lu";
import DataTable from "./Table";
import ConsultationModal from "./ConsultationModal";

export default function Page() {
  return (
    <main className="flex flex-col py-6 gap-5">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold">Pending Consultations</h1>
        <ConsultationModal>
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
