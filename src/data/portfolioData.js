export const personalInfo = {
  name: "Sastha K",
  title: "UI/UX Designer (Fresher)",
  targetRole: "UI/UX Designer (Fresher)",
  targetCompany: "Zoho",
  degree: "B.Tech in Information Technology",
  batch: "2024 – 2028",
  status: "Available for Fresher Roles & Internships",
  email: "ssastha588@gmail.com",
  location: "Dindigul, Tamil Nadu",
  photo: "/sastha.jpeg",
  logo: "/logo.png",
  resumePdf: "/resume.pdf",
  objective:
    "Creative and detail-oriented B.Tech Information Technology student (2024-2028) seeking a UI/UX Designer Fresher role. Passionate about designing user-friendly digital experiences and eager to contribute with modern design thinking, prototyping, and problem-solving skills.",
  languages: [
    { name: "English", proficiency: "Professional Working Proficiency" },
    { name: "Tamil", proficiency: "Native / Bilingual" }
  ],
  strengths: [
    { title: "Creativity", desc: "Crafting intuitive, aesthetically balanced digital user experiences." },
    { title: "Communication", desc: "Articulating design decisions and user journeys with clarity." },
    { title: "Teamwork", desc: "Collaborating effectively with developers and stakeholders." },
    { title: "Attention to Detail", desc: "Maintaining pixel-perfect spacing, hierarchy, and consistency." },
    { title: "Quick Learner", desc: "Rapidly adapting to evolving design systems and workflow tools." }
  ]
};

export const skillsData = [
  {
    category: "Design & UX Methodology",
    description: "Core UI/UX design methodologies, user research, and scalable design architectures",
    skills: [
      {
        name: "UI/UX",
        category: "Visual & User Experience",
        description: "Visual hierarchy, layout design, typography, spacing, intuitive navigation, and micro-interactions."
      },
      {
        name: "Figma",
        category: "Primary Design Tool",
        description: "Auto-layout, reusable component kits, interactive variables, design tokens, and developer handoff."
      },
      {
        name: "Wireframing",
        category: "Ideation & Structure",
        description: "Low and mid-fidelity wireframes translating complex requirements into clear layouts."
      },
      {
        name: "Prototyping",
        category: "Interaction Design",
        description: "Interactive clickable prototypes demonstrating animations, page transitions, and user flows."
      },
      {
        name: "Design Systems",
        category: "Scalability",
        description: "Standardized token systems, atomic components, accessible typography, and variant libraries."
      },
      {
        name: "Adobe XD",
        category: "UI/UX Prototyping",
        description: "Vector interface design, artboard systems, and transition prototyping."
      },
      {
        name: "Canva",
        category: "Visual Design",
        description: "Rapid visual asset composition, brand presentations, and social graphics."
      }
    ]
  },
  {
    category: "Development & Engineering",
    description: "Core programming languages, mobile engineering, and frontend frameworks",
    skills: [
      {
        name: "React",
        category: "Frontend Library",
        description: "Component-driven user interfaces, hooks, state management, and modern responsive web layouts."
      },
      {
        name: "Flutter",
        category: "Cross-Platform Mobile",
        description: "Mobile UI widget hierarchies, responsive mobile patterns, and fluid animations across Android/iOS."
      },
      {
        name: "Java",
        category: "Object-Oriented Programming",
        description: "Short Term Diploma in Java (A+ Grade). OOP architecture, collections, multithreading, and logic."
      },
      {
        name: "Python",
        category: "Programming & Scripting",
        description: "Advanced Diploma (A++ Grade). Algorithmic problem solving, data handling, and automation scripting."
      }
    ]
  },
  {
    category: "AI & Emerging Tech",
    description: "Modern generative AI tools, prompt workflows, and AI-assisted design systems",
    skills: [
      {
        name: "Google AI Studio",
        category: "AI Model Prototyping",
        description: "Multimodal Gemini prototyping, system instructions, temperature tuning, and rapid AI workflow creation."
      },
      {
        name: "Prompt Engineering",
        category: "Generative AI",
        description: "Structured prompt design, few-shot conditioning, chain-of-thought prompting, and contextual AI workflows."
      }
    ]
  }
];

