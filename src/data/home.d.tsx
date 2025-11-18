import { Briefcase, Rocket, ShoppingCart, Heart, Users, Monitor, Layers, LifeBuoy } from "lucide-react";

export const services = [
  {
    index: "01",
    name: "Web development",
    more: [
      "Web design and development",
      "E-commerce solutions",
      "Content Management Systems(CMS)",
      "Responsive and mobie-friendly designs",
      "Website maintenance and updates",
      "Web applications and software development",
      "Search engine optimization (SEO)",
    ],
  },
  {
    index: "02",
    name: "Graphics Design",
    more: [
      "Logo design and branding",
      "Brochure and print material design",
      "Business card and stationery design",
      "Infographics and data visualization",
      "Social media graphics and advertising",
      "Website graphics and UI/UX design",
      "Brand guidelines and style guides",
    ],
  },
  {
    index: "03",
    name: "additional Sevices",
    more: [
      "Digital marketing and advertising",
      "Search engine marketing (SEM)",
      "Social media management",
      "Email marketing and newsletters",
      "Website hosting and domain registration",
      "Website analytics and reporting",
    ],
  },
];


export const targetAudience = [
  {
    id: "01",
    name: "Small & Medium Businesses",
    description: "Companies looking to establish or expand their digital presence with professional websites, apps, and marketing solutions.",
    logo: <Briefcase size={36} />,
  },
  {
    id: "02",
    name: "Entrepreneurs & Startups",
    description: "Innovative founders seeking modern web and design solutions to launch and grow their businesses efficiently.",
    logo: <Rocket size={36} />,
  },
  {
    id: "03",
    name: "E-commerce & Online Retailers",
    description: "Online stores and retail platforms needing scalable, responsive, and secure e-commerce solutions.",
    logo: <ShoppingCart size={36} />,
  },
  {
    id: "04",
    name: "Service-based Companies",
    description: "Businesses in healthcare, finance, legal, and consulting that require professional websites and digital branding.",
    logo: <Monitor size={36} />,
  },
  {
    id: "05",
    name: "Non-profit Organizations",
    description: "Charities and NGOs seeking impactful digital solutions to communicate their mission and engage supporters.",
    logo: <Heart size={36} />,
  },
  {
    id: "06",
    name: "Marketing Agencies & Consultancies",
    description: "Firms looking to outsource design, development, and digital marketing services for their clients.",
    logo: <Layers size={36} />,
  },
  {
    id: "07",
    name: "Companies Enhancing Brand Identity",
    description: "Organizations aiming to refine their branding, design consistency, and online presence for maximum impact.",
    logo: <Users size={36} />,
  },
  {
    id: "08",
    name: "Businesses Requiring Maintenance & Support",
    description: "Companies that need ongoing website updates, technical support, and performance monitoring.",
    logo: <LifeBuoy size={36} />,
  },
];
