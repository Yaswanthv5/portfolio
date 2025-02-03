import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Experience", href: "/Experience" },
  { name: "Contact", href: "/contact" },
  { name: "Skills", href: "/Skills" },
  { name: "Resume", href: "/Resume" },
  { name: "Certifications", href: "/certifications"},
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Yaswanthreddy Varikuti
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Data and AI Engineer with experience in automating data pipelines, 
          optimizing ETL processes, and implementing scalable cloud solutions. 
          Proficient in machine learning, data engineering, and big data technologies. 
          Hands-on expertise in cloud platforms such as GCP, AWS,Azure and Snowflake, with a strong foundation in SQL, Python, and data architecture. 
          Skilled in designing efficient data workflows that improve system performance, reduce manual effort, and enhance data accuracy.     
        </h2>
      </div>
    </div>
  );

}