export const projectsData = [
  {
    id: "best-life-ai",
    title: "Best Life AI",
    tagline: "Intelligent Wellness & Productivity Optimization Platform",
    category: "AI Product Design",
    tools: ["Figma", "Google AI Studio", "Prompt Engineering", "Design Systems"],
    resumeDescription:
      "An intelligent, human-centered wellness platform powered by multimodal generative AI. Features proactive habit tracking, latency-optimized recommendation streams, and conversational UX with Gemini 1.5 orchestration.",
    keyPoints: [
      "Real-time wellness telemetry with multimodal Gemini 1.5 Pro prompt pipelines",
      "Dynamic habit pulse visualization and low-latency metrics dashboard",
      "Conversational AI interface conditioned with few-shot and chain-of-thought prompts",
      "Cohesive dark/light design token hierarchy adhering to accessibility criteria"
    ],
    deliverables: ["Full Dashboard Architecture", "AI Interaction Guidelines", "Interactive Figma Prototype", "Design Tokens"],
    image: "/projects/bestlife-ai.svg"
  },
  {
    id: "urban-mobility-analytics",
    title: "Urban Mobility Analytics",
    tagline: "Live Fleet Telemetry & Transit Optimization Dashboard",
    category: "Data Visualization & Dashboard",
    tools: ["UI/UX", "Figma", "Data Visualization", "User Journeys"],
    resumeDescription:
      "A high-density municipal mobility telemetry platform engineered to monitor real-time transit congestion, public bus transit schedules, and fleet distribution across dense metropolitan grids.",
    keyPoints: [
      "Interactive geospatial telemetry showing live GPS fleet movement and density",
      "Predictive congestion analytics reducing average commuter transit delays",
      "Clutter-free typography hierarchy prioritizing rapid critical status comprehension",
      "High-contrast data visualization cards and responsive modular widget layouts"
    ],
    deliverables: ["Fleet Management UI", "Data Visualization System", "User Flow Diagrams", "Component Variants"],
    image: "/projects/urban-mobility.svg"
  },
  {
    id: "document-verification",
    title: "Document Verification",
    tagline: "Cryptographic Certificate & Credential Authentication UI",
    category: "Enterprise Security UX",
    tools: ["Figma", "UX Research", "Design Systems", "Prototyping"],
    resumeDescription:
      "An enterprise-grade document authenticity platform designed for instant cryptographic credential verification, OCR scanning inspection, and verifiable trust score auditing for universities and employers.",
    keyPoints: [
      "Instant tamper-detection scanner with OCR inspection guidelines and trust scores",
      "Clear visual indicators for cryptographic seals, issuing bodies, and timestamps",
      "Streamlined verification workflow cutting manual audit time by over 60%",
      "Accessible confirmation states and comprehensive cryptographic audit history"
    ],
    deliverables: ["Verification Flow UX", "Audit Dashboard UI", "Interactive Prototype", "Accessibility Specs"],
    image: "/projects/document-verification.svg"
  },
  {
    id: "flutter-applications",
    title: "Flutter Applications",
    tagline: "Cross-Platform Mobile FinTech & Productivity Suite",
    category: "Mobile Application UI",
    tools: ["Flutter", "Figma", "Mobile UI", "Micro-Interactions"],
    resumeDescription:
      "A cross-platform mobile suite featuring frictionless mobile wallet interactions, biometric confirmation states, and modular responsive widget architectures running natively across Android and iOS.",
    keyPoints: [
      "Custom responsive Flutter widget tree optimized for diverse mobile viewports",
      "Fluid micro-interactions for balance transfers, expense categorization, and QR scans",
      "Pixel-perfect translation from Figma auto-layout designs to native Flutter code",
      "State-driven card flip interactions and smooth 60fps gesture animations"
    ],
    deliverables: ["Native Mobile UI", "Flutter Widget Library", "Gesture Interaction Flow", "App Store Mockups"],
    image: "/projects/flutter-apps.svg"
  }
];

export const educationData = [
  {
    degree: "B.Tech in Information Technology",
    period: "2024 – 2028",
    status: "Currently Pursuing (Undergraduate Student)",
    field: "Information Technology",
    focus: "Human-Computer Interaction, Interface Design, Web Technologies & Software Fundamentals",
    location: "Tamil Nadu, India"
  }
];

