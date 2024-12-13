"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UserSheetProps {
  isOpen: boolean;
  onClose: () => void;
  user?: {
    name: string;
    email: string;
    image: string;
    role: string;
  };
}

export function UserSheet({ isOpen, onClose, user }: UserSheetProps) {
  if (!user) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader className="relative">
          <SheetClose className="absolute right-4 top-4">
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </SheetClose>
        </SheetHeader>
        <div className="flex flex-col items-center mt-6">
          <Avatar className="w-20 h-20 mb-4">
            <AvatarImage src={user.image} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <SheetTitle className="font-medium text-lg">{user.name}</SheetTitle>
          <p className="text-sm text-muted-foreground">{user.role}</p>
        </div>

        <div className="space-y-4 mt-6">
          <div>
            <label className="text-sm font-medium">Email</label>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <div>
            <label className="text-sm font-medium">Local Time</label>
            <p className="text-sm text-muted-foreground">Mon, 15:20 GMT+7</p>
          </div>
          <div>
            <label className="text-sm font-medium">Notes</label>
            <Input placeholder="Add user notes" className="mt-1" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}