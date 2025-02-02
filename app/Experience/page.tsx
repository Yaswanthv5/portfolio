"use client";

import React, { useState, useEffect } from "react";
import { FaBuilding } from "react-icons/fa";

type Experience = {
    company: string;
    Role: string;
    startDate: Date;
    endDate?: Date;
    duration?: string;
};

const experiences: Experience[] = [
    {
        company: "Cognizant Technologies",
        Role: "Data And AI Engineer",
        startDate: new Date("2023-06-22"), // June 2023
    },
    {
        company: "Cognizant Technologies",
        Role: "GCP Data Engineer Intern",
        startDate: new Date("2022-12-01"),
        endDate: new Date("2023-06-21"),
    }
];

const calculateExperience = (startDate: Date, endDate: Date = new Date()): string => {
    const diffInMonths =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        endDate.getMonth() -
        startDate.getMonth();
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;
    return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
};

const calculateYearsDifference = (startDate: Date, endDate: Date): string => {
    const years = endDate.getFullYear() - startDate.getFullYear();
    return `${years} year${years !== 1 ? "s" : ""}`;
};

export default function ExperienceTimeline() {
    const [updatedExperiences, setUpdatedExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        const updatedExp = experiences.map((exp) => ({
            ...exp,
            duration: exp.endDate
                ? calculateYearsDifference(exp.startDate, exp.endDate)
                : calculateExperience(exp.startDate)
        }));
        setUpdatedExperiences(updatedExp);
    }, []);

    return (
        <div className="flex flex-col items-center py-10 bg-zinc-900 text-white">
            <h1 className="text-3xl font-bold mb-8">Experience Timeline</h1>
            <div className="relative border-l-2 border-zinc-500 pl-6">
                {updatedExperiences.map((exp, index) => (
                    <div key={index} className="mb-4">
                        <FaBuilding className="inline-block mr-2" />
                        <span>{exp.company}:{exp.Role}</span>
                        <span className="ml-2">({exp.duration})</span>
                    </div>
                ))}
            </div>
        </div>
    );
}