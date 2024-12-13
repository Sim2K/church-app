import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { CalendarView } from "@/components/calendar-view";
import { ActivityChart } from "@/components/activity-chart";
import { TimeTracker } from "@/components/time-tracker";

export default function Home() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Stay on Top of Your Work 👋</h1>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <CalendarView />
            <ActivityChart />
            <TimeTracker />
          </div>
        </main>
      </div>
    </div>
  );
}