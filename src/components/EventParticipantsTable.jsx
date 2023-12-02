"use client";

import React from "react";
import { useState, useEffect } from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

async function getParticipantsData(id) {
  const res = await fetch(
    `https://eventmakers-api.vercel.app/api/events/${id}`,
    { method: "GET" }
  );
  const data = await res.json();
  return data;
}

export const async EventParticipantsTable = ({ name, email, phone, id, params }) => {
  const data = await getParticipantsData(params.id)

  useEffect(() => {
    getParticipantsData();
  }, []);

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
