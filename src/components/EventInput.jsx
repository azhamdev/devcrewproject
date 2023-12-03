"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@nextui-org/react";

export const EventInput = () => {
  const placements = ["outside"];
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  async function createEvent() {
    const res = await fetch("https://eventmakers-api.vercel.app/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        location: location,
        date: date,
        authorId: "2168fcb2-0609-4bec-bf4b-c1083daa0cdd",
      }),
    });
    const data = await res.json();
    console.log(data);
    setName("");
    setDescription("");
    setLocation("");
    setDate("");
    router.refresh();
  }

  return (
    <div className="flex flex-col justify-between px-4 gap-4 w-full m-auto ">
      <div className="flex flex-col gap-2 space-y-3">
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Input
              isRequired
              key={placement}
              type={name}
              value={name}
              label="Event Name"
              labelPlacement={placement}
              placeholder="Enter event name"
              onChange={(e) => setName(e.target.value)}
            />
          ))}
        </div>
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Input
              isRequired
              key={placement}
              type={description}
              value={description}
              label="Description"
              labelPlacement={placement}
              placeholder="Enter event name"
              onChange={(e) => setDescription(e.target.value)}
            />
          ))}
        </div>
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Input
              isRequired
              key={placement}
              type={location}
              value={location}
              label="Location"
              labelPlacement={placement}
              placeholder="Enter event location"
              onChange={(e) => setLocation(e.target.value)}
            />
          ))}
        </div>
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Input
              isRequired
              key={placement}
              type={date}
              value={date}
              label="Date"
              labelPlacement={placement}
              placeholder="Enter event date"
              onChange={(e) => setDate(e.target.value)}
            />
          ))}
        </div>
        <Button className="bg-orange-600 text-white " onClick={createEvent}>
          Submit Event
        </Button>
      </div>
    </div>
  );
};
