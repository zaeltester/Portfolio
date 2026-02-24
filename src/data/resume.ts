import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Database, 
  Cloud, 
  Server, 
  Terminal, 
  Cpu, 
  Globe,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin
} from 'lucide-react';

export const personalInfo = {
  name: "Orlando Trujillo",
  title: "Senior IT Professional & Data Engineer",
  location: "Canada",
  email: "orlando.trujillo123@gmail.com",
  phone: "7785229314",
  linkedin: "https://www.linkedin.com/in/orlandotrujilloflorez",
  github: "https://github.com/orlandojtx",
  summary: "Senior IT professional with 14+ years of experience providing IT support, cloud solutions, software development, data engineering, and database administration (DBA). Skilled in managing and deploying enterprise systems, leading SQL/BI initiatives, and supporting large on-premise and cloud environments. Strong hands-on experience with Oracle, Microsoft SQL Server, MySQL, and Azure database administration. Proven expertise in Azure and AWS migrations, infrastructure management, and security best practices."
};

export const experience = [
  {
    title: "Senior IT Support/Deployment Specialist",
    company: "SafeFleet",
    location: "Remote, Canada",
    period: "Jun 2023 – Present",
    description: [
      "Deploy and maintain Systems and Routing software for customers with Safe Fleet’s Waste/Recycling and Public Transport solutions.",
      "Provide customer support & tech issue resolution via phone, email and other electronic channels.",
      "Configure and control software requirements, upgrade systems, and design scripts depending on client requirements.",
      "Collaborate to integrate Azure Cloud solutions and Azure Server, VMs, DBs management.",
      "Participate in cloud migration projects, including workload transfers, hybrid integrations, and application deployments in Azure and AWS.",
      "Enforce security best practices with SSO, MFA, identity management, patching, and compliance."
    ]
  },
  {
    title: "Data Engineer",
    company: "Lion’s Gate B. M. LTD",
    location: "Lower Mainland, Canada",
    period: "May 2022 – Jun 2023",
    description: [
      "Built and maintained ETL pipelines using Python, SQL, and Spark.",
      "Orchestrated workflows with Airflow / Azure Data Factory, including retries and monitoring.",
      "Ingested data from APIs, databases, and cloud storage into ADLS / S3.",
      "Transformed and aggregated data for analytics and reporting.",
      "Stored datasets using Parquet / Delta Lake for performance and scalability.",
      "Containerized ETL jobs using Docker for consistent deployment.",
      "Supported cloud analytics platforms (Databricks, Synapse, AWS Glue)."
    ]
  },
  {
    title: "Data Engineer",
    company: "Teleperformance Colombia S.A.S",
    location: "Remote, Colombia",
    period: "Oct 2021 – Feb 2023",
    description: [
      "Managed databases through SSMS and used SSIS for ETL Development and Reprocessing.",
      "Designed, implemented, and maintained data architecture for AWS data services.",
      "Designed and implemented ETL processes to load data into the data warehouse.",
      "Wrote SQL queries to support data analysis and reporting.",
      "Generated reports and dashboards using PowerBI to visualize data.",
      "Built and deployed automated testing frameworks using Selenium and WebdriverIO."
    ]
  },
  {
    title: "Lead SQL Developer & BI Developer",
    company: "Ingeniería Agua y Pozos S.A.S",
    location: "Neiva, Colombia",
    period: "Jun 2015 – Oct 2021",
    description: [
      "Collaborated with stakeholders to identify business requirements and develop technical solutions.",
      "Led a team of developers to design, develop, test, and maintain software applications and BI solutions.",
      "Developed and maintained data warehouses, data marts, datasets, and other BI infrastructure components using SQL Server, SSIS, and SSAS.",
      "Created and maintained reports and dashboards using Tableau, Power BI, or QlikView.",
      "Designed and implemented cloud-based solutions using AWS, Azure, or GCP.",
      "Designed and developed RPA solutions using Python scripting and automation libraries."
    ]
  },
  {
    title: "Software Developer",
    company: "Danes Ingenieros SAS",
    location: "Neiva, Colombia",
    period: "Jun 2015 – Jul 2016",
    description: [
      "Collaborated with stakeholders to identify business requirements and develop technical solutions.",
      "Developed, tested, and maintained software applications including writing code, debugging, and fixing defects.",
      "Used programming languages and tools such as Java, Python, React, VueJS, Django, JS, SpringBoot, PostgreSQL and SQL server."
    ]
  }
];

export const education = [
  {
    degree: "Post Baccalaureate Technical Management and Services",
    school: "Kwantlen Polytechnic University",
    location: "Surrey, Canada",
    year: "May 2022 – Sep 2023"
  },
  {
    degree: "Bachelor’s degree in Electronic Engineering (Cum Laude)",
    school: "Universidad Antonio Nariño",
    location: "Neiva, Colombia",
    year: "Jan 2012 - Dec 2016"
  },
  {
    degree: "Bootcamp Web application development & programming skills",
    school: "Universidad Nacional de Colombia",
    location: "Bogotá, Colombia",
    year: "May 2021 - Dec 2021"
  },
  {
    degree: "Big Data Technical Diploma",
    school: "Fundación Carlos Slim",
    location: "México City, México",
    year: "May 2020 - Nov 2020"
  },
  {
    degree: "Computer Science Technician",
    school: "Atanasio Girardot",
    location: "Neiva, Colombia",
    year: "Jan 2010 – Dec 2011"
  }
];

export const skills = {
  "Cloud & DevOps": ["AWS S3", "AWS Lambda", "AWS DynamoDB", "Azure Cloud Solutions", "Docker", "Linux", "Windows Server", "VMware"],
  "Data & Database": ["Oracle", "SQL Server", "MySQL", "SQLite", "PostgreSQL", "MongoDB", "ETL", "SSMS", "SSIS", "Spark", "Data Analysis"],
  "Development": ["Python", "Django", "Java", "SpringBoot", "Maven", "React", "VueJS", "Full Stack Dev", "Git", "GitHub"],
  "Tools & BI": ["Power BI", "Tableau", "Jira", "Scrum", "Dell Spotlight", "Postman", "Selenium", "WebdriverIO"],
  "Other": ["Leadership", "Customer Service", "Technical Support", "ITIL", "RPA", "ESRI ArcGIS", "ESRI ArcSDE", "English/Spanish"]
};

export const certifications = [
  {
    name: "Big Data with Spark and Hadoop",
    issuer: "Coursera & IBM",
    date: "Jun 2023"
  },
  {
    name: "Google IT Support Certificate",
    issuer: "Coursera & Google",
    date: "Nov 2021"
  }
];
