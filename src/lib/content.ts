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
  { href: "#equipment", label: "Phones" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
] as const;

export const cloudFeatures = [
  {
    title: "Nothing to maintain on site",
    body: "Your phone system runs in the cloud, so there's no server closet or aging hardware to worry about. Adding lines as you grow is easy.",
  },
  {
    title: "One number for your whole business",
    body: "Extensions, call transfers, and a polished greeting make every caller feel taken care of.",
  },
  {
    title: "Auto attendant",
    body: "Custom menus, call queues, and transfers that get every caller to the right person quickly.",
  },
  {
    title: "After hours and holiday routing",
    body: "Decide how calls are handled during business hours, after hours, on holidays, and on snow days. Changes take minutes, no service call needed.",
  },
  {
    title: "Call reporting",
    body: "See who called, which calls were missed, and how each department is keeping up, so you can spot problems early.",
  },
  {
    title: "Multiple locations, one system",
    body: "Tie offices across Massachusetts, New England, or anywhere else into one system with shared extensions and easy transfers.",
  },
] as const;

export const services = [
  {
    title: "Phone system installation",
    body: "We design and install your phone system from start to finish, including any wiring, so your team is ready to go on day one.",
  },
  {
    title: "Auto attendant",
    body: "We record a professional greeting and build a menu that sends callers to the right person or department.",
  },
  {
    title: "Voicemail to email",
    body: "Voicemails show up in your inbox as well as on your phone, so messages never slip through the cracks.",
  },
  {
    title: "Call monitoring",
    body: "Listen in on calls when you want to coach your staff or keep an eye on service quality.",
  },
  {
    title: "Call reporting",
    body: "Easy to read reports by employee and department that show exactly how calls are being handled.",
  },
  {
    title: "Call center setups",
    body: "Call queues, keypad and voice menus, and the tools busy teams need to keep up with heavy call volume, without relying on outdated equipment.",
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
  { name: "WTI Group", logo: "/clients/wti.png", href: null },
  { name: "CTI Technology", logo: "/clients/cti-technology.png", href: "https://www.ctinc.com/" },
  { name: "Pediatric Health Care of Newton Wellesley", logo: "/clients/pedinw.png", href: "https://www.pedinw.org/" },
  { name: "R.E. Lyons & Son", logo: "/clients/re-lyons.png", href: null },
  { name: "Hub Tech Pros", logo: "/clients/hub-tech-pros.png", href: "http://hubtechpros.com/" },
  { name: "The Common Dog", logo: "/clients/common-dog.png", href: "https://www.commondog.com/" },
  { name: "Visiting Angels", logo: "/clients/visiting-angels.svg", href: "https://www.visitingangels.com/" },
  { name: "St. Pierre-Phaneuf Funeral Chapels", logo: null, href: "https://www.stpierrephaneuf.com/" },
  { name: "Hilti", logo: "/clients/hilti.svg", href: "https://www.hilti.com/" },
  { name: "Jarvis Products", logo: "/clients/jarvis.svg", href: "https://jarvisproducts.com/" },
];
