import { Login } from "@/components/auth/components/Login";

export default function Page() {
  return (
    <div className="mx-auto w-screen h-screen flex items-center justify-center">
      <div className=" h-1/2 flex flex-col">
        <Login />
      </div>
    </div>
  );
}
