import { Header } from "@/components/header";
import { EventParticipantsTable } from "@/components/EventParticipantsTable";
export default function EventDetails({ params }) {
  return (
    <div>
      <Header />
      <EventParticipantsTable />
    </div>
  );
}
