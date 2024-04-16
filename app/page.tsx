import Image from "next/image";
import { Hero } from "@/components";
import { global } from "styled-jsx/css";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
    </main>
  )
}