// Personal Information - UPDATE THESE VALUES
export const personalInfo = {
  name: "[ADD_YOUR_NAME]",
  title: "Smart Home & Building Automation Specialist",
  subtitle: "KNX / LOXONE SYSTEM INTEGRATOR",
  description: "I design, configure and integrate intelligent automation systems for modern residential and building environments — from lighting and climate control to security, multimedia and centralized visualization.",
  email: "[ADD_YOUR_EMAIL]",
  phone: "[ADD_YOUR_PHONE]",
  location: "[ADD_YOUR_LOCATION]",
  linkedin: "[ADD_LINKEDIN_URL]",
  github: "[ADD_GITHUB_URL]",
  availableForWork: true,
  relocationReady: true,
  targetMarkets: ["Germany", "EU"],
};

// Professional Summary
export const professionalSummary = {
  headline: "ENGINEERING INTELLIGENCE INTO EVERY SPACE.",
  description: `I specialize in designing, configuring, integrating, commissioning, and maintaining intelligent automation systems. My expertise spans KNX and Loxone ecosystems, working with low-voltage 24V control systems to create seamless smart building experiences.

From system architecture to on-site commissioning, I connect lighting, climate, shading, security, and multimedia into one intelligent ecosystem. I don't simply install smart devices — I design intelligent systems that make buildings respond.`,
  stats: [
    { label: "KNX", value: "Advanced" },
    { label: "LOXONE", value: "Advanced" },
    { label: "24V Control", value: "Expert" },
    { label: "Smart Building", value: "Specialist" },
    { label: "IoT", value: "Proficient" },
    { label: "System Integration", value: "Expert" },
  ],
};

// What I Do - Services
export const services = [
  {
    id: "01",
    title: "SMART HOME AUTOMATION",
    description: "Complete home automation solutions integrating all building systems into a unified control experience.",
    technologies: ["KNX", "Loxone", "IoT"],
    icon: "home",
  },
  {
    id: "02",
    title: "BUILDING AUTOMATION",
    description: "Commercial and residential building automation with centralized management and monitoring.",
    technologies: ["KNX", "BACnet", "Modbus"],
    icon: "building",
  },
  {
    id: "03",
    title: "KNX SYSTEM INTEGRATION",
    description: "Professional KNX system design, configuration, and commissioning using ETS.",
    technologies: ["KNX", "ETS", "TP/PL"],
    icon: "network",
  },
  {
    id: "04",
    title: "LOXONE SYSTEM INTEGRATION",
    description: "Loxone Miniserver programming, logic design, and visualization setup.",
    technologies: ["Loxone", "Loxone Config", "Miniserver"],
    icon: "cpu",
  },
  {
    id: "05",
    title: "LIGHTING AUTOMATION",
    description: "Intelligent lighting control including dimming, scenes, circadian rhythms, and presence detection.",
    technologies: ["DALI", "KNX", "DMX"],
    icon: "lightbulb",
  },
  {
    id: "06",
    title: "HVAC & CLIMATE CONTROL",
    description: "Smart temperature control, heating, cooling, and ventilation automation.",
    technologies: ["HVAC", "Modbus", "KNX"],
    icon: "thermometer",
  },
  {
    id: "07",
    title: "SECURITY & ACCESS",
    description: "Integrated security systems with access control, alarms, and surveillance.",
    technologies: ["Access Control", "Alarms", "Video"],
    icon: "shield",
  },
  {
    id: "08",
    title: "MULTIROOM AUDIO",
    description: "Multi-zone audio distribution with centralized control and scene integration.",
    technologies: ["Loxone Audio", "Streaming", "Zone Control"],
    icon: "music",
  },
  {
    id: "09",
    title: "VISUALIZATION & UX",
    description: "Custom visualization interfaces for mobile, tablet, and wall panels.",
    technologies: ["Loxone Visual", "Mobile Apps", "Web"],
    icon: "monitor",
  },
  {
    id: "10",
    title: "THIRD-PARTY INTEGRATIONS",
    description: "API-based integrations connecting diverse systems and devices.",
    technologies: ["REST APIs", "MQTT", "WebSocket"],
    icon: "link",
  },
];

