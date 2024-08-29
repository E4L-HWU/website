import { BrainCircuit } from "lucide-react";
import { Network } from "lucide-react";
import { FolderKanban } from "lucide-react";
import { Mic } from "lucide-react";

export const navItems = [
  { label: "About", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Upcoming Events", href: "#" },
  { label: "Register", href: "#" },
];

export const features = [
  {
    icon: <BrainCircuit />,
    text: "Competitions",
    description:
      "Participate in exciting engineering and technology competitions to showcase your skills and creativity.",
  },
  {
    icon: <Network />,
    text: "Workshops",
    description:
      "Join hands-on workshops to deepen your understanding of engineering concepts and tools.",
  },
  {
    icon: <Mic />,
    text: "Seminars",
    description:
      "Attend seminars led by industry experts to gain insights into the latest technologies in engineering.",
  },
];

export const about = [
  {
    subpoints: [
      {
        title: "Competitions",
        description: "Participate in exciting engineering and technology competitions to showcase your skills and creativity.",
      },
      {
        title: "Workshops",
        description: "Join hands-on workshops to deepen your understanding of engineering concepts and tools.",
      },
      {
        title: "Projects",
        description: "Engage in real-world projects that challenge your problem-solving abilities and enhance your portfolio.",
      },
      {
        title: "Seminars",
        description: "Attend seminars led by industry experts to gain insights into the latest trends and technologies in engineering.",
      },
    ],
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
