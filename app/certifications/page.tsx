"use client";
// import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const certificates = [
    {
        icon: "/snowpro.png",
        label: "SNOWPRO",
        handle: "Snowflake"
    },
    {
        icon: "/OCI24AICFA.jpg",
        label: "ORACLE CLOUD INFRASTRUCTURE AI CERTIFIED FOUNDATION ASSOCIATE",
        handle: "Oracle"
    },
    {
        icon: "/google-project-management-professional-certificate.2.png",
        label: "GOOGLE PROJECT MANAGEMENT PROFESSIONAL CERTIFICATE",
        handle: "Google and Coursera"
    },
    {
        icon: "/ibm-data-engineering-professional-certificate-v3.png",
        label: "IBM DATA ENGINEERING PROFESSIONAL CERTIFICATE V3",
        handle: "IBM and Coursera"
    },
    {
        icon: "/Gen AI (1).png",
        label: "GEN AI",
        handle: "Cognizant"
    },
    {
        icon: "/ibm-openpages-with-watson-ai-essentials.png",
        label: "IBM OPENPAGES WITH WATSON AI ESSENTIALS",
        handle: "IBM"
    },
    {
        icon: "/MDM_SaaS_Badge_200x200.png",
        label: "MDM SAAS",
        handle: "Informatica"
    },
    {
        icon: "/Project.png",
        label: "PROJECT MANAGEMENT",
        handle: "Cognizant"
    },
    {
        icon: "/CMCW Badge.png",
        label: "CMCW",
        handle: "Snowflake"
    },
    {
        icon: "/DA-snowflake-badge.png",
        label: "Data Applications SNOWFLAKE",
        handle: "Snowflake"
    },
    {
        icon: "/data-engineering-essentials.png",
        label: "DATA ENGINEERING ESSENTIALS",
        handle: "IBM (Coursera)"
    },
    {
        icon: "/DWM Badge.png",
        label: "Data Warehouse Management",
        handle: "Snowflake"
    },
    {
        icon: "/engineer-data-for-predictive-modeling-with-bigquery.png",
        label: "ENGINEER DATA FOR PREDICTIVE MODELING WITH BIGQUERY",
        handle: "GCP"
    },
    {
        icon: "/gcp_skill_10.png",
        label: "GCP SKILL 10",
        handle: "GCP"
    },
    {
        icon: "/gcp_skill_2.png",
        label: "GCP SKILL 2",
        handle: "GCP"
    },
    {
        icon: "/sf Data eng Badge.png",
        label: "SF DATA ENGINEERING",
        handle: "Snowflake"
    },
    {
        icon: "/SF_DATA_Lake_badge.png",
        label: "SF DATA LAKE",
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
                                    {s.label}
                                </span>
                                <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                    {s.handle}
                                 </span>
                             </div>
                        </Card>
                    ))}
                    <Card>
                            <Link
                                href="https://www.credly.com/users/yaswanthreddy-varikuti_ai"
                                target="_blank"
                                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                            >
                                <span
                                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true" />
                                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                    <Image
                                        src="/credly page.png"
                                        alt="Credly Profile"
                                        width={600} height={600}
                                        // className="rounded-lg shadow-md" 
                                    />
                                </span>{" "}
                                <div className="z-10 flex flex-col items-center">
                                    <span className="lg:text-xl font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">
                                        Credly Profile
                                    </span>
                                    <span className="mt-4 text-sm text-center duration-500 text-zinc-400 group-hover:text-zinc-200">
                                        Credly Profile for more certifications
                                    </span>
                                </div>
                            </Link>
                    </Card>
                </div>
            </div>
        </div>
    );
}
