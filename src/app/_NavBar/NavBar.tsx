"use client";
import React from "react";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

type Props = {};

const NavBar = (props: Props) => {
  const router = useRouter();
  return (
    <div className=" flex bg-primary px-2 py-1">
      <Button
        className="absolute shadow-lg"
        label="home"
        size="small"
        click={() => router.push("/")}
      />

      <h1 className="font-bold tracking-wider text-xl text-center grow text-foreground [text-shadow:_0_1px_5px_rgb(0_0_0_/_40%)] uppercase">
        Map Challenge
      </h1>
    </div>
  );
};

export default NavBar;
