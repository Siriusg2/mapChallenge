"use client";
import Button from "@/app/components/Button";
import Title from "@/app/components/Title";
import { IPosition } from "@/interfaces/position";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  
  return (
    <div className="bg-background grow flex flex-col justify-center items-center">
      <Title className="m-5 text-foreground" label="Map Challenge" superHuge />
      <Button label='Start tracking yout pet' size="large" click={() => router.push('/map')} />
    </div>
  );
}

