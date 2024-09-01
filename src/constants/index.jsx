import { BrainCircuit, Globe, Podcast } from "lucide-react";
import { Network } from "lucide-react";
import { Mic } from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Upcoming Events", href: "#events" },
  { label: "Register", href: "/signup" },
];

export const features = [
  {
    icon: <BrainCircuit />,
    text: "Competitions",
    description:
      "Participate in exciting engineering and technology competitions to showcase your skills.",
  },
  {
    icon: <Podcast />,
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
  {
    icon: <Network />,
    text: "Networking Opportunities",
    description:
      "Connect with like-minded individuals and industry professionals to expand your network.",
  }
];

export const registration = [
  {
    icon: <Globe />,
    text: "Council Website",
    description:
      "Complete your registration by purchasing a free membership from the student council website, Make sure to login with your student credentials.",
    url: "https://www.hwudcouncil.com/organisation/e4l/",
  },
  {
    icon: <Podcast />,
    text: "WhatsApp Group",
    description:
      "Join our whatsapp group to connect with other members in the E4L club as well as to get important announcements and updates about upcoming events.",
    url: "https://chat.whatsapp.com/IeXFtsxiww14E5tKivQcic",
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

export const gallerypoints = [
  {
    title: "Discover our previous events",
    description:
      "Explore our gallery to see the highlights of our previous events and workshops.",
  },
  {
    title: "Our Event Highlights",
    description:
      "Get a glimpse of our upcoming events and stay updated with our latest offerings.",
  },
  {
    title: "Upcoming Event Posters",
    description:
      "Discover the posters of our upcoming events and share them with your friends and colleagues.",
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
