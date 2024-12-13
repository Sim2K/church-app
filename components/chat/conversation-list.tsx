"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";

interface ConversationListProps {
  onUserClick: (user: any) => void;
}

export function ConversationList({ onUserClick }: ConversationListProps) {
  return (
    <div className="w-80 border-r p-4 flex flex-col">
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search conversations" className="pl-10" />
        </div>
      </div>
      
      <div className="flex-1 space-y-2">
        {[1, 2, 3].map((i) => (
          <Card 
            key={i} 
            className="p-3 cursor-pointer hover:bg-accent"
            onClick={() => onUserClick({
              name: `User ${i}`,
              email: `user${i}@example.com`,
              image: `https://i.pravatar.cc/150?img=${i}`,
              role: "Customer"
            })}
          >
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src={`https://i.pravatar.cc/150?img=${i}`} />
                <AvatarFallback>U{i}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div className="font-medium">User {i}</div>
                  <div className="text-xs text-muted-foreground">10:12</div>
                </div>
                <div className="text-sm text-muted-foreground truncate">
                  Latest message preview...
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}