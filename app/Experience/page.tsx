import React, { useState, useEffect } from "react";
import { FaBuilding } from "react-icons/fa";

const experiences = [
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

const calculateExperience = (startDate, endDate = new Date()) => {
    const diffInMonths =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        endDate.getMonth() -
        startDate.getMonth();
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;
    return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
};

const calculateYearsDifference = (startDate, endDate) => {
    const years = endDate.getFullYear() - startDate.getFullYear();
    return `${years} year${years !== 1 ? "s" : ""}`;
};

export default function ExperienceTimeline() {
    const [updatedExperiences, setUpdatedExperiences] = useState([]);

    useEffect(() => {
        const updatedExp = experiences.map((exp) => ({
            ...exp,
            duration: calculateExperience(exp.startDate)
        }));
        setUpdatedExperiences(updatedExp);
    }, []);

    return (
        <div className="flex flex-col items-center py-10 bg-zinc-900 text-white">
            <h1 className="text-3xl font-bold mb-8">Experience Timeline</h1>
            <div className="relative border-l-2 border-zinc-500 pl-6">
                {updatedExperiences.map((exp, index) => (
                    <div key={index} className="mb-8 relative">
                        <div className="absolute -left-4 w-8 h-8 bg-zinc-700 border-2 border-white rounded-full flex items-center justify-center">
                            <FaBuilding size={16} className="text-white" />
                        </div>
                        <div className="ml-6">
                            <h2 className="text-xl font-semibold">{exp.company, exp.Role}</h2>
                            <p className="text-zinc-400">{exp.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
