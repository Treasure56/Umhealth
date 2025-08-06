import { Schedule } from "@/types/schedule";

export default function ScheduleOverviewCard({
  visitDate,
  ReasonForVisit,
  staff,
}: Schedule) {
  return (
    <div className="bg-[#f6fcff] w-full rounded-md grid grid-cols-2 md:grid-cols-4 gap-4 p-4  shadow-sm">
      <div className="flex flex-col gap-1">
        <span className="text-gray-500 text-sm">Date of Visit</span>
        <span className="font-bold text-sm text-[#162447]">{visitDate}</span>
      </div>
      <div className="flex flex-col gap-1 ">
        <span className="text-gray-500 text-sm">Reason for Visit</span>
        <span className="font-bold text-sm text-[#162447]">
          {ReasonForVisit}
        </span>
      </div>
      <div className="flex flex-col gap-1 ">
        <span className="text-gray-500 text-sm">Staff</span>
        <span className="font-bold text-[#162447]">{staff}</span>
      </div>
      <div className="flex flex-col gap-1 ">
        <span className="text-gray-500 text-sm">Action</span>
        <button className="bg-[#2ee59d] text-white px-3 py-2 rounded-full font-medium text-sm hover:bg-[#22c98a] transition">
          Cancel Consultation
        </button>
      </div>
    </div>
  );
}
