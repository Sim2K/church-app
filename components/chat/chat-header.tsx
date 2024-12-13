"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreVertical, RefreshCcw, Filter } from "lucide-react";

interface ChatHeaderProps {
  onUserClick: () => void;
}

export function ChatHeader({ onUserClick }: ChatHeaderProps) {
  return (
    <div className="border-b p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Avatar className="cursor-pointer" onClick={onUserClick}>
          <AvatarImage src="https://i.pravatar.cc/150?img=1" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">Jimmy Sullivan</div>
          <div className="text-sm text-muted-foreground">Online</div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost" size="icon">
          <RefreshCcw className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}