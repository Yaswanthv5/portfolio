"use client";
import { ArrowLeft, Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [isMenuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500 border-zinc-800"
				}`}
			>
				<div className="container flex items-center justify-between p-6 mx-auto">
					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6" />
					</Link>
					<div className="flex items-center gap-8">
						<div className="hidden md:flex gap-8">
							<Link
								href="/Experience"
								className="duration-200 text-zinc-400 hover:text-zinc-100"
							>
								Experience
							</Link>
							<Link
								href="/Resume"
								className="duration-200 text-zinc-400 hover:text-zinc-100"
							>
								Resume
							</Link>
							<Link
								href="/Skills"
								className="duration-200 text-zinc-400 hover:text-zinc-100"
							>
								Skills
							</Link>
							<Link
								href="/certifications"
								className="duration-200 text-zinc-400 hover:text-zinc-100"
							>
								Certifications
							</Link>
							<Link
								href="/contact"
								className="duration-200 text-zinc-400 hover:text-zinc-100"
							>
								Contact
							</Link>
						</div>
						<button
							className="md:hidden text-zinc-300 hover:text-zinc-100"
							onClick={() => setMenuOpen(!isMenuOpen)}
						>
							<Menu className="w-6 h-6" />
						</button>
					</div>
				</div>
				{isMenuOpen && (
					<div className="md:hidden flex flex-col items-center gap-4 p-4 bg-zinc-900 border-t border-zinc-800">
						<Link
							href="/Experience"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
							onClick={() => setMenuOpen(false)}
						>
							Experience
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
							onClick={() => setMenuOpen(false)}
						>
							Contact
						</Link>
						<Link
							href="/Skills"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
							onClick={() => setMenuOpen(false)}
						>
							Skills
						</Link>
						<Link
							href="/certifications"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
							onClick={() => setMenuOpen(false)}
						>
							Certifications
						</Link>
						<Link
							href="/Resume"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
							onClick={() => setMenuOpen(false)}
						>
							Resume
						</Link>
					</div>
				)}
			</div>
		</header>
	);
};
