"use client";

import { useEffect, useState } from "react";
import PubNub from "pubnub";
import { useParams, usePathname } from "next/navigation";
import { useUserStore } from "@/store/userStore";

interface ChatMessage {
  text: string;
  sender?: string;
  time?: string;
}

interface MessageItem {
  id: string;
  message: ChatMessage;
}

export default function ChatView() {
  const { slug } = useParams();
  const [pubnub, setPubnub] = useState<any>(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUserStore();
  const channelName = `${slug}-${user?.email}`;

  useEffect(() => {
    // Create a new PubNub instance
    const pubnubInstance = new PubNub({
      publishKey: "pub-c-1fcc60d0-f1c4-415d-9c6b-11128af94aca",
      subscribeKey: "sub-c-0871e7e7-35ab-42b8-80c9-825d2d150a0b",
      userId: "rn-user-" + slug,
    });

    // Add listener to handle events
    pubnubInstance.addListener({
      // Message handler - called when a message is received
      message: function (event) {
        setMessages((messages) => [
          ...messages,
          {
            id: event.timetoken || Date.now().toString(),
            message: event.message,
          },
        ]);

        // Auto-scroll to bottom when new messages arrive
        // setTimeout(() => {
        //   if (flatListRef.current && messages.length > 0) {
        //     flatListRef.current.scrollToEnd({ animated: true });
        //   }
        // }, 100);
      },

      // Presence handler - called for join/leave events
      presence: function (event) {
        console.log("Presence event:", event);
        if (event.action === "join") {
          // Someone joined the channel
          alert("User Joined" + `${event.uuid} joined the chat`);
        } else if (event.action === "leave" || event.action === "timeout") {
          // Someone left the channel
          alert("User Left" + `${event.uuid} left the chat`);
        }
      },

      // Status handler - called for connection status changes
      status: function (event) {
        console.log("Status event:", event);
        if (event.category === "PNConnectedCategory") {
          setIsConnected(true);
          setIsLoading(false);
          console.log("Connected to PubNub!");
        } else if (event.category === "PNNetworkIssuesCategory") {
          setIsConnected(false);
          console.log("Connection lost. Attempting to reconnect...");
        } else if (event.category === "PNReconnectedCategory") {
          setIsConnected(true);
          console.log("Reconnected to PubNub!");
        }
      },
    });

    // Create a channel entity and subscription
    const channel = pubnubInstance.channel(channelName);
    const subscription = channel.subscription({
      receivePresenceEvents: true,
    });

    // Subscribe to the channel
    subscription.subscribe();

    // Fetch last 100 messages
    pubnubInstance.fetchMessages(
      {
        channels: [channel.name],
        count: 100,
      },
      (status, response) => {
        if (response?.channels?.[channel.name]) {
          const fetchedMessages = response.channels[channel.name].map(
            (msg) => ({
              id: msg.timetoken,
              message: msg.message,
            })
          );
          setMessages(fetchedMessages);
        }
      }
    );

    // Update state with PubNub instance
    setPubnub(pubnubInstance);

    // Clean up on component unmount
    return () => {
      pubnubInstance.removeAllListeners();
      pubnubInstance.destroy();
      console.log("Cleaned up PubNub connection");
    };
  }, []);

  const publishMessage = async () => {
    // Don't send empty messages or if not connected
    if (!inputText.trim() || !pubnub || !isConnected) return;

    try {
      // Create message object
      const messageObject: ChatMessage = {
        text: inputText,
        sender: pubnub.getUUID(),
        time: new Date().toISOString(),
      };

      // Publish to PubNub
      const result = await pubnub.publish({
        message: messageObject,
        channel: channelName,
      });

      console.log("Message published with timetoken:", result.timetoken);

      // Clear input after successful send
      setInputText("");
    } catch (error) {
      console.error("Publish failed:", error);
      alert(
        "Message Failed" + "Could not send your message. Please try again."
      );
    }
  };

  // Render a message item for the FlatList
  const renderMessageItem = ({ item }) => {
    const isCurrentUser = item.message.sender === pubnub?.getUUID();
    const messageTime = item.message.time
      ? new Date(item.message.time).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      : "";

    return (
      <div
        className={`p-3 rounded-lg max-w-xs md:max-w-md break-words mb-3 ${
          isCurrentUser
            ? "bg-blue-500 text-white self-end"
            : "bg-gray-200 text-black self-start"
        }`}
      >
        <div className="text-xs font-semibold mb-1">
          {isCurrentUser ? "You" : item.message.sender || "User"}
        </div>
        <div className="text-sm mb-1">{item.message.text}</div>
        <div className="text-[10px] text-gray-600 text-right">
          {messageTime}
        </div>
      </div>
    );
  };

  return isLoading ? (
    // Loading screen
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600 border-solid mb-4" />
      <p className="text-indigo-700 font-medium text-lg">
        Connecting to PubNub...
      </p>
    </div>
  ) : (
    // Chat UI
    <div className="flex flex-col h-screen p-4 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-300">
        <h1 className="text-xl font-bold text-gray-800">{channelName}</h1>
        <div
          className={`w-3 h-3 rounded-full ${
            isConnected ? "bg-green-500" : "bg-red-500"
          }`}
        />
      </div>

      {/* Messages List */}
      <div
        // ref={flatListRef}
        className="flex-1 overflow-y-auto space-y-2 py-4 px-1"
      >
        {messages.map((item) => (
          <div key={item.id}>{renderMessageItem({ item })}</div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center gap-2 border-t border-gray-300 pt-3">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") publishMessage();
          }}
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={publishMessage}
          disabled={!inputText.trim() || !isConnected}
          className={`px-4 py-2 text-white text-sm rounded ${
            !inputText.trim() || !isConnected
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          Send
        </button>
      </div>
    </div>
  );
}
