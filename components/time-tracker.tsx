"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TimeTracker() {
  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <span>Time Tracker</span>
          <Button size="icon" variant="ghost" className="text-white">
            <Play className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold mb-6">08:40:10</div>
        <div className="flex -space-x-2">
          <Avatar className="border-2 border-black">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-black">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-black">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black text-sm font-medium">
            32+
          </div>
        </div>
      </CardContent>
    </Card>
  );
}