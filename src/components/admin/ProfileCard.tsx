import { formatDate } from "@/components/functions/helpers";
import { User } from "@/type/user";
import Image from "next/image";
import { GrLocation } from "react-icons/gr";
import { LuCalendar } from "react-icons/lu";

export default function ProfileCard({
  first_consultation,
  email,
  name,
  last_consultation,
  location,
}: User) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow p-4">
      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <Image
            src="/images/profile.png"
            alt="Dominic Evans"
            fill
            className="object-cover  rounded-full"
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900 mb-1">{name}</h1>
          <p className="text-gray-500 text-sm">{email}</p>
        </div>
      </div>

      {/* Location Section */}
      <div className="flex items-center gap-3 mb-6">
        <GrLocation className="text-gray-400"/>
        <div>
          <h2 className="text-gray-900 font-medium mb-1">Location</h2>
          <p className="text-gray-500 text-sm leading-relaxed">{location}</p>
        </div>
      </div>

      {/* First Consultation Section */}
      <div className="flex items-center gap-3 mb-6">
        <LuCalendar className="text-gray-400" />
        <div>
          <h2 className="text-gray-900 font-medium mb-1">First Consultation</h2>
          <p className="text-gray-500 text-sm">
            {formatDate(first_consultation || "")}
          </p>
        </div>
      </div>

      {/* Last Consultation Section */}
      <div className="flex items-center gap-3">
         <LuCalendar className="text-gray-400" />
        <div>
          <h2 className="text-gray-900 font-medium mb-1">Last Consultation</h2>
          <p className="text-gray-500 text-sm">{formatDate(last_consultation || "")}</p>
        </div>
      </div>
    </div>
  );
}