// Technologies
export const technologies = [
  {
    name: "KNX",
    category: "Automation Protocol",
    description: "Decentralized building automation protocol used for reliable control of lighting, blinds, HVAC, sensors and other building systems.",
    applications: ["Lighting Control", "Shading", "HVAC", "Security", "Energy Management"],
    proficiency: "ADVANCED",
  },
  {
    name: "LOXONE",
    category: "Automation Platform",
    description: "Centralized automation ecosystem used for intelligent control, visualization, logic, audio and building management.",
    applications: ["Logic Programming", "Visualization", "Audio", "Energy Management", "Access Control"],
    proficiency: "ADVANCED",
  },
  {
    name: "ETS",
    category: "Configuration Software",
    description: "Engineering and configuration environment for KNX system design and commissioning.",
    applications: ["Device Configuration", "Group Addressing", "Topology Design", "Diagnostics"],
    proficiency: "ADVANCED",
  },
  {
    name: "LOXONE CONFIG",
    category: "Programming Software",
    description: "Visual programming environment for Loxone Miniserver automation logic and configuration.",
    applications: ["Logic Design", "Block Programming", "Visualization", "Debugging"],
    proficiency: "ADVANCED",
  },
  {
    name: "AUTOCAD",
    category: "CAD Software",
    description: "Technical drawing software for creating electrical plans, system layouts, and documentation.",
    applications: ["Electrical Plans", "System Layouts", "Documentation", "As-Built Drawings"],
    proficiency: "PROFICIENT",
  },
  {
    name: "TYPESCRIPT",
    category: "Programming Language",
    description: "Type-safe JavaScript for developing custom integrations, APIs, and visualization tools.",
    applications: ["API Development", "Custom Integrations", "Automation Scripts", "Tools"],
    proficiency: "PROFICIENT",
  },
  {
    name: "APIs",
    category: "Integration",
    description: "REST, GraphQL, and WebSocket APIs for connecting third-party systems and devices.",
    applications: ["Third-party Devices", "Cloud Services", "Data Exchange", "Custom Solutions"],
    proficiency: "PROFICIENT",
  },
  {
    name: "IoT",
    category: "Technology Domain",
    description: "Internet of Things protocols and platforms for connected device integration.",
    applications: ["MQTT", "HTTP/HTTPS", "Device Management", "Sensor Networks"],
    proficiency: "WORKING KNOWLEDGE",
  },
];

// Skills Matrix
export const skills = {
  automation: {
    title: "AUTOMATION",
    items: [
      { name: "KNX", level: "ADVANCED" },
      { name: "Loxone", level: "ADVANCED" },
      { name: "Logic Design", level: "ADVANCED" },
      { name: "Scenes", level: "ADVANCED" },
      { name: "Automation Rules", level: "ADVANCED" },
      { name: "Presence Control", level: "ADVANCED" },
    ],
  },
  electrical: {
    title: "ELECTRICAL / CONTROL",
    items: [
      { name: "24V Systems", level: "ADVANCED" },
      { name: "Power Calculations", level: "PROFICIENT" },
      { name: "Sensors", level: "ADVANCED" },
      { name: "Actuators", level: "ADVANCED" },
      { name: "Control Wiring", level: "ADVANCED" },
      { name: "Panel Organization", level: "PROFICIENT" },
    ],
  },
  software: {
    title: "SOFTWARE",
    items: [
      { name: "ETS", level: "ADVANCED" },
      { name: "Loxone Config", level: "ADVANCED" },
      { name: "AutoCAD", level: "PROFICIENT" },
      { name: "TypeScript", level: "PROFICIENT" },
      { name: "APIs", level: "PROFICIENT" },
    ],
  },
  smartHome: {
    title: "SMART HOME",
    items: [
      { name: "Lighting", level: "ADVANCED" },
      { name: "HVAC", level: "ADVANCED" },
      { name: "Shading", level: "ADVANCED" },
      { name: "Security", level: "PROFICIENT" },
      { name: "Access", level: "PROFICIENT" },
      { name: "Audio", level: "PROFICIENT" },
      { name: "Visualization", level: "ADVANCED" },
    ],
  },
  integration: {
    title: "SYSTEM INTEGRATION",
    items: [
      { name: "Third-party Devices", level: "ADVANCED" },
      { name: "API Integration", level: "PROFICIENT" },
      { name: "Network Devices", level: "ADVANCED" },
      { name: "IoT", level: "WORKING KNOWLEDGE" },
    ],
  },
};

