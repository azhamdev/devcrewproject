import ListEvents from "@/components/event/components/ListEvents";
import { Header } from "@/components/header";


export default async function Page() {
  return <div>
    <Header />
    <main className='p-12 space-y-6'>
      <h1 className='text-3xl'>Active Event Now</h1>
      <ListEvents />
    </main>
  </div>;
}

