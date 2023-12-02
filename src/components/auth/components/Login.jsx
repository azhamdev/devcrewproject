"use client";

import { Link } from "@nextui-org/react";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useLogin } from "../hooks/useLogin";
import { Image } from "@nextui-org/image";
import imgLogin from "/public/assets/eventBoomLogin.png";

export const Login = () => {
  const { loading, handleChange, handleSubmitLogin } = useLogin();

  return (
    <main className="space-y-3">
      <h1 className="text-3xl font-bold">Sign in to your account</h1>
      <div className="flex gap-1 text-sm">
        <div>Don't have an account?</div>
        <Link href="/register">Register</Link>
      </div>
      <Input name="email" placeholder="email" onChange={handleChange} />
      <Input
        name="password"
        placeholder="password"
        type="password"
        onChange={handleChange}
      />
      <Button
        isDisabled={loading}
        className="bg-orange-600 text-white"
        onClick={handleSubmitLogin}
      >
        Login
      </Button>
    </main>
  );
};
