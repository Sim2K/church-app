"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserProfile() {
  return (
    <div className="w-80 border-l p-4">
      <div className="flex flex-col items-center mb-6">
        <Avatar className="w-20 h-20 mb-4">
          <AvatarImage src="https://i.pravatar.cc/150?img=1" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <h3 className="font-medium text-lg">Jimmy Sullivan</h3>
        <p className="text-sm text-muted-foreground">Customer</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Email</label>
          <p className="text-sm text-muted-foreground">jimmy.sullivan@example.com</p>
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
    </div>
  );
}