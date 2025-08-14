import { Doctor } from "@/types/doctor";
import { paths } from "@/utils/paths";
import Image from "next/image";
import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function DoctorCard({
  about,
  department,
  email,
  image: image,
  name,
  phone,
   id
}: Doctor) {
  const initials = name?.charAt(0)
  return (
    <div className="bg-brand-primary/5 rounded-xl shadow p-4  font-sans">
      <div className="flex items-center gap-3 mb-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
         <Avatar className="h-10 w-10 bg-gray-700 flex-shrink-0">
            <AvatarImage
              src={image}
              alt={name}
              className="object-cover"
            />
            <AvatarFallback className="bg-brand-secondary text-sm font-semibold text-gray-100">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2 className="font-bold text-[#162447] text-base">{name}</h2>
          <p className="text-gray-600 text-xs">{email}</p>
        </div>
      </div>
      <div className="flex gap-2 mb-3 w-full">
        <div className="flex gap-2">
          <Link
            href={`tel:${phone}`}
            className="bg-[#5CE39B] rounded-md p-2 shadow transition flex-1 flex justify-center"
          >
            <FaPhoneAlt className="text-white" />
          </Link>
          <Link
            href={paths.message(id.toString())}
            className="bg-[#FFAE00] rounded-md p-2 shadow transition flex-1 flex justify-center"
          >
            <AiFillMessage className="text-white" />
          </Link>
        </div>
        <span className="bg-brand-secondary text-white p-2 rounded-md text-xs font-semibold flex-1 text-center">
          {department}
        </span>
      </div>
      <div className="mt-2 w-full">
        <div className="flex items-center gap-2 mb-1">
          <LuUser className="text-gray-400" />
          <span className="font-semibold text-sm text-gray-700">About Dr.</span>
        </div>
        <p className="text-gray-600 text-xs leading-relaxed">{about} </p>
      </div>
    </div>
  );
}


export function DoctorCardSkeleton() {
  return (
    <div className="bg-gray-100 rounded-xl shadow p-4  font-sans">
      <div className="flex items-center gap-3 mb-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 animate-pulse">
        </div>
        <div>
          <h2 className="font-bold bg-gray-200 text-base animate-pulse"></h2>
          <p className="bg-gray-200 text-xs animate-pulse"></p>
        </div>
      </div>
      <div className="flex gap-2 mb-3 w-full">
        <div className="flex gap-2">
          <div
            className="bg-gray-200 rounded-md p-2 shadow transition flex-1 flex justify-center"
          >
            <div className="bg-gray-200" />
          </div>
          <div
            className="bg-gray-200 rounded-md p-2 shadow transition flex-1 flex justify-center"
          >
            <div className="bg-gray-200" />
          </div>
        </div>
        <div className="bg-gray-200 text-white p-2 rounded-md text-xs font-semibold flex-1 text-center">
        </div>
      </div>
      <div className="mt-2 w-full">
        <div className="flex items-center gap-2 mb-1">
          <div className="bg-gray-200 w-6 h-6 rounded-full animate-pulse" />
          <div className="font-semibold text-sm text-gray-700"></div>
        </div>
        <p className="bg-gray-200 text-xs leading-relaxed"></p>
      </div>
    </div>
  );
}
