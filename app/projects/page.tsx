"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import {motion} from "framer-motion";
import Particles from "../components/particles";
import { Eye } from "lucide-react";

const socials = [

	{	
		date: "4/28/2024",
		title: "ImmunoQuest: Evolution in the Bloodstream",
		description: "is an educational browser-based simulation where players observe white blood cells combating viruses in real time. Using the NEAT algorithm, it simulates the evolution of cells as they adapt to fight invaders. Built with JavaScript, HTML, CSS, and Phaser.js, the project highlights AI-driven behavior and neural network adaptation. Future plans include adding more environments, interaction features, and educational collaborations to enhance learning. Explore immune system dynamics in this interactive and engaging game!",
		handle: "Shenius",
		link: "https://github.com/karyeet/evolution",
	},
	{	
		date: "1/21/2024",
		title: "Shenius",
		description: "is an interactive web-based game that challenges players to identify influential women based on five clues and a gradually unblurring image. With each hint, the player learns about a remarkable woman who has made significant contributions in fields like activism, science, and the arts. This educational and fun game helps increase awareness of these women's achievements, while players enhance their knowledge and engage in a rewarding guessing experience.",
		handle: "Shenius",
		link: "https://github.com/Sworddafence/Womenerdle",
	},
	{	
		date: "11/7/2024",
		title: "Evo-sim",
		description: "Evo-Sim is a simulation game built with NEAT and Pygame, where a creature learns to adapt and evolve to eat food efficiently. With a cone of vision as its sensory input, the creature navigates its environment, driven by the NEAT algorithm to improve its behavior over generations. This project explores the intersection of artificial intelligence and evolution, offering a dynamic and engaging way to visualize machine learning in action. Perfect for those interested in AI and game simulations!",
		handle: "Evo-sim",
		link: "https://github.com/Sworddafence/Evo-sim",
	},
	{	
		date: "6/22/2022",
		title: "GoGo-Downloader",
		description: "is a versatile video downloader built with Bash and JavaScript's Puppeteer API. It supports downloading videos from various websites, with features like Google Drive integration via rclone. The script requires setup, including adding the directory to your $PATH variable for seamless use and adjusting hardcoded variables in specific scripts. While efficient, mass downloads may trigger CAPTCHA interruptions. Perfect for tech-savvy users looking for a customizable solution to manage video downloads effectively.",
		handle: "Video Downloader",
		link: "https://github.com/Sworddafence/VideoDL",
	},

];

export default function Example() {
	return (
		<motion.div
      initial={{opacity: 0, y: -100}}
      animate={{
        opacity: 1,
        y: 0,
	  transition:{duration:4}
      }}
    >
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
		<Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={2000}
      /> 
	  <Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto pt-24">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
          <Card>
		  <Link href={s.link}>
			<article className="relative w-full h-full py-8 p-4 md:p-8">
			  <div className="flex items-center justify-between gap-2">
				<div className="text-xs text-zinc-100">
				  {s.date ? (
					<time dateTime={new Date(s.date).toISOString()}>
					  {Intl.DateTimeFormat(undefined, {
						dateStyle: "medium",
					  }).format(new Date(s.date))}
					</time>
				  ) : (
					<span>SOON</span>
				  )}
				</div>
			  </div>

			  <h2
				id="featured-post"
				className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
			  >
				{s.title}
			  </h2>
			  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
				{s.description}
			  </p>
			  <div className="absolute bottom-4 md:bottom-4">
				<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
				  Read more <span aria-hidden="true">&rarr;</span>
				</p>
			  </div>
			</article>
		  </Link>
		</Card>
					))}
				</div>
			</div>
		</div>
		</motion.div>
	);
}

