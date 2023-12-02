"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export const EventParticipantsTable = ({ name, email, phone, id }) => {
  const router = useRouter();
  const { eventdetails } = router.query;
  const [participantsData, setParticipantsData] = useState([]);

  useEffect(() => {
    if (eventdetails) {
      getParticipantsData(eventdetails);
    }
  }, [eventdetails]);

  async function getParticipantsData() {
    const res = await fetch(
      `https://eventmakers-api.vercel.app/api/events/${id}`,
      { method: "GET" }
    );
    const data = await res.json();
    console.log(data);
    setParticipantsData(data);
  }
  return (
    <div className="py-20 w-1/2 mx-auto">
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>PHONE</TableColumn>
        </TableHeader>
        <TableBody>
          {participantsData?.data?.participants?.map(
            ({ name, email, phone, id }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{phone}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};
