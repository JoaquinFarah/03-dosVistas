import Image from "next/image";
import { Hero, SearchBar, CardCard } from "@/components";

import { fetchCars } from "@/utils";

export default async function Home({searchParams}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || '' ,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || '' ,
    model: searchParams.model || '',
  });
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;

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
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CardCard car={car} />
              ))}

            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>      
    </main>
  )
}