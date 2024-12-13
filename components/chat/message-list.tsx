"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: number;
  sender: string;
  content: string;
  time: string;
  isAgent: boolean;
}

interface MessageListProps {
  onUserClick: (user: any) => void;
}

const messages: Message[] = [
  {
    id: 1,
    sender: "Jurgen Brandt",
    content: "Hi Jimmy. That depends. Please provide your order number and I'll see what I can do.",
    time: "10:12",
    isAgent: true,
  },
  {
    id: 2,
    sender: "Jimmy Sullivan",
    content: "12568873",
    time: "10:12",
    isAgent: false,
  },
  {
    id: 3,
    sender: "Jurgen Brandt",
    content: "It looks like the package hasn't left our warehouse yet so we can still cancel it. Would you like me to do that for you?",
    time: "10:12",
    isAgent: true,
  },
  {
    id: 4,
    sender: "Jimmy Sullivan",
    content: "Yes, please",
    time: "10:12",
    isAgent: false,
  },
];

export function MessageList({ onUserClick }: MessageListProps) {
  return (
    <div className="flex-1 p-4 overflow-auto space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex gap-3 ${
            message.isAgent ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <Avatar 
            className="cursor-pointer"
            onClick={() => onUserClick({
              name: message.sender,
              email: `${message.sender.toLowerCase().replace(' ', '.')}@example.com`,
              image: `https://i.pravatar.cc/150?img=${message.id}`,
              role: message.isAgent ? "Agent" : "Customer"
            })}
          >
            <AvatarImage src={`https://i.pravatar.cc/150?img=${message.id}`} />
            <AvatarFallback>{message.sender[0]}</AvatarFallback>
          </Avatar>
          <div
            className={`rounded-lg p-3 max-w-[70%] ${
              message.isAgent
                ? "bg-accent"
                : "bg-orange-500 text-white"
            }`}
          >
            <div className="font-medium text-sm">{message.sender}</div>
            <div>{message.content}</div>
            <div className="text-xs opacity-70 mt-1">{message.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}