// import React from "react";
// import { useRouter } from "next/navigation";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Divider,
//   Image,
// } from "@nextui-org/react";

// export const EventDashboardCard = ({ name, description, location, date }) => {
//   const router = useRouter();

//   const [currentName] = useState(name);

//   async function getEventByUserId() {
//     const res = await fetch(
//       "https://eventmakers-api.vercel.app/api/events?userid=2168fcb2-0609-4bec-bf4b-c1083daa0cdd",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: name,
//           description: description,
//           location: location,
//           date: date,
//         }),
//       }
//     );
//     const data = await res.json();
//     console.log(data);
//     router.refresh();
//   }
//   return (
//     <Card className="min-w-[400px] ">
//       <CardHeader className="flex gap-3">
//         <Image
//           alt="nextui logo"
//           height={40}
//           radius="sm"
//           src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
//           width={40}
//         />
//         <div className="flex flex-col">
//           <p className="text-md">{currentName}</p>
//           <p className="text-small text-default-500">{location}</p>
//         </div>
//       </CardHeader>
//       <Divider />
//       <CardBody>
//         <p>{description}</p>
//       </CardBody>
//       <Divider />
//       <CardFooter className="text-sm text-gray-400">{date}</CardFooter>
//     </Card>
//   );
// };
