import { Header } from "@/components/header";
import { EventDashboardCard } from "@/components/EventDashboardCard";
import { EventInput } from "@/components/EventInput";

async function getAllEventsByUserId() {
  const res = await fetch(`https://eventmakers-api.vercel.app/api/events`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data } = await getAllEventsByUserId();
  console.log(data);
  return (
    <div>
      <Header />
      <div className="flex gap-10">
        <div className="flex flex-col item-center justify-center border-r bg-white w-1/4  h-screen px-6 shadow-sm space-y-6">
          <div className="text-3xl font-bold pl-3">Submit New Event</div>
          <div>
            <div>
              <EventInput />
            </div>
          </div>
        </div>
        <>
          <div className="py-28 space-y-3 w-screen">
            <div className="text-gray-500 text-xl ">My active events</div>
            <div className="grid grid-cols-2 lg:grid-cols-3 m-auto gap-3 ">
              {data?.map(({ id, name, location, description, date }) => (
                <EventDashboardCard
                  key={id}
                  name={name}
                  location={location}
                  description={description}
                  date={date}
                />
              ))}
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