// Smart Home Solutions
export const solutions = [
  {
    id: "01",
    title: "INTELLIGENT LIGHTING",
    description: "Complete lighting automation with scene control, circadian rhythms, and energy optimization.",
    features: [
      "ON/OFF Control",
      "Dimming (0-10V, DALI, KNX)",
      "Scene Programming",
      "Presence-based Lighting",
      "Circadian Lighting",
      "Automatic Brightness",
      "Centralized Control",
      "Mobile Control",
    ],
    icon: "lightbulb",
  },
  {
    id: "02",
    title: "CLIMATE CONTROL",
    description: "Smart temperature and climate management for comfort and efficiency.",
    features: [
      "Heating Control",
      "Cooling Control",
      "HVAC Integration",
      "Room Temperature Control",
      "Presence-based Climate",
      "Scheduling",
      "Energy Optimization",
      "Smart Thermostatic Control",
    ],
    icon: "thermometer",
  },
  {
    id: "03",
    title: "SMART SHADING",
    description: "Automated window treatments for comfort, privacy, and thermal optimization.",
    features: [
      "Roller Shutters",
      "Blinds Control",
      "Curtain Automation",
      "Automatic Shading",
      "Sun Position Tracking",
      "Weather-based Control",
      "Thermal Optimization",
    ],
    icon: "sun",
  },
  {
    id: "04",
    title: "SECURITY",
    description: "Integrated security systems for comprehensive building protection.",
    features: [
      "Door Sensors",
      "Window Sensors",
      "Motion Detection",
      "Presence Detection",
      "Alarm Integration",
      "Access Control",
      "Video Intercom",
    ],
    icon: "shield",
  },
  {
    id: "05",
    title: "ACCESS CONTROL",
    description: "Modern access solutions with multiple authentication methods.",
    features: [
      "Smart Locks",
      "NFC Access",
      "RFID Systems",
      "Keypads",
      "Mobile Access",
      "Automated Doors",
      "User Permissions",
    ],
    icon: "key",
  },
  {
    id: "06",
    title: "MULTIROOM AUDIO",
    description: "Distributed audio systems with zone control and scene integration.",
    features: [
      "Loxone Audio Server",
      "Multiroom Distribution",
      "Zone Control",
      "Automated Music",
      "Scene-based Audio",
      "Centralized Control",
    ],
    icon: "music",
  },
  {
    id: "07",
    title: "ENERGY MANAGEMENT",
    description: "Smart energy monitoring and optimization for sustainable buildings.",
    features: [
      "Energy Monitoring",
      "Smart Loads",
      "Solar Integration",
      "EV Charging",
      "Consumption Visualization",
      "Automation Based on Energy",
    ],
    icon: "zap",
  },
  {
    id: "08",
    title: "VISUALIZATION",
    description: "Intuitive control interfaces across all platforms.",
    features: [
      "Mobile App",
      "Tablet Interface",
      "Wall Panels",
      "Dashboards",
      "Room Controls",
      "Centralized Visualization",
    ],
    icon: "monitor",
  },
];

// Projects - PLACEHOLDER DATA (UPDATE WITH REAL PROJECTS)
export const projects = [
  {
    id: "01",
    title: "PRIVATE RESIDENCE — SMART HOME AUTOMATION",
    type: "Residential",
    scope: "Complete smart home automation system",
    technologies: ["KNX", "ETS", "Loxone", "Lighting", "HVAC", "Shading", "Audio"],
    role: "System Integration, Configuration, Programming, Commissioning",
    challenges: "[ADD_CHALLENGE_DETAILS]",
    solution: "[ADD_SOLUTION_DETAILS]",
    result: "[ADD_RESULT_DETAILS]",
    year: "2024",
    status: "completed",
    images: [], // Add project images
    featured: true,
  },
  {
    id: "02",
    title: "LUXURY APARTMENT — LIGHTING & CLIMATE",
    type: "Residential",
    scope: "Lighting and climate automation",
    technologies: ["KNX", "DALI", "HVAC", "Visualization"],
    role: "System Design, Configuration, Installation Support",
    challenges: "[ADD_CHALLENGE_DETAILS]",
    solution: "[ADD_SOLUTION_DETAILS]",
    result: "[ADD_RESULT_DETAILS]",
    year: "2024",
    status: "completed",
    images: [],
    featured: true,
  },
  {
    id: "03",
    title: "SMART VILLA — KNX / LOXONE",
    type: "Residential",
    scope: "Hybrid KNX/Loxone system integration",
    technologies: ["KNX", "Loxone", "Security", "Access", "Multiroom Audio"],
    role: "Full System Integration and Commissioning",
    challenges: "[ADD_CHALLENGE_DETAILS]",
    solution: "[ADD_SOLUTION_DETAILS]",
    result: "[ADD_RESULT_DETAILS]",
    year: "2023",
    status: "completed",
    images: [],
    featured: true,
  },
  {
    id: "04",
    title: "MULTIROOM AUDIO & VISUALIZATION",
    type: "Residential",
    scope: "Audio distribution and control interface",
    technologies: ["Loxone Audio", "Visualization", "Mobile Control"],
    role: "Audio System Design and Programming",
    challenges: "[ADD_CHALLENGE_DETAILS]",
    solution: "[ADD_SOLUTION_DETAILS]",
    result: "[ADD_RESULT_DETAILS]",
    year: "2023",
    status: "completed",
    images: [],
    featured: false,
  },
];

