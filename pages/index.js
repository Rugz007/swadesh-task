import Card from "../components/Card";
import MainCard from "../components/MainCard";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
export default function Home({ data }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <img className="absolute top-24" src="images/Circles.svg" />
      <div
        className="grid grid-cols-12 z-22"
        style={{ backgroundColor: "#032C28", height: "35rem" }}
      >
        <div />
        <div className="col-span-10">
          <img className="py-10 " src="Logo.svg" />

          <link href="fonts/THICCCBOI/THICCCBOI-Light.woff2" rel="stylesheet" />
          <div>
            <p
              className=" relative font-custom font-black text-5xl z-20 py-3 lg:py-20"
              style={{ color: "white" }}
            >
              All properties
            </p>
          </div>
        </div>
        <div />
      </div>
      <div data-aos="fade-up" className="-my-64 z-20 lg:-my-44 relative ">
        <MainCard data={data.activeProperty} status="ACTIVE" />
        <div className="grid grid-cols-12 ">
          <div className="col-span-1" />
          <div className="col-span-10 2xl:mx-16">
            <p className="font-custom font-black text-5xl mt-40 mb-20">
              Past properties
            </p>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 2xl:gap-12 mb-20">
              {data.pastProperties.map((e) => (
                <div  data-aos="fade-up" className="pt-0 ">
                  <Card  data={e} status="FUNDED" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1" />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
