"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Image } from "@nextui-org/react";

export const AuthLayout = ({ children }) => {
  const pathname = usePathname();
  const imageUrl =
    pathname === "/login"
      ? "/assets/eventBoomLogin.png"
      : "/assets/eventBoomRegister.png";

  return (
    <main className="h-screen grid grid-cols-2">
      <div className="flex justify-center items-center">
        <section className="w-[400px]">{children}</section>
      </div>
      <div className="flex justify-center items-center p-20">
        <Image isZoomed src={imageUrl} width={700} height={700} />
      </div>
    </main>
  );
};
