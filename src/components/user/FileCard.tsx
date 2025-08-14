import { UserRecord } from "@/types/user";
import { FiDownload } from "react-icons/fi";

export default function FileCard({ records }: { records: UserRecord }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition">
      <span className="text-gray-700 text-sm">{records.record_type}</span>
      <a
        download={records.fileUrl}
        href={records.fileUrl}
        target="_blank"
        className="p-2 rounded hover:bg-gray-200"
        aria-label={`Download ${records.record_type}`}
      >
        <FiDownload className="text-gray-500" />
      </a>
    </div>
  );
}
