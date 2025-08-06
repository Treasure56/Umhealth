import { Doctor } from "@/types/doctor";
import Image from "next/image";
import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { LuUser } from "react-icons/lu";

export default function DoctorCard({
  about,
  department,
  email,
  image,
  name,
  phone,
}: Doctor) {
  return (
    <div className="bg-[#EDFFE4] rounded-xl shadow p-4  font-sans">
      <div className="flex items-center gap-3 mb-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-full"
          />
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
            href={`mailto:${email}`}
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
