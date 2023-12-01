"use client"

import { Button } from "@nextui-org/react"
import Image from "next/image"
import Sample from "../../../../public/assets/dummy.png"
import Link from "next/link"

export const CardEvent = ({ name, desc, date, id }) => {
  return (
    <div className="bg-primaryCard w-full h-96 rounded-lg px-5 py-3 flex flex-col justify-between">
      <div className="space-y-2">
        <p className="font-light text-xs">NEW</p>
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-sm font-normal h-16 overflow-hidden">{desc}</div>
      </div>
      <div className="w-full h-32">
        <Image src={Sample} className="object-cover w-full h-full" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs">{date}</p>
          <p className="text-xs">Would you join</p>
        </div>
        <Link href={`/find/${id}`}>
          <Button className="bg-[#FF503B] text-white rounded-full">
            Join Now
          </Button>
        </Link>
      </div>
    </div>
  )
}