// Experience - UPDATE WITH REAL DATA
export const experience = [
  {
    id: "01",
    position: "[ADD_POSITION_TITLE]",
    company: "[ADD_COMPANY_NAME]",
    location: "[ADD_LOCATION]",
    period: {
      start: "April 2025",
      end: "Present",
    },
    responsibilities: [
      "[ADD_RESPONSIBILITY_1]",
      "[ADD_RESPONSIBILITY_2]",
      "[ADD_RESPONSIBILITY_3]",
      "[ADD_RESPONSIBILITY_4]",
    ],
    technologies: ["KNX", "Loxone", "ETS", "AutoCAD"],
    achievements: [
      "[ADD_ACHIEVEMENT_1]",
      "[ADD_ACHIEVEMENT_2]",
    ],
    current: true,
  },
  {
    id: "02",
    position: "Intern — Smart Home Automation",
    company: "[ADD_COMPANY_NAME]",
    location: "[ADD_LOCATION]",
    period: {
      start: "December 2024",
      end: "April 2025",
    },
    responsibilities: [
      "[ADD_RESPONSIBILITY_1]",
      "[ADD_RESPONSIBILITY_2]",
      "[ADD_RESPONSIBILITY_3]",
    ],
    technologies: ["KNX", "Loxone", "ETS"],
    achievements: [
      "[ADD_ACHIEVEMENT_1]",
    ],
    current: false,
  },
  {
    id: "03",
    position: "Freelance — Digital & Technical Projects",
    company: "Self-employed",
    location: "[ADD_LOCATION]",
    period: {
      start: "2023",
      end: "2024",
    },
    responsibilities: [
      "[ADD_RESPONSIBILITY_1]",
      "[ADD_RESPONSIBILITY_2]",
    ],
    technologies: ["TypeScript", "APIs", "IoT"],
    achievements: [
      "[ADD_ACHIEVEMENT_1]",
    ],
    current: false,
  },
];

// Education
export const education = [
  {
    id: "01",
    institution: "OFPPT",
    degree: "Technicien Spécialisé en Développement Digital des Applications Mobiles",
    location: "[ADD_LOCATION]",
    period: {
      start: "2021",
      end: "2023",
    },
    description: "Specialized technician training in digital development and mobile applications. This technical background provides strong foundation in programming logic, API integration, and digital systems — skills directly applicable to modern smart home automation and IoT integration.",
  },
  {
    id: "02",
    institution: "[ADD_HIGH_SCHOOL_NAME]",
    degree: "Baccalaureate",
    location: "[ADD_LOCATION]",
    period: {
      start: "2021",
      end: "2021",
    },
    description: "Secondary education completion.",
  },
];

// Certifications - UPDATE WITH REAL CERTIFICATIONS
export const certifications = [
  {
    id: "01",
    name: "[ADD_CERTIFICATION_NAME]",
    issuer: "[ADD_ISSUING_ORGANIZATION]",
    date: "[ADD_DATE]",
    credentialId: "[ADD_CREDENTIAL_ID]",
    verificationUrl: "[ADD_VERIFICATION_URL]",
    category: "KNX",
    verified: false, // Set to true when officially certified
  },
  // Add more certifications as obtained
];

// Currently Learning / In Progress
export const learningInProgress = [
  {
    name: "KNX Certification",
    category: "Professional Development",
    status: "In Progress",
    expectedCompletion: "[ADD_DATE]",
  },
  {
    name: "German Language B2",
    category: "Language",
    status: "Currently Preparing",
    expectedCompletion: "[ADD_DATE]",
  },
];

// Languages
export const languages = [
  {
    language: "German",
    level: "B2",
    status: "Currently preparing for certification",
    certified: false,
  },
  {
    language: "English",
    level: "Intermediate",
    status: "Working proficiency",
    certified: false,
  },
  {
    language: "French",
    level: "Beginner",
    status: "Basic communication",
    certified: false,
  },
];

// Timeline Data
export const timeline = [
  {
    year: "2025",
    title: "Professional Experience",
    description: "Working as Smart Home & Building Automation Specialist",
    type: "career",
  },
  {
    year: "2024-2025",
    title: "Internship",
    description: "Smart Home Automation Internship",
    type: "career",
  },
  {
    year: "2023-2024",
    title: "Freelance Projects",
    description: "Digital & Technical Projects",
    type: "career",
  },
  {
    year: "2021-2023",
    title: "OFPPT",
    description: "Technicien Spécialisé en Développement Digital",
    type: "education",
  },
  {
    year: "2021",
    title: "Baccalaureate",
    description: "Secondary Education Completion",
    type: "education",
  },
];

// Contact Form Options
export const contactFormOptions = {
  projectTypes: [
    "Smart Home",
    "KNX",
    "Loxone",
    "Building Automation",
    "Consulting",
    "Integration",
    "Employment",
    "Other",
  ],
};

// Navigation Items
export const navigationItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "SOLUTIONS", href: "#solutions" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "CONTACT", href: "#contact" },
];
