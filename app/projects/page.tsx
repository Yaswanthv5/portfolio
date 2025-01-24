"use client";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import {motion} from "framer-motion";
import Particles from "../components/particles";

const socials = [
	{
		label: "is an interactive web-based game that challenges players to identify influential women based on five clues and a gradually unblurring image. With each hint, the player learns about a remarkable woman who has made significant contributions in fields like activism, science, and the arts. This educational and fun game helps increase awareness of these women's achievements, while players enhance their knowledge and engage in a rewarding guessing experience.",
		handle: "Shenius",
	},

];

export default function Example() {
	return (
		<motion.div
      initial={{opacity: 0, y: 1000}}
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

								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
	
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
						</Card>
					))}
				</div>
			</div>
		</div>
		</motion.div>
	);
}

