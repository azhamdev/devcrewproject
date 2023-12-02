async function getSingleEvent(id) {
  const res = await fetch(`https://eventmakers-api.vercel.app/api/events/${id}`)
  const data = await res.json();
  return data;
}

export default async function page({ params }) {
  const data = await getSingleEvent(params.id)
  return (
    <div>page</div>
  )
}
