"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const months = ["Jan", "Feb", "Mar", "Apr", "May"];
const data = [
  { month: "Jan", value: 45, change: "+8%" },
  { month: "Feb", value: 30, change: null },
  { month: "Mar", value: 40, change: "-2%" },
  { month: "Apr", value: 80, change: "+6%" },
  { month: "May", value: 60, change: "+12%" },
];

export function ActivityChart() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Activity</CardTitle>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm">Project</Button>
          <Button variant="ghost" size="sm">Shots</Button>
          <Button variant="ghost" size="sm">Product</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative h-[200px] flex items-end gap-8">
          {data.map((item) => (
            <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
              <div className="relative w-full">
                <div
                  className="w-full bg-orange-500 rounded-full"
                  style={{
                    height: `${item.value}%`,
                    opacity: item.month === "Apr" ? 1 : 0.2,
                  }}
                />
                {item.change && (
                  <span
                    className={cn(
                      "absolute -top-6 left-1/2 -translate-x-1/2 text-xs",
                      item.change.startsWith("+") ? "text-green-500" : "text-red-500"
                    )}
                  >
                    {item.change}
                  </span>
                )}
              </div>
              <span className="text-sm text-muted-foreground">{item.month}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}