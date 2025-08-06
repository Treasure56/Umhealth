import { TableHead, TableHeader, TableRow, Table, TableBody } from "@/components/ui/table";
import DataTableRow from "./TableRow";
import { dummyConsultations } from "@/types/consultation";

export default function DataTable() {
    const consultations = dummyConsultations
  return (
    <div className="w-full overflow-x-auto">
      <Table className="mt-4 min-w-[1000px] ">
      <TableHeader>
        <TableRow className="bg-muted/50 grid grid-cols-7 pt-1 border-none rounded-t-md ">
          <TableHead className="font-semibold text-base text-gray-700">Visit ID</TableHead>
          <TableHead className="font-semibold text-base text-gray-700">Dr&apos;s Name</TableHead>
          <TableHead className="font-semibold text-base text-gray-700">Dr&apos;s Department</TableHead>
          <TableHead className="font-semibold text-base text-gray-700">Date of Visit</TableHead>
          <TableHead className="font-semibold text-base text-gray-700">Time of Visit</TableHead>
          <TableHead className="font-semibold text-base text-gray-700">Reason</TableHead>
          <TableHead className="font-semibold text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
            consultations.map(consultation => (
                <DataTableRow key={consultation._id} {...consultation} />
            ))
        }
       
      </TableBody>
      </Table>
    </div>
  );
}