import FileCard from "@/components/user/FileCard";
import { dummyUser } from "@/type/user";

 const user = dummyUser
export default function PatientRecord() {
  return (
    <div className="bg-white rounded-md shadow p-4 font-sans md:max-w-md">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Patient Record Files
      </h2>
      <div className="flex flex-col gap-3 max-h-64 overflow-y-auto">
        {user.records?.map((record) => (
          <FileCard key={record} records={record} />
        ))}
       
      </div>
    </div>
  );
}