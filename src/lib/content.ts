export const company = {
  name: "Glotelco",
  phoneDisplay: "(617) 932-6080",
  phoneTel: "+16179326080",
  email: "wd@glotelco.com",
  years: 15,
  customers: 3500,
} as const;

export const navLinks = [
  { href: "#cloud-phone-systems", label: "Cloud phone systems" },
  { href: "#services", label: "Services" },
  { href: "#equipment", label: "Equipment" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
] as const;

export const cloudFeatures = [
  {
    title: "Fully cloud-based",
    body: "We install your business phone system in the cloud — no server closet, no aging hardware on site, and room to grow when your business does.",
  },
  {
    title: "One number for the whole operation",
    body: "Desk extensions, call transfers, and a professional front door so every call is answered the way your business should answer it.",
  },
  {
    title: "Auto attendant",
    body: "Menus, first-come, first-served call queues, transfers, and business-hours routing set up around how you work — so every call reaches the right person.",
  },
  {
    title: "Business-hours routing",
    body: "Different call handling for open hours, after hours, holidays, and snow days — changed in minutes, not with a service call.",
  },
  {
    title: "Reporting and visibility",
    body: "See who called, which calls were missed, and how each department is answering. Clear information to improve how you serve customers.",
  },
  {
    title: "Multiple locations, one system",
    body: "Connect offices across Massachusetts, New England, or beyond on the same system — shared extensions, call transfers, and real-time presence.",
  },
] as const;

export const services = [
  {
    title: "Phone system installation",
    body: "We design and install your company's phone system: configuration, cabling when it's needed, and a go-live that's ready for work on day one.",
  },
  {
    title: "Auto attendant",
    body: "We record and set up a professional greeting and menu that sends callers to the right department or person.",
  },
  {
    title: "Voicemail to email",
    body: "Messages land on the extension, and a copy goes straight to the inbox of whoever needs to handle it.",
  },
  {
    title: "Call monitoring",
    body: "Listen in on staff calls when you need to keep an eye on service quality — built right into the system.",
  },
  {
    title: "Call reporting",
    body: "Detailed reports by user and department so you can see productivity and make better decisions.",
  },
  {
    title: "Call center solutions",
    body: "First-come, first-served queues, keypad or voice routing, and tools for teams that handle a high volume of calls — without relying on old equipment.",
  },
] as const;

export const phoneModels = [
  { src: "/phones/phone-1.png", name: "Panasonic KX-UTG300B" },
  { src: "/phones/phone-2.png", name: "Polycom VVX 500" },
  { src: "/phones/phone-3.png", name: "Polycom VVX 400" },
  { src: "/phones/phone-4.png", name: "Polycom SoundPoint IP 335" },
  { src: "/phones/phone-5.png", name: "Panasonic KX-HDV130" },
  { src: "/phones/phone-6.png", name: "Panasonic KX-HDV230" },
] as const;

type Client = { name: string; logo: string | null; href: string | null };

export const clients: readonly Client[] = [
  { name: "Gore Place", logo: "/clients/gore-place.png", href: "https://goreplace.org/" },
  { name: "Lennon Insurance", logo: "/clients/lennon-insurance.png", href: "https://lennoninsurance.com/" },
  { name: "Everett & Sons", logo: "/clients/everett-and-sons.png", href: "https://www.everettandsons.com/" },
  { name: "Wellan School", logo: "/clients/wellan.png", href: "https://www.wellan.org/" },
  { name: "The Learning Project", logo: "/clients/learning-project.png", href: "https://www.learningproject.org/" },
  { name: "Queen Screw Manufacturing Inc.", logo: "/clients/queen-screw.png", href: "https://queenscrew.com/" },
  { name: "WTI Group (Chicago)", logo: null, href: null },
  { name: "CTI Technology", logo: "/clients/cti-technology.png", href: "https://www.ctinc.com/" },
  { name: "Pediatric Health Care of Newton Wellesley", logo: "/clients/pedinw.png", href: "https://www.pedinw.org/" },
  { name: "R.E. Lyons & Sons", logo: null, href: null },
  { name: "Hub Tech Pros", logo: "/clients/hub-tech-pros.png", href: "http://hubtechpros.com/" },
  { name: "The Common Dog", logo: "/clients/common-dog.png", href: "https://www.commondog.com/" },
  { name: "Visiting Angels", logo: "/clients/visiting-angels.svg", href: "https://www.visitingangels.com/" },
  { name: "St. Pierre-Phaneuf Funeral Chapels", logo: null, href: "https://www.stpierrephaneuf.com/" },
];
