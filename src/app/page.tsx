"use client";
import Button from "@/app/components/Button";
import Title from "@/app/components/Title";
import { IPosition } from "@/interfaces/position";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  
  return (
    <div>
      <Title label="Map Challenge" />
      <Button label='Start tracking yout pet' size="small" click={() => router.push('/map')} />
    </div>
  );
}

