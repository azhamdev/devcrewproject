import React from "react";
import { Button } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";

import { useEffect, useState } from "react";

export const EventDashboardCard = ({
  name,
  description,
  date,
  id,
  location,
}) => {
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    getEventData();
  }, []);

  async function getEventData() {
    const res = await fetch(
      "https://eventmakers-api.vercel.app/api/events?userid=2168fcb2-0609-4bec-bf4b-c1083daa0cdd",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setEventData(data);
  }

  return (
    <div className="space-y-3">
      {eventData.data?.map(({ name, description, date, id }) => (
        <Card key={id} className="min-w-[400px] ">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">{name}</p>
              <p className="text-small text-default-500">{location}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{description}</p>
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-between text-sm text-gray-400">
            <div>{date}</div>
            <Button size="sm" className="bg-orange-500 text-white">
              Participants
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
