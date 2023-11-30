"use client";

import { Header } from "@/components/header";
import { EventInput } from "@/components/eventinput";
import { EventDashboardCard } from "@/components/EventDashboardCard";

async function getEventListByUserId() {
  const res = await fetch(
    "https://eventmakers-api.vercel.app/api/events?userid=2168fcb2-0609-4bec-bf4b-c1083daa0cdd",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { items } = await getEventListByUserId();
  return (
    <div>
      <Header />
      <div className="flex gap-10">
        <div className="flex flex-col item-center justify-center border-r bg-white w-1/4  h-screen px-6 shadow-sm space-y-6">
          <div className="text-3xl font-bold ">Submit New Event</div>
          <div>
            <div>
              <EventInput />
            </div>
          </div>
        </div>
        <>
          <div className="py-28 space-y-4">
            <div className="text-gray-500 text-xl ">My active events</div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <EventDashboardCard />
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
