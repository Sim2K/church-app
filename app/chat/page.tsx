"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { ConversationList } from "@/components/chat/conversation-list";
import { ChatHeader } from "@/components/chat/chat-header";
import { MessageList } from "@/components/chat/message-list";
import { MessageInput } from "@/components/chat/message-input";
import { UserSheet } from "@/components/chat/user-sheet";

export default function ChatPage() {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isUserSheetOpen, setIsUserSheetOpen] = useState(false);

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
    setIsUserSheetOpen(true);
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1">
        <ConversationList onUserClick={handleUserClick} />
        <div className="flex-1 flex flex-col">
          <ChatHeader onUserClick={() => handleUserClick({
            name: "Jimmy Sullivan",
            email: "jimmy.sullivan@example.com",
            image: "https://i.pravatar.cc/150?img=1",
            role: "Customer"
          })} />
          <MessageList onUserClick={handleUserClick} />
          <MessageInput />
        </div>
      </div>
      <UserSheet 
        isOpen={isUserSheetOpen}
        onClose={() => setIsUserSheetOpen(false)}
        user={selectedUser}
      />
    </div>
  );
}