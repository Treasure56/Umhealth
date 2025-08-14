import { MessageItem } from "@/app/user/contact-doctor/[slug]/ChatView";
import { Doctor } from "@/types/doctor";
import { User } from "@/types/user";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

/* eslint-disable @next/next/no-img-element */
export const MessageItemComponent: FC<{ item: MessageItem; isCurrentUser: boolean, person: User|Doctor }> = ({
  item,
  isCurrentUser,
  person
}) => {
  const messageTime = item.message.time
    ? new Date(item.message.time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

    console.log({person});
    
    const p = {
      image: (person as User)?.display_picture ?? (person as Doctor)?.image ?? "",
    }
    

    const initials = person.name?.charAt(0)
  return (
    <div
      className={`flex items-end gap-2 ${
        isCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isCurrentUser && (
       <Avatar className="h-10 w-10 bg-gray-700 flex-shrink-0">
            <AvatarImage
              src={p.image}
              alt={person.name}
              className="object-cover"
            />
            <AvatarFallback className="bg-brand-secondary text-sm font-semibold text-gray-100">
              {initials}
            </AvatarFallback>
          </Avatar>
      )}
      <div
        className={`rounded-xl px-4 py-3 mb-2 max-w-[70vw] md:max-w-lg shadow-sm ${
          isCurrentUser
            ? "bg-[#2979F2] text-white rounded-br-none"
            : "bg-[#F6F6F6] text-gray-900 rounded-bl-none"
        }`}
      >
        <div className="text-sm whitespace-pre-line">{item.message.text}</div>
        <div
          className={`text-[11px] mt-1 ${
            isCurrentUser ? "text-blue-100 text-right" : "text-gray-400 text-left"
          }`}
        >
          {messageTime}
        </div>
      </div>
      {isCurrentUser && (
        <Avatar className="h-10 w-10 bg-gray-700 flex-shrink-0">
            <AvatarImage
              src={p.image}
              alt={person.name}
              className="object-cover"
            />
            <AvatarFallback className="bg-brand-secondary text-sm font-semibold text-gray-100">
              {initials}
            </AvatarFallback>
          </Avatar>
      )}
    </div>
  );
};