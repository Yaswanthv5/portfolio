"use client";

import React from "react";
import { FaDownload } from "react-icons/fa";
import { Navigation } from "../components/nav";

export default function ResumeDownload() {
    const handleDownload = () => {
        const resumePath = "/yaswanthreddyvarikuti.pdf"; // Update this with the actual resume file path
        const link = document.createElement("a");
        link.href = resumePath;
        link.download = "yaswanthreddyvarikuti.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <Navigation />
            {/* PDF Viewer */}
            <div className="w-full max-w-4xl mt-12">
                <iframe
                    src="/yaswanthreddyvarikuti.pdf"
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                    title="Resume"
                />
            </div>
            {/* Download Button */}
            <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 mt-8 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
                <FaDownload />
                Download Resume
            </button>
        </div>
    );
}