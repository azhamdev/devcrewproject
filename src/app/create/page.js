import { Header } from "@/components/header";
// import { dashboartable } from "@/components/NoteCard";
import { EventInput } from "@/components/eventinput";

export default function Page() {
  return (
    <>
      <Header />
      <div>
        <div className="flex flex-col justify-center border-r bg-white w-1/4 h-screen px-6 shadow-sm space-y-6">
          <div className="text-3xl font-bold ">Submit New Event</div>
          <div>
            <div>
              <EventInput />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
