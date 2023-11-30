"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@nextui-org/react";

export const EventInput = () => {
  const placements = ["outside"];
  const router = useRouter();
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState("");

  async function createEvent() {
    const res = await fetch("https://eventmakers-api.vercel.app/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: eventName,
        description: eventDescription,
        location: eventLocation,
        date: eventDate,
        authorId: "",
      }),
    });
    const data = await res.json();
    console.log(data);
    setEventName("");
    setEventDescription("");
    setEventLocation("");
    setEventDate("");
    router.refresh();
  }

  return (
    <div className="flex flex-col justify-between px-4 gap-4 w-full m-auto ">
      <div className="flex flex-col gap-2 space-y-3">
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Input
              key={placement}
              type={eventName}
              value={eventName}
              label="Event name"
              labelPlacement={placement}
              placeholder="Enter event name"
              onChange={(e) => setEventName(e.target.value)}
            />
          ))}
        </div>
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Input
              key={placement}
              type={eventDescription}
              value={eventDescription}
              label="Event description"
              labelPlacement={placement}
              placeholder="Enter event name"
              onChange={(e) => setEventDescription(e.target.value)}
            />
          ))}
        </div>
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Input
              key={placement}
              type={eventLocation}
              value={eventLocation}
              label="Event location"
              labelPlacement={placement}
              placeholder="Enter event date"
              onChange={(e) => setEventLocation(e.target.value)}
            />
          ))}
        </div>
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Input
              key={placement}
              type={eventDate}
              value={eventDate}
              label="Event date"
              labelPlacement={placement}
              placeholder="Enter event date"
              onChange={(e) => setEventDate(e.target.value)}
            />
          ))}
        </div>
        <Button
          className="bg-orange-600 text-white w-2/6"
          onClick={createEvent}
        >
          Submit Event
        </Button>
      </div>
    </div>
  );
};
