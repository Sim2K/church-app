"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LogOut, Home, FolderOpen, Users, Calendar, BarChart2, MessageSquare, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: MessageSquare, label: "Chat", path: "/chat" },
  { icon: FolderOpen, label: "Projects", path: "/projects", badge: "4" },
  { icon: Users, label: "Team", path: "/team", badge: "2" },
  { icon: Calendar, label: "Schedule", path: "/schedule" },
  { icon: BarChart2, label: "Analytics", path: "/analytics" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "flex h-screen flex-col border-r bg-background p-6 transition-all duration-300",
      isCollapsed ? "w-[80px]" : "w-[240px]"
    )}>
      <div className="flex items-center gap-2 mb-8">
        {!isCollapsed && <div className="h-8 w-8 rounded-full bg-orange-500" />}
        <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)} className="ml-auto">
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant={pathname === item.path ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              isCollapsed ? "px-2" : "gap-3"
            )}
            asChild
          >
            <Link href={item.path}>
              <item.icon className="h-5 w-5" />
              {!isCollapsed && (
                <>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-orange-500 text-white px-2 rounded-full text-xs">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </Link>
          </Button>
        ))}
      </nav>

      <Button variant="outline" className={cn(
        "gap-2",
        isCollapsed && "px-2"
      )}>
        <LogOut className="h-5 w-5" />
        {!isCollapsed && "Logout"}
      </Button>
    </div>
  );
}