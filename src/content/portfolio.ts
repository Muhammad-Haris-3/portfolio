export const profile = {
  name: "Muhammad Haris",
  role: "Data Analyst",
  location: "Multan, Pakistan",
  intro:
    "I focus on turning data into clear insights and practical decisions. This portfolio brings together my education, certifications, projects, and contact details in a clean format that is easy to scan and easy to grow.",
  currentlyWorkingOn:
    "Completing the Advanced Data Analytics specialization and building more projects around analytics, Python, and data storytelling.",
};

export const highlights = [
  {
    label: "Education",
    value: "3",
    detail: "University, college, and school milestones.",
  },
  {
    label: "Coursera Tracks",
    value: "2",
    detail: "Google Data Analytics and Advanced Data Analytics.",
  },
  {
    label: "Projects",
    value: "5",
    detail: "Analytics case studies, product builds, and portfolio work.",
  },
];

export const education = [
  {
    school: "Bahauddin Zakariya University, Multan",
    period: "2022 - 2026",
    degree: "University education",
    summary:
      "Studying and building a foundation for data analysis, problem solving, and applied technology work.",
  },
  {
    school: "KIPS College, Multan",
    period: "2020 - 2022",
    degree: "FSc Pre-Engineering",
    summary:
      "Completed pre-engineering studies before moving into university and analytics-focused work.",
  },
  {
    school: "Zavia School System, Multan",
    period: "2018 - 2020",
    degree: "Matriculation",
    summary:
      "Completed matric and built the early academic base that led into higher studies.",
  },
];

export const skills = [
  {
    category: "Data Analytics",
    items: ["Python", "Pandas", "R", "SQL", "Statistics"],
  },
  {
    category: "Learning Focus",
    items: ["Data Cleaning", "Visualization", "Regression", "Machine Learning"],
  },
  {
    category: "Tools",
    items: ["Coursera", "Google Data Analytics", "Advanced Data Analytics"],
  },
];

export const emailAddress = "hariskhokhar975@gmail.com";

