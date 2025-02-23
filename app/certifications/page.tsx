"use client";
// import { Github, Mail, Linkedin } from "lucide-react";
// import Link from "next/link";
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
