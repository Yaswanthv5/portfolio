"use client";
// import { Github, Mail, Linkedin } from "lucide-react";
// import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const skills = [
	{
		label: "Programming Languages",
		handle: " Python, SQL, Java intermediate, C intermediate",
	},
	{
		label: "Big Data Technologies",
		handle: "Spark, PySpark, Hadoop, Hive",
	},
	{
		label: "Cloud Platforms ",
		handle: " Google Cloud Platform (GCP), AWS, Snowflake, Azure, Oracle Cloud infrastructure",
	},
    {
        label: "Data Engineering & ETL",
        handle: "Data Warehousing, ETL Pipelines, Control-M, Airflow, Data Migration",
    },
    {
        label: "Databases & Storage",
        handle: "MySQL, PostgreSQL, Big Query, Cloud Storage, NoSQL (MongoDB, Cassandra)",
    },
    {
        label: "Data Analysis & Visualization",
        handle: "Power BI, Tableau, Excel (PowerPivot, Macros)",
    },
    {
        label: "Machine Learning & AI",
        handle: "Neural Networks, Image Processing, Generative AI, Deep Learning, NLP, chatbots",
    },
    {
        label:"DevOps & Scripting",
        handle: "Git, GitHub, Shell Scripting, PowerShell, Docker, Jenkins",
    },
    {
        label: "API & Automation",
        handle: "REST API, Postman, CI/CD, Python Automation",
    },
];

export default function Example() {
	return (
		<div className=" flex flex-col items-center py-10 bg-zinc-900 text-white">
			<Navigation />
            <h1 className="text-4xl font-bold mb-8 mt-16 text-center text-white-400">Skills</h1>
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-6 sm:grid-cols-3 lg:gap-16">
					{skills.map((s, index) => (
						<Card>
								<div key= {index} className="z-10 flex flex-col items-center justify-center p-6 space-y-4 text-center">
									<span className="lg:text-l text-center font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">
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
