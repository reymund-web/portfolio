import { 
  Code2, 
  Server, 
  Database, 
  Cloud,
  Mail,
  Link
} from 'lucide-react'

export const personalInfo = {
  name: "Reymund Patrick Marin Monterola",
  title: "Computer Engineering Graduate",
  tagline: "Building automation and intelligent systems with AI, full-stack development, and innovative solutions",
  description: "I'm a passionate Computer Engineering graduate specializing in AI automation, full-stack web development, and self-driving systems. With expertise in Python, JavaScript, and cloud technologies, I create solutions that combine automation with practical engineering.",
  email: "reymundpmonterola05@gmail.com",
  location: "Bicol, Philippines",
  availability: "Open to opportunities",
  resumeUrl: "/resume.pdf",
  profileImage: "/src/assets/images/Avatar.jpg"
}

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/reymund-web", icon: Link },
  { name: "LinkedIn", url: "www.linkedin.com/in/reymund-patrick-monterola-015815375", icon: Link },
  { name: "Facebook", url: "https://www.facebook.com/reymund.patrick.monterola.2024/", icon: Link },
  { name: "Email", url: "mailto:reymundpmonterola05@gmail.com", icon: Mail },
]

export const aboutStats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "5" },
  { label: "Technologies", value: "10+" },
  { label: "Happy Clients", value: "10+" },
]

export const skills = {
  frontend: {
    title: "Frontend",
    icon: Code2,
    color: "primary",
    items: [
      { name: "React", level: 50 },
      { name: "Tailwind CSS", level: 50 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Javascript", level: 70 },
    ]
  },
  backend: {
    title: "Backend",
    icon: Server,
    color: "accent",
    items: [
      { name: "Python", level: 70 },
      { name: "Java", level: 80 },
      { name: "REST APIs", level: 60 },
    ]
  },
  database: {
    title: "Database",
    icon: Database,
    color: "emerald",
    items: [
      { name: "PostgreSQL", level: 55 },
      { name: "MySQL", level: 65 },
    ]
  },
  devops: {
    title: "DevOps & Tools",
    icon: Cloud,
    color: "orange",
    items: [
      { name: "Git", level: 50 },
      { name: "n8n", level: 90 },
      { name: "Visual Studio Code", level: 90 },
      { name: "Github Copilot", level: 90 },
    ]
  }
}

export const projects = [
  {
    id: 1,
    title: "CNN-Based Self-Driving Wheelchair",
    description: "An AI-powered wheelchair system using convolutional neural networks for autonomous navigation and obstacle detection.",
    longDescription: "A computer engineering capstone project implementing CNN-based vision systems to enable autonomous wheelchair navigation. The system uses real-time object detection to avoid obstacles and follow paths intelligently.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    tags: ["Python", "TensorFlow", "CNN", "OpenCV", "Robotics"],
    category: "AI/ML",
    github: "https://github.com/reymund/wheelchair-cnn",
    demo: "",
    featured: true,
    highlights: [
      "Real-time object detection",
      "Autonomous path planning",
      "Obstacle avoidance",
      "Neural network optimization"
    ]
  },
  {
    id: 2,
    title: "Human Resource Information System",
    description: "A comprehensive HRIS platform for employee management, payroll processing, and HR analytics.",
    longDescription: "Full-stack HR management system with modules for employee records, attendance tracking, payroll, and performance management. Built with modern web technologies for scalability and real-time data processing.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Express", "JWT"],
    category: "Full Stack",
    github: "https://github.com/reymund/hris-system",
    demo: "",
    featured: true,
    highlights: [
      "Employee management",
      "Payroll automation",
      "Attendance tracking",
      "HR analytics dashboard"
    ]
  },
  {
    id: 3,
    title: "IJJER Ordering System",
    description: "A web-based ordering and inventory management system for restaurant operations.",
    longDescription: "Full-stack ordering platform enabling customers to place orders online and restaurant staff to manage inventory, orders, and deliveries efficiently.",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=500&fit=crop",
    tags: ["React", "Java", "MySQL", "REST API", "Payment Integration"],
    category: "Full Stack",
    github: "https://github.com/reymund/ijjer-ordering",
    demo: "",
    featured: true,
    highlights: [
      "Online ordering",
      "Inventory management",
      "Order tracking",
      "Payment processing"
    ]
  },
  {
    id: 4,
    title: "Job Application Tracker",
    description: "An AI-powered application that automates job search and application tracking with intelligent notifications.",
    longDescription: "Automates the job application process by scraping job listings, filling applications, and tracking status. Integrates with email and messaging systems for real-time updates.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    tags: ["Python", "n8n", "AI Automation", "Web Scraping"],
    category: "AI Automation",
    github: "https://github.com/reymund/job-tracker",
    demo: "",
    featured: false,
    highlights: [
      "Job scraping automation",
      "Application auto-filling",
      "Status tracking",
      "AI-powered notifications"
    ]
  },
  {
    id: 5,
    title: "Email Updates Through Telegram",
    description: "An automation system that forwards important emails to Telegram with intelligent filtering and summarization.",
    longDescription: "Uses n8n and Python to monitor email accounts, filter important messages, and send summaries to Telegram. Supports multiple email providers and custom filtering rules.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop",
    tags: ["Python", "n8n", "Telegram API", "Email Integration"],
    category: "AI Automation",
    github: "https://github.com/reymund/email-telegram",
    demo: "",
    featured: false,
    highlights: [
      "Email monitoring",
      "Intelligent filtering",
      "Message summarization",
      "Telegram notifications"
    ]
  }
]

export const experience = [
  {
    id: 1,
    role: "Technical Support Specialist",
    company: "Armlink Computer Center Inc.",
    companyUrl: "https://armlink.example.com",
    location: "Bicol, Philippines",
    type: "Full-time",
    startDate: "2021-01",
    endDate: "Present",
    description: "Providing technical support and IT solutions for computer systems and networking. Assisting in system troubleshooting and maintenance.",
    achievements: [
      "Resolved 100+ technical support tickets",
      "Maintained system uptime and performance",
      "Conducted system installations and configurations",
      "Documented technical procedures and solutions"
    ],
    technologies: ["System Administration", "Networking", "Troubleshooting", "IT Support"]
  }
]

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Engineering",
    school: "Bicol University",
    location: "Bicol, Philippines",
    startDate: "2021",
    endDate: "2025",
    description: "Graduated with focus on automation systems and AI applications. Completed capstone project on CNN-based robotics.",
    achievements: [
        "Graduated with honors",
        "Dean's List for 6 semesters",
      "Capstone: CNN-Based Self-Driving Wheelchair",
      "Robotics and automation focus",
      "Scrum/Agile project management experience"
    ]
  }
]

export const certifications = [
  {
    name: "NCIII - Java Programming",
    issuer: "TESDA",
    date: "2025",
    url: "https://drive.google.com/file/d/1ZTuiD015aTNdWPT3v3cVIwNgvDpqoTdV/view?usp=sharing"
  },
  {
    name: "S02 - Basic Occupational Safety and Health (BOSH)",
    issuer: "Beacon OSH Training Co.",
    date: "2022",
    url: "https://drive.google.com/file/d/1GtvCGfuffJ3A3DlScOXVshbBFOYLYruX/view?usp=sharing"
  }
]

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]
