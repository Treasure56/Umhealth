import DeleteModal from "@/app/user/consultations/DeleteModal";
import { Consultation } from "@/types/consultation";

export default function ScheduleOverviewCard(consultation: Consultation) {
  const {
    // doctor_department: doctorDepartment,
    doctor_name: doctorName,
    reason_for_visit: reasonForVisit,
    visit_date: visitDate,
    // visit_time: visitTime,
    // visitor_id: visitorId,
  } = consultation;
  return (
    <div className="bg-[#f6fcff] w-full rounded-md grid grid-cols-2 md:grid-cols-4 gap-4 p-4  shadow-sm">
      <div className="flex flex-col gap-1">
        <span className="text-gray-500 text-sm">Date of Visit</span>
        <span className="font-bold text-sm text-[#162447]">{visitDate}</span>
      </div>
      <div className="flex flex-col gap-1 ">
        <span className="text-gray-500 text-sm">Reason for Visit</span>
        <span className="font-bold text-sm text-[#162447]">
          {reasonForVisit}
        </span>
      </div>
      <div className="flex flex-col gap-1 ">
        <span className="text-gray-500 text-sm">Staff</span>
        <span className="font-bold text-[#162447]">{doctorName}</span>
      </div>
      <div className="flex flex-col gap-1 ">
        <span className="text-gray-500 text-sm">Action</span>
        <DeleteModal consultation={consultation}>
          <button className="bg-[#2ee59d] text-white px-3 py-2 rounded-full font-medium text-sm hover:bg-[#22c98a] transition">
          Cancel Consultation
        </button>
        </DeleteModal>
      </div>
    </div>
  );
}
