"use client";
// import { Github, Mail, Linkedin } from "lucide-react";
// import Link from "next/link";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const certificates = [
    {
        icon: "/SnowPro.png",
        label: "SnowPro",
        handle: "Snowflake"
    },
    {
        icon: "/Gen AI (1).png",
        label: "Gen AI",
        handle: "Cognizant"
    },
    {
        icon: "/MDM_SaaS_Badge_200x200.png",
        label: "MDM SaaS",
        handle: "Informatica"
    },
    {
        icon: "/Project.png",
        label: "Project Management",
        handle: "Cognizant"
    },
    {
        icon: "/CMCW Badge.png",
        label: "CMCW Badge",
        handle: "Snowflake"
    },
    {
        icon: "/DA-snowflake-badge.png",
        label: "Data Application",
        handle: "Snowflake"
    },
    {
        icon: "/DWM Badge.png",
        label: "Data Warehouse Management",
        handle: "Snowflake"
    },
    {
        icon: "/gcp_skill_10.png",
        label: "GCP Skill Star",
        handle: "Google"
    },
    {
        icon: "/gcp_skill_2.png",
        label: "GCP skill Explorer",
        handle: "Google"
    },
    {
        icon: "/sf Data eng Badge.png",
        label: "SF Data Engineering",
        handle: "Snowflake"
    },
    {
        icon: "/SF_DATA_Lake_badge.png",
        label: "SF DATA Lake",
        handle: "Snowflake"
    },
];

export default function Example() {
    return (
        <div className=" flex flex-col items-center py-10 bg-zinc-900 text-white">
            <Navigation />
            <h1 className="text-4xl font-bold mb-8 mt-16 text-center text-white-400">Certifications</h1>
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
                    {certificates.map((s, index) => (
                        <Card>
                            <div key={index} className="flex flex-col items-center justify-center p-6 space-y-4 text-center">
                                <Image  
                                src={s.icon} 
                                alt={`${s.label} Certification`} 
                                width={200} height={100} 
                                className="rounded-lg shadow-md" 
                                />
                                <span className="lg:text-xl font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">
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
    );
}
