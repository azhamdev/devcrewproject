"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";

export const EventDashboardCard = ({
  name,
  description,
  date,
  id,
  location,
}) => {
  return (
    <div className="space-y-3">
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
          <Link href={`/dashboard/${id}`}>
            <Button
              id={id}
              as="a"
              size="sm"
              className="bg-orange-600 text-white"
            >
              Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
