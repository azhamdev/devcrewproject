import { Header } from "@/components/header";
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
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const { data } = await getParticipantsData(params.id);
  console.log(data);

  return (
    <div>
      <Header />
      <div className="py-20 w-1/2 mx-auto">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>EMAIL</TableColumn>
            <TableColumn>PHONE</TableColumn>
          </TableHeader>
          <TableBody>
            {data?.participants?.map(({ id, name, email, phone }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {params.id}
    </div>
  );
}
