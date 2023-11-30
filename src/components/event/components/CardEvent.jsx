"use client"

import { Button } from "@nextui-org/react"
import Image from "next/image"
import Sample from "../../../../public/assets/dummy.png"
import { useEffect, useState } from "react"

export const CardEvent = ({ name, desc, date, id }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [eventData, setEventData] = useState({})

  useEffect(() => {
    getEventData()
  }, [])

  async function getEventData() {
    setIsLoading(true)
    const res = await fetch("https://eventmakers-api.vercel.app/api/events")
    const data = await res.json()
    setEventData(data)
    setIsLoading(false)
  }

  return (
    <div>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <h1 className="font-semibold text-lg">Loading data ...</h1>
        </div>
      ) : (
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3">
          {eventData.data?.map(({ name, description, date, id }) => (
            <div
              key={id}
              className="bg-primaryCard w-full h-96 rounded-lg px-5 py-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <p className="font-light text-xs">NEW</p>
                <div className="font-semibold text-lg">{name}</div>
                <div className="text-sm font-normal h-16 overflow-hidden">
                  {description}
                </div>
              </div>
              <div className="w-full h-32">
                <Image src={Sample} className="object-cover w-full h-full" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs">{date}</p>
                  <p className="text-xs">Would you join</p>
                </div>
                <Button className="bg-[#FF503B] text-white rounded-full">
                  Join Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