export const gmailComposeUrl = (to = emailAddress, subject = "", body = "") => {
  const params = new URLSearchParams({ view: "cm", fs: "1", to });

  if (subject) {
    params.set("su", subject);
  }

  if (body) {
    params.set("body", body);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const specializationCertificates = [
  {
    name: "Oracle Cloud Infrastructure AI Foundations",
    issuer: "Oracle",
    status: "Completed",
    href: "/oracle-cloud-infrastructure-ai-foundations.pdf",
    summary:
      "Oracle Cloud Infrastructure AI Foundations certification covering core OCI concepts and AI fundamentals.",
    courses: [
      {
        name: "Oracle Cloud Infrastructure AI Foundations",
        href: "/oracle-cloud-infrastructure-ai-foundations.pdf",
      },
    ],
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    status: "Completed",
    href: "https://coursera.org/share/a522ab96113cdb824d259861eba7f9f0",
    summary:
      "Specialization that combines the seven foundational Google Data Analytics courses plus job-search support with AI.",
    courses: [
      {
        name: "Foundations: Data, Data Everywhere",
        href: "https://coursera.org/share/236ab549cabcb578416ac35376fa9ab2",
      },
      {
        name: "Ask Questions to Make Data-Driven Decisions",
        href: "https://coursera.org/share/43ad1e0bc73a88b453f59485562bd785",
      },
      {
        name: "Prepare Data for Exploration",
        href: "https://coursera.org/share/7afecfe49f8b1dc82634e079ae51fa19",
      },
      {
        name: "Process Data from Dirty to Clean",
        href: "https://coursera.org/share/08dd33343c3ae957e976b1958d2785da",
      },
      {
        name: "Analyze Data to Answer Questions",
        href: "https://coursera.org/share/e689a3dc1794a0baecf8ac523c79d70c",
      },
      {
        name: "Share Data Through the Art of Visualization",
        href: "https://coursera.org/share/789f23153fa5778d23e7591be50d6652",
      },
      {
        name: "Data Analysis with R Programming",
        href: "https://coursera.org/share/91dc896e19e3e68b5062a061379ece88",
      },
      {
        name: "Google Data Analytics Capstone",
        href: "https://coursera.org/share/d2f8d50b3d914608075867dd76fa790c",
      },
      {
        name: "Accelerate Your Job Search with AI",
        href: "https://www.coursera.org/account/accomplishments/verify/5FG2759QZGZF",
      },
    ],
  },
  {
    name: "Advanced Data Analytics Specialization",
    issuer: "Coursera",
    status: "Completed",
    href: "https://www.coursera.org/account/accomplishments/professional-cert/LHOHL4QWZZ3B",
    summary:
      "Completed the advanced track with statistics, regression, and machine learning.",
    courses: [
      {
        name: "Foundations of Data Science",
        href: "https://coursera.org/share/b99ab893aa4f15e12131b5ed71157d8a",
      },
      {
        name: "Go Beyond the Numbers: Translate Data into Insights",
        href: "https://www.coursera.org/account/accomplishments/verify/7O31Q5W1AQX8",
      },
      {
        name: "The Power of Statistics",
        href: "https://coursera.org/share/b0e1a3e41e519e5b8ac0559ee6ee7ad1",
      },
      {
        name: "Regression Analysis: Simplify Complex Data Relationships",
        href: "https://www.coursera.org/account/accomplishments/verify/BIDD4S738RUI",
      },
      {
        name: "The Nuts and Bolts of Machine Learning",
        href: "https://www.coursera.org/account/accomplishments/verify/FJTWJ21YFEVA",
      },
      {
        name: "Google Advanced Data Analytics Capstone",
        href: "https://www.coursera.org/account/accomplishments/verify/BVP2DYJXTNKJ",
      },
      {
        name: "Accelerate Your Job Search with AI",
        href: "https://www.coursera.org/account/accomplishments/verify/5FG2759QZGZF",
      },
    ],
  },
  {
    name: "Job Simulation Certificate in Data Analytics",
    issuer: "Forage",
    status: "Completed",
    href: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a53c98f622c48f280718aa5_1783879276089_completion_certificate.pdf",
    summary:
      "A recent data analytics job simulation certificate that showcases practical, workplace-style analytics experience.",
    courses: [],
  },
  {
    name: "AI and Machine Learning Certificate",
    issuer: "Government of Punjab via eHunar",
    status: "Completed",
    href: "/machine-learning-ai-data-science.pdf",
    summary:
      "An AI and machine learning credential awarded through the Government of Punjab's eHunar platform.",
    courses: [
      {
        name: "Machine Learning, AI & Data Science",
        href: "/machine-learning-ai-data-science.pdf",
      },
    ],
  },
  {
    name: "Python Learning",
    issuer: "Coursera",
    status: "Completed",
    href: "https://coursera.org/share/a77b3baf309c16c724caf4c134d86ba0",
    summary:
      "Python courses that support my day-to-day analytics work and future projects.",
    courses: [
      {
        name: "Crash Course on Python",
        href: "https://coursera.org/share/a77b3baf309c16c724caf4c134d86ba0",
      },
      {
        name: "Get Started with Python",
        href: "https://coursera.org/share/6d7c2e0f913ec60e18a66aa2fd093f41",
      },
    ],
  },
];

export const projects = [
  {
    name: "Final Year Project",
    summary:
      "Job Data Analysis, a data-focused project that explores job market information and presents insights in a live web app.",
    href: "https://job-data-analysis.vercel.app/",
    tags: ["Data Analysis", "Dashboard", "Vercel"],
  },
  {
    name: "Side Project",
    summary:
      "Core Tracker, a side build that shows practical product thinking and iterative implementation.",
    href: "https://core-tracker-sigma.vercel.app/",
    tags: ["Productivity", "Web App", "Live"],
  },
  {
    name: "OrderLens",
    summary:
      "Marketplace operations analytics over ~100,000 real orders, tracing which operational failures cost the most revenue and pricing the fix.",
    href: "https://github.com/Muhammad-Haris-3/OrderLens",
    tags: ["dbt", "PostgreSQL", "Statistics", "Tableau"],
  },
  {
    name: "InsightForge",
    summary:
      "A no-code analytics platform: upload a CSV and get quality checks, statistical tests, a predictive model, and a downloadable PDF report.",
    href: "https://insight-forge-beta.vercel.app",
    tags: ["Next.js", "FastAPI", "scikit-learn", "Live"],
  },
  {
    name: "Portfolio Project",
    summary:
      "My public portfolio site that collects my background, certifications, and project links in one place.",
    href: "https://muhammad-haris-khokhar-portfolio.vercel.app/",
    tags: ["Portfolio", "Brand", "Responsive"],
  },
];

export const links = [
  { label: "GitHub", href: "https://github.com/Muhammad-Haris-3" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-haris-khokhar/",
  },
  { label: "X", href: "https://x.com/hariskhokhar975" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/muhammad_haris_khokhar/?hl=en",
  },
];

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const contactLinks = [
  { label: "Email", href: gmailComposeUrl() },
  { label: "GitHub", href: "https://github.com/Muhammad-Haris-3" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-haris-khokhar/",
  },
  { label: "X", href: "https://x.com/hariskhokhar975" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/muhammad_haris_khokhar/?hl=en",
  },
];

export const contactDetails = [
  { label: "Email", value: emailAddress },
  { label: "WhatsApp", value: "MuhammadHarisKhokhar" },
  { label: "Location", value: "Multan, Pakistan" },
];
