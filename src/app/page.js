"use client";


import { CardEvent } from '@/components/event/components/CardEvent';

export default function Page() {

  return <main className='p-12 space-y-6'>
    <h1 className='text-3xl'>Active Event Now</h1>
    <div >
      <CardEvent />
    </div>
  </main>;
}
