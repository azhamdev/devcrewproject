"use client";

import { Link } from "@nextui-org/react";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useRegister } from "../hooks/useRegister";

export const Register = () => {
  const { loading, handleChange, handleSubmitRegister } = useRegister();

  return (
    <main className="space-y-3">
      <h1 className="text-3xl font-bold">Register your account</h1>
      <div className="flex gap-1 text-sm">
        <div>Have an account?</div>
        <Link href="/login">Login</Link>
      </div>
      <Input name="name" placeholder="name" onChange={handleChange} />
      <Input name="email" placeholder="email" onChange={handleChange} />
      <Input
        name="password"
        placeholder="password"
        type="password"
        onChange={handleChange}
      />
      <Button
        isDisabled={loading}
        className="bg-orange-600 text-white
        "
        onClick={handleSubmitRegister}
      >
        Register
      </Button>
    </main>
  );
};
