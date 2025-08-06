import { TableCell } from "@/components/ui/table";
import { Consultation } from "@/types/consultation";
import { LuTrash2 } from "react-icons/lu";

export default function DataTableRow({doctorDepartment, doctorName, reasonForVisit, visitDate, visitTime, visitorId}: Consultation) {
  return (
    <div className="grid grid-cols-7 items-center gap-4 p-2  transition-colors border-b border-gray-200">
      <TableCell className="text-gray-700">{visitorId}</TableCell>
      <TableCell className="text-gray-700">{doctorName}</TableCell>
      <TableCell className="text-gray-700">{doctorDepartment}</TableCell>
      <TableCell className="text-gray-700">{visitDate}</TableCell>
      <TableCell className="text-gray-700">{visitTime}</TableCell>
      <TableCell className="text-gray-700">{reasonForVisit}</TableCell>
      <TableCell className="text-gray-700">
        <button>
          <LuTrash2 className="text-red-500 text-xl" />
        </button>
      </TableCell>
    </div>
  );
}
