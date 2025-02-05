import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import RatedGames from "../components/RatedGames";
import Accordion from "../components/Accordion";

import GridSection from "../components/GridSection";

function Home() {
  const data = useLoaderData();
  return (
    <div className="space-y-20">
      <section>
        <Banner />
      </section>
      <section className="flex items-center justify-center  py-12">
        <RatedGames data={data} />
      </section>
      <section className="w-10/12 mx-auto py-12">
        <GridSection />
      </section>
      <section className="w-10/12 mx-auto py-12">
        <Accordion />
      </section>
    </div>
  );
}

export default Home;
