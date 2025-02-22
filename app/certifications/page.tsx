"use client";
// import { Github, Mail, Linkedin } from "lucide-react";
// import Link from "next/link";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const certificates = [
    {
        icon: "/CMCW Badge.png",
        label: "CMCW Badge",
        handle: "CMCW Badge"
    },
    {
        icon: "/DA-snowflake-badge.png",
        label: "DA-snowflake-badge",
        handle: "DA-snowflake-badge"
    },
    {
        icon: "/DWM Badge.png",
        label: "DWM Badge",
        handle: "DWM Badge"
    },
    {
        icon: "/gcp_skill_10.png",
        label: "gcp_skill_10",
        handle: "gcp_skill_10"
    },
    {
        icon: "/gcp_skill_2.png",
        label: "gcp_skill_2",
        handle: "gcp_skill_2"
    },
    {
        icon: "/Gen AI (1).png",
        label: "Gen AI",
        handle: "Gen AI"
    },
    {
        icon: "/MDM_SaaS_Badge_200x200.png",
        label: "MDM_SaaS_Badge_200x200",
        handle: "MDM_SaaS_Badge_200x200"
    },
    {
        icon: "/Project.png",
        label: "Project Management",
        handle: "Project Management"
    },
    {
        icon: "/sf Data eng Badge.png",
        label: "sf Data eng Badge",
        handle: "sf Data eng Badge"
    },
    {
        icon: "/SF_DATA_Lake_badge.png",
        label: "SF_DATA_Lake_badge",
        handle: "SF_DATA_Lake_badge"
    },
    {
        icon: "/snowpro.png",
        label: "snowpro",
        handle: "snowpro"
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
