/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/components/functions/helpers";
import { User } from "@/types/user";
import { GrLocation } from "react-icons/gr";
import { LuCalendar } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import image from "next/image";

export default function ProfileCard({
  first_consultation,
  email,
  name: name,
  last_consultation,
  location,
  display_picture,
}: User) {
  const initials = name?.charAt(0);
  return (
    <div className="md:max-w-md mx-auto bg-white rounded-md shadow p-4">
      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <Avatar className="h-10 w-10 bg-gray-700 flex-shrink-0">
            <AvatarImage
              src={display_picture}
              alt={name}
              className="object-cover"
            />
            <AvatarFallback className="bg-brand-secondary text-sm font-semibold text-gray-100">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-semibold text-gray-900 mb-1">{name}</h1>
          <p className="text-gray-500 text-xs line-clamp-1 truncate">{email}</p>
        </div>
      </div>

      {/* Location Section */}
      <div className="flex items-center gap-3 mb-6">
        <GrLocation className="text-gray-400" />
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
          <p className="text-gray-500 text-sm">
            {formatDate(last_consultation || "")}
          </p>
        </div>
      </div>
    </div>
  );
}
