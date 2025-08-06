import { User } from "@/type/user";
import { FiDownload } from "react-icons/fi";

export default function FileCard({records}:{records:string}) {
    return (
          <div
            className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
          >
            <span className="text-gray-700 text-sm">{records}</span>
            <button
              className="p-2 rounded hover:bg-gray-200"
              aria-label={`Download ${records}`}
            >
              <FiDownload className="text-gray-500" />
            </button>
          </div>
    );
}