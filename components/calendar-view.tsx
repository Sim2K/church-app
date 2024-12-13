"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const days = [
  { id: "sun", label: "S" },
  { id: "mon", label: "M" },
  { id: "tue", label: "T" },
  { id: "wed", label: "W" },
  { id: "thu", label: "T" },
  { id: "fri", label: "F" },
  { id: "sat", label: "S" },
];
const dates = Array.from({ length: 7 }, (_, i) => i + 6);

export function CalendarView() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Calendar</CardTitle>
        <Button variant="ghost" className="gap-2">
          June <ChevronDown className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-4 text-center">
          {days.map((day) => (
            <div key={day.id} className="text-sm font-medium text-muted-foreground">
              {day.label}
            </div>
          ))}
          {dates.map((date) => (
            <Button
              key={`date-${date}`}
              variant={date === 10 ? "default" : "ghost"}
              className={cn(
                "h-10 w-10 p-0 rounded-full",
                date === 10 && "bg-orange-500 hover:bg-orange-600"
              )}
            >
              {date}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}