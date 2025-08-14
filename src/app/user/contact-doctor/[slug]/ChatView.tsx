"use client";

import { MessageItemComponent } from "@/components/ui/ChatBubble";
import { useUserStore } from "@/store/userStore";
import { ANY } from "@/types";
import { Doctor } from "@/types/doctor";
import Image from "next/image";
import { useParams } from "next/navigation";
import PubNub from "pubnub";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";

export interface ChatMessage {
  text: string;
  sender?: string;
  time?: string;
}

export interface MessageItem {
  id: string;
  message: ChatMessage;
}

const ChatView: FC<{ doctor: Doctor }> = ({ doctor }) => {
  const { slug } = useParams();
  const [pubnub, setPubnub] = useState<PubNub | null>(null);
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [inputText, setInputText] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [ , setIsLoading] = useState(true);
  const { user } = useUserStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const thisUserId = user?.id.toString()+"user";
  // const doctor = dummyDoctors.find((doc) => doc.id === slug);
  const channelName = useMemo(
    () => (!user?.id ? null : `doctor-${slug}-user-${user?.id}`),
    [slug, user?.id]
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!channelName) return;
    console.log({ channelName });

    const pubnubInstance = new PubNub({
      publishKey: "pub-c-1fcc60d0-f1c4-415d-9c6b-11128af94aca",
      subscribeKey: "sub-c-0871e7e7-35ab-42b8-80c9-825d2d150a0b",
      userId: "user-" + slug,
    });

    pubnubInstance.addListener({
      message: (event) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: event.timetoken,
            message: event.message as unknown as ChatMessage,
          },
        ]);
      },
      status: (event) => {
        if (event.category === "PNConnectedCategory") {
          setIsConnected(true);
          setIsLoading(false);

          pubnubInstance.fetchMessages(
            {
              channels: [channelName],
              count: 100,
            },
            (status, response) => {
              // console.log("has no messages ", response);
              if (response?.channels?.[channelName]) {
                // console.log(
                //   "has messages ",
                //   response.channels[channelName].length
                // );

                const fetchedMessages = response.channels[channelName].map(
                  (msg) => ({
                    id: msg.timetoken,
                    message: msg.message as unknown as ChatMessage,
                  })
                ) as MessageItem[];
                setMessages(fetchedMessages);
              }
            }
          );
        } else if (event.category === "PNNetworkIssuesCategory") {
          setIsConnected(false);
        } else if (event.category === "PNReconnectedCategory") {
          setIsConnected(true);
        }
      },
    });

    pubnubInstance.subscribe({
      channels: [channelName],
      withPresence: true,
    });

    setPubnub(pubnubInstance);

    return () => {
      pubnubInstance.removeAllListeners();
      pubnubInstance.unsubscribeAll();
    };
  }, [slug, channelName]);

  const publishMessage = async () => {
    if (!inputText.trim() || !pubnub || !isConnected) return;

    try {
      if (!channelName) return;
      const messageObject: ChatMessage = {
        text: inputText,
        sender: thisUserId,
        time: new Date().toISOString(),
      };

      pubnub.publish({
        message: messageObject as ANY,
        channel: channelName,
      });

      setInputText("");
    } catch (_) {
      alert("Message Failed. Could not send your message. Please try again.");
    }
  };

  if (!doctor || !user) return null;

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex items-center gap-3 px-8 py-6 border-b border-gray-200">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={48}
          height={48}
          className="rounded-full object-cover aspect-square overflow-hidden bg-gray-200"
        />
        <div>
          <div className="font-semibold text-lg text-[#162447]">
            {doctor.name}
          </div>
          <div className="text-gray-400 text-sm">{doctor.email}</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col px-8 py-6 overflow-y-auto bg-white">
        <div className="flex justify-center mb-6">
          <span className="bg-[#F6F6F6] text-gray-400 text-xs px-4 py-1 rounded-full font-medium">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {messages.map((item) => (
            <MessageItemComponent
              key={item.id}
              item={item}
              isCurrentUser={item.message.sender === thisUserId}
              person={item.message.sender === thisUserId ? user : doctor}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="px-8 py-4  bg-white">
        <div className="flex items-center gap-3 bg-[#F6F6F6] rounded-full px-4 py-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Write a message..."
            onKeyDown={(e) => {
              if (e.key === "Enter") publishMessage();
            }}
            className="flex-1 bg-transparent outline-none text-sm px-2 py-1"
          />
          <button
            onClick={publishMessage}
            disabled={!inputText.trim() || !isConnected}
            className={`rounded-full p-2 transition ${
              !inputText.trim() || !isConnected
                ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                : "bg-[#2979F2] text-white hover:bg-[#1862c6]"
            }`}
            aria-label="Send"
          >
            <FiSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
