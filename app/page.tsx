import Image from "next/image";
import { Hero, SearchBar, CustomFilter  } from "@/components";
import { global } from "styled-jsx/css";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-comtainer">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>The cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />


          </div>
        </div>
      </div>
    </main>
  )
}