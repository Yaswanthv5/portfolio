"use client";

import React, { useState, useEffect } from "react";
import { FaBuilding } from "react-icons/fa";
import { Navigation } from "../components/nav";

type Experience = {
    company: string;
    role: string;
    startDate: Date;
    endDate?: Date;
    duration?: string;
    description: string;
    achievements: string[];
};

const experiences: Experience[] = [
    {
        company: "Cognizant Technologies",
        role: "Data And AI Engineer",
        startDate: new Date("2023-06-22"),
        description: "Developing AI-driven solutions for enterprise data pipelines.",
        achievements: [
            "Optimized data processing time by 30% using GCP BigQuery.",
            "Implemented machine learning models for predictive analytics.",
            "Increased the productivity of the project by 70% through automating various routine works.",
            "Created various tools using python and machine learning to reduce and automate the human efforts and increase the productivity alround upto 80%.",
            "Build complete automation tools for the project to reduce the human efforts and increase the productivity upto 90%.",
            "Supported the team in building a complete automated data pipeline using GCP services.",
            "Given trainings to the team on using automated tools and machine learning models.",
            "Suggest an idea to the top leads on bulding a complete automated tool using snowflake and Edge computing. which would increase the productivity of the project by 10 times.",
        ],
    },
    {
        company: "Cognizant Technologies",
        role: "GCP Data Engineer Intern",
        startDate: new Date("2022-12-01"),
        endDate: new Date("2023-06-21"),
        description: "Worked on GCP-based data warehousing and ETL solutions.",
        achievements: [
            "Built scalable ETL pipelines using Google Cloud Dataflow.",
            "Improved data ingestion performance by 40% with Apache Beam.",
            "Built an complete automated data pipeline using GCP services which increased the productivity of the project by 60%.",
            "built a hospital database using GCP services and implemented machine learning models to predict the disease and the treatment for the disease.",
        ],
    }
];

const calculateExperience = (startDate: Date, endDate: Date = new Date()): string => {
    const diffInMonths =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        endDate.getMonth() - startDate.getMonth();
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;
    return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
};

export default function ExperienceTimeline() {
    const [updatedExperiences, setUpdatedExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        const updatedExp = experiences.map((exp) => ({
            ...exp,
            duration: calculateExperience(exp.startDate, exp.endDate)
        }));
        setUpdatedExperiences(updatedExp);
    }, []);

    return (
        <div className="flex flex-col items-center py-10 bg-zinc-900 text-white px-4 overflow-x-hidden">
            <Navigation />
            <h1 className="text-3xl md:text-4xl font-bold mb-8 mt-16 text-center">Experience</h1>
            <div className="relative w-full max-w-4xl">
            <div className="md:hidden absolute left-4 top-0 w-1 bg-yellow-400 h-full"></div>
                {/* Vertical Line - Mobile: left aligned, Desktop: centered */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-1 bg-yellow-400 h-full"></div>

                {updatedExperiences.map((exp, index) => (
                    <div 
                        key={index} 
                        className="flex w-full mb-8 justify-start md:justify-start md:pr-20"
                    >
                        <div className="bg-zinc-800 p-4 md:p-6 rounded-lg shadow-lg w-full md:w-5/12 relative ml-8 md:ml-0">
                            {/* Timeline Dot - Mobile: left aligned, Desktop: based on index */}
                            <div className={`
                                absolute top-6 -left-7 md:left-full md:-ml-2 
                                w-4 h-4 bg-yellow-400 rounded-full border-4 border-zinc-900
                                ${index % 2 !== 0 ? "md:hidden" : ""}
                            `}></div>
                            
                            <div className="flex items-center gap-2 mb-2">
                                <FaBuilding className="text-yellow-400 text-xl md:text-2xl" />
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold">{exp.company}</h2>
                                    <h3 className="text-base md:text-lg text-gray-300">{exp.role}</h3>
                                    <p className="text-xs md:text-sm text-gray-400">{exp.duration}</p>
                                </div>
                            </div>
                            
                            <p className="mt-2 text-xs md:text-sm">{exp.description}</p>
                            <ul className="mt-2 text-xs md:text-sm list-disc list-inside text-gray-300 space-y-1">
                                {exp.achievements.map((achieve, i) => (
                                    <li key={i} className="break-words py-1">{achieve}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