export const experienceData = {
  status: "Fresher",
  headline: "Aspiring UI/UX Designer (Fresher)",
  summary:
    "As a B.Tech Information Technology student (2024–2028), I am building a strong foundation in modern UI/UX design. I have designed end-to-end user interfaces for mobile and web applications including food delivery, e-commerce, and digital banking.",
  readinessPoints: [
    "No fabricated industry claims — completely honest, motivated fresher seeking my first industry opportunity",
    "Targeting UI/UX Designer (Fresher) roles and internships at forward-thinking companies, specifically Zoho",
    "Proficient in Figma, Adobe XD, Canva, wireframing, prototyping, design systems, and developer collaboration",
    "Strong communication, continuous curiosity, and passion for pixel-perfect product design"
  ]
};

/* All 17 Authenticated Certificates (Cisco Networking Academy + certificatesastha.pdf) */
export const certificatesList = [
  {
    id: "cisco-modern-ai",
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    date: "16 Sep 2026",
    category: "AI",
    certId: "be5a35e1-24ef-4549-9e08-c26389c389ea",
    previewImage: "/certificates/cisco_modern_ai.png",
    fullDocument: "/certificates/cisco_modern_ai.pdf",
    isPdf: true,
    details: "Foundational mastery of modern artificial intelligence principles, neural networks, machine learning paradigms, and ethical AI applications through Cisco Networking Academy."
  },
  {
    id: "cisco-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "07 Aug 2026",
    category: "Cybersecurity",
    certId: "df4732ad-069b-4e9a-b8c3-58704e8c8708",
    previewImage: "/certificates/cisco_cybersecurity.png",
    fullDocument: "/certificates/cisco_cybersecurity.png",
    isPdf: false,
    details: "Core cybersecurity competencies including threat mitigation, network defense, data privacy principles, and organizational security protocols through Cisco Networking Academy."
  },
  {
    id: "cert-1",
    title: "Hands on Training on CDIO - Project Based Learning",
    issuer: "NPR College of Engineering & Technology (R&D Cell) & L&T Technology Services Ltd.",
    date: "25-03-2025",
    category: "Training",
    previewImage: "/certificates/cert_1.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=1",
    isPdf: true,
    page: 1,
    details: "Certificate of Participation for completing hands-on training on Conceive Design Implement Operate (CDIO)-Project Based Learning."
  },
  {
    id: "cert-2",
    title: "First Responder Training (First Aid, CPR & AED)",
    issuer: "Tamil Nadu Apex Skill Development Centre for Healthcare (Govt. of Tamil Nadu)",
    date: "21-Dec-2024",
    category: "Training",
    previewImage: "/certificates/cert_2.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=2",
    isPdf: true,
    page: 2,
    details: "Certificate of Achievement for successfully completing the Basic Course as per TN ASDCH Training Pack. Reg No: 2024DG2055."
  },
  {
    id: "cert-3",
    title: "Short Term Diploma in JAVA (A+ Grade)",
    issuer: "Cadd Cae Computers, Dindigul",
    date: "01-06-2024 to 31-07-2024",
    category: "Development",
    previewImage: "/certificates/cert_3.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=3",
    isPdf: true,
    page: 3,
    details: "Awarded A+ Grade. Covered Class & Objects, Constructor, Inheritance, Interfaces, Thread, Multi-threading Packages, I/O Stream, AWT, JDBC."
  },
  {
    id: "cert-4",
    title: "Advanced Diploma in Computer Programming (ADCP - A++ Grade)",
    issuer: "Cadd Cae Computers, Dindigul",
    date: "01-02-2024 to 31-05-2024",
    category: "Development",
    previewImage: "/certificates/cert_4.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=4",
    isPdf: true,
    page: 4,
    details: "Awarded A++ Grade. Covered C & Graphics, C++, and Python over a 4-month curriculum."
  },
  {
    id: "cert-5",
    title: "National Students Paryavaran Competition (NSPC 2025)",
    issuer: "Ministry of Education & Ministry of Environment (Govt. of India)",
    date: "2025",
    category: "Participation",
    previewImage: "/certificates/cert_5.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=5",
    isPdf: true,
    page: 5,
    details: "National level e-certificate presented for successful participation in NSPC-2025 representing NPR Group of Institutions."
  },
  {
    id: "cert-6",
    title: "AI Agents using n8n",
    issuer: "LetsUpgrade (with NSDC, ITM Edutech, GDG MAD)",
    date: "18 to 20 September 2025",
    category: "AI",
    previewImage: "/certificates/cert_6.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=6",
    isPdf: true,
    page: 6,
    details: "Successfully completed intensive 3-day course on building automated AI Agents using n8n. Cert No: LUEAIASEPT12519."
  },
  {
    id: "cert-7",
    title: "SQL Bootcamp",
    issuer: "LetsUpgrade (with NSDC, ITM Edutech, GDG MAD)",
    date: "18 to 20 September 2025",
    category: "Development",
    previewImage: "/certificates/cert_7.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=7",
    isPdf: true,
    page: 7,
    details: "Successfully completed 3-day SQL Bootcamp covering queries, relations, and database operations. Cert No: LUESQLSEPT125328."
  },
  {
    id: "cert-8",
    title: "Rathinam Grand Fest (RGF) - Techno-Cultural Fest",
    issuer: "Rathinam Group of Institutions, Coimbatore",
    date: "03 to 07 March 2026",
    category: "Participation",
    previewImage: "/certificates/cert_8.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=8",
    isPdf: true,
    page: 8,
    details: "Certificate of Participation demonstrating exceptional participation in India's Mega Techno-Cultural Fest."
  },
  {
    id: "cert-9",
    title: "Value Added Course: Git and GitHub (23ITA01)",
    issuer: "NPR College of Engineering and Technology & Gateway Software Solutions",
    date: "20-08-2025 to 25-08-2025",
    category: "Training",
    previewImage: "/certificates/cert_9.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=9",
    isPdf: true,
    page: 9,
    details: "Successfully completed 30 hours of intensive Value Added Course training on Git, GitHub workflows, and repository collaboration."
  },
  {
    id: "cert-10",
    title: "AI for Beginners",
    issuer: "HP LIFE | HP Foundation",
    date: "4/9/2026",
    category: "AI",
    previewImage: "/certificates/cert_10.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=10",
    isPdf: true,
    page: 10,
    details: "Completed online course covering foundational AI concepts, real-world industry applications, and ethical implications. Serial: ef3a8266-30b0-435a-8382-99093ca61494."
  },
  {
    id: "cert-11",
    title: "Industrial Visit (IV) - Robotics & Automation",
    issuer: "i HUB Robotics | IHUB School of Learning, Kochi",
    date: "30/08/2025",
    category: "Other",
    previewImage: "/certificates/cert_11.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=11",
    isPdf: true,
    page: 11,
    details: "Certificate of Appreciation for engaging with industry leaders, practical insights, and robotic systems in Kochi."
  },
  {
    id: "cert-12",
    title: "KiTEODYSSEY 3.0: Techie Cultural Student Festival",
    issuer: "KGiSL Institute of Technology, Coimbatore",
    date: "10th April 2026",
    category: "Participation",
    previewImage: "/certificates/cert_12.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=12",
    isPdf: true,
    page: 12,
    details: "Certificate of Appreciation celebrating innovation, creativity, and technical excellence across domain competitions."
  },
  {
    id: "cert-13",
    title: "Data Analytics and Data Science",
    issuer: "Anapty CodeEmy Technologies (National Internship Portal / MSME)",
    date: "07/02/2026",
    category: "Training",
    previewImage: "/certificates/cert_13.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=13",
    isPdf: true,
    page: 13,
    details: "Certificate of Completion in Data Analytics and Data Science for career readiness. Cert ID: ACTCAC2025/14850."
  },
  {
    id: "cert-14",
    title: "1 Month Internship Programme on Flutter",
    issuer: "WizInoa, Madurai",
    date: "01-06-2026 to 30-06-2026",
    category: "Internship",
    previewImage: "/certificates/cert_14.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=14",
    isPdf: true,
    page: 14,
    details: "Certificate of Internship for successfully completing 1 Month Mobile App Development internship on Flutter with clean architecture."
  },
  {
    id: "cert-15",
    title: "TECH SANGAMAM 2026 - 24 Hours HACKATHON",
    issuer: "SIMATS Engineering under IEEE Student Chapter",
    date: "28–29 Aug 2026",
    category: "Participation",
    previewImage: "/certificates/cert_15.png",
    fullDocument: "/certificates/certificatesastha.pdf#page=15",
    isPdf: true,
    page: 15,
    details: "Certificate of Participation for active participation in the 24-Hours Hackathon organized under the IEEE Student Chapter, Chennai."
  }
];
