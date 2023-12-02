import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <main className="h-screen grid grid-cols-2">
      <div className="flex justify-center items-center">
        <section className="w-[400px]">{children}</section>
      </div>
      <div className="hidden lg:block bg-orange-600" />
    </main>
  );
};
