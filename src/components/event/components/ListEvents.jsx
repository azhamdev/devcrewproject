import { CardEvent } from "./CardEvent"

async function getEvents() {
  const res = await fetch("https://eventmakers-api.vercel.app/api/events", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await res.json()
  return data
}

export default async function ListEvents() {
  const { data } = await getEvents()

  return (
    <main>
      <h1>Active Event Now</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map(({ name, desc, date, id }) => (
          <CardEvent key={id} name={name} desc={desc} date={date} id={id} />
        ))}
      </div>
    </main>
  )
}
