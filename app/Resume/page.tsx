"use client";

import React from "react";
import { FaDownload } from "react-icons/fa";

export default function ResumeDownload() {
    const handleDownload = () => {
        const resumePath = "/resume.pdf"; // Update this with the actual resume file path
        const link = document.createElement("a");
        link.href = resumePath;
        link.download = "Yaswanth_Reddy_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex justify-center mt-8">
            <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
                <FaDownload />
                Resume
            </button>
        </div>
    );
}
