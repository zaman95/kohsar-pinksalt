export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const COMPANY = {
  name: "Kohsar Saltworks",
  legalName: "Kohsar Saltworks (Pvt) Ltd.",
  founded: 2004,
  tagline: "Manufacturer · Exporter · OEM Partner",
  email: "export@kohsarsaltworks.com",
  phone: "+92 300 000 0000",
  whatsapp: "920000000000",
  factoryAddress: "Khewra Industrial Zone, Jhelum, Punjab, Pakistan",
  hours: "Mon–Sat, 9:00–18:00 PKT",
} as const;

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Private Label", href: "/oem" },
  { label: "Export", href: "/export" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_COMPANY: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Manufacturing Facility", href: "/facility" },
  { label: "Why Pakistan", href: "/why-pakistan" },
  { label: "Certifications", href: "/certifications" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_RESOURCES: NavItem[] = [
  { label: "OEM / Private Label", href: "/oem" },
  { label: "Wholesale Process", href: "/process" },
  { label: "Export & Shipping", href: "/export" },
  { label: "Quality Control", href: "/quality" },
  { label: "Catalog Download", href: "/catalog" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export const REGIONS = ["USA", "Germany", "UK", "UAE", "Australia", "Canada", "Japan", "France"];

export const STATS = [
  { value: "20+", label: "Years exporting" },
  { value: "80+", label: "Countries served" },
  { value: "6,000T", label: "Annual capacity" },
  { value: "24h", label: "Quote turnaround" },
];

export const PROCESS_STEPS = [
  { num: "01", title: "Extraction", text: "Raw rock salt hand-mined near the Khewra range and graded at source." },
  { num: "02", title: "Handcrafting", text: "Carved, cut and finished by skilled artisans in our workshops." },
  { num: "03", title: "Quality control", text: "Lab tested for purity, moisture and colour; dimension-checked." },
  { num: "04", title: "Export packing", text: "Protective packaging, palletising and container loading for shipment." },
];

export const OEM_POINTS = ["Custom logo & engraving", "Retail-ready gift boxes", "Branded cartons & inserts", "Compliance labelling"];

export const INCOTERMS = ["FOB", "CIF", "CFR", "DDP", "EXW"];

export const SHIP_CARDS = [
  { k: "SEA FREIGHT", v: "FCL / LCL", d: "20ft & 40ft from Karachi Port" },
  { k: "AIR FREIGHT", v: "Express", d: "For samples & urgent orders" },
  { k: "LEAD TIME", v: "18–28d", d: "After sample & PI approval" },
  { k: "DOCS", v: "Full set", d: "CI, PL, CoO, phyto, HS codes" },
];

export const WHOLESALE_STEPS = [
  { n: "01", t: "Inquiry & consultation", d: "Share your product, quantity and target market — we respond with guidance and a formal quote within one business day.", dur: "Day 1" },
  { n: "02", t: "Sample approval", d: "Evaluate quality on a paid or freight-collect sample before committing to production.", dur: "3–7 days" },
  { n: "03", t: "Proforma invoice & deposit", d: "We issue a PI locking spec, packaging, Incoterm and lead time; production begins on deposit.", dur: "1–2 days" },
  { n: "04", t: "Production", d: "Manufacturing and hand-finishing to your confirmed specification.", dur: "12–20 days" },
  { n: "05", t: "Quality control", d: "Pre-shipment inspection report shared for your approval before the container is sealed.", dur: "1–2 days" },
  { n: "06", t: "Export packing & loading", d: "Palletising, container loading and full documentation prepared.", dur: "2–3 days" },
  { n: "07", t: "Shipping & delivery", d: "Sea or air freight to your port, tracked through to arrival.", dur: "Varies by route" },
];

export const CONTAINER_GUIDE = [
  { k: "20ft container", v: "22–24 MT", d: "Bulk edible/bath salt, lick blocks, tiles" },
  { k: "40ft standard", v: "26–28 MT", d: "Mixed SKU loads, cartoned goods" },
  { k: "40ft high cube", v: "~30% more volume", d: "Best for lighter décor & lamp cartons" },
  { k: "LCL (part load)", v: "From 1 pallet", d: "For trial orders & sample runs" },
];

export const WHY_PAKISTAN = [
  { t: "Source proximity", d: "Direct access to the Khewra Salt Range — the world's second-largest salt deposit — cuts raw material cost and lets us control grading at the source." },
  { t: "Skilled artisan labour", d: "Generations of hand-carving expertise passed through workshop families, at a fraction of comparable labour cost elsewhere." },
  { t: "Preferential trade access", d: "Pakistan's GSP+ status gives many buyers reduced or zero import duty into the EU and other partner markets." },
  { t: "Port access", d: "Karachi Port connects our facility to major sea lanes with regular FCL and LCL sailings worldwide." },
  { t: "Competitive cost base", d: "Lower production and labour costs translate to sharper landed pricing without compromising the certifications global buyers require." },
  { t: "Established export infrastructure", d: "20+ years of export documentation experience means fewer customs delays and cleaner paperwork on arrival." },
];

export const FACILITY_STATS = [
  { value: "40,000 sq ft", label: "Facility footprint" },
  { value: "180+", label: "Skilled artisans" },
  { value: "6,000T", label: "Annual capacity" },
  { value: "4", label: "Production lines" },
];

export const FACILITY_AREAS = [
  { title: "Mining & Sorting", ph: "Mining & raw block sorting" },
  { title: "Handcrafting", ph: "Hand-carving workshop" },
  { title: "Edible Processing", ph: "Edible salt processing line" },
  { title: "Quality Lab", ph: "Quality control lab" },
  { title: "Export Packing", ph: "Export packing hall" },
  { title: "Warehouse", ph: "Finished-goods warehouse" },
];

export const OEM_PACKAGING = [
  { title: "Brown / Bulk Carton", desc: "Neutral packaging for unbranded bulk orders.", ph: "Brown export carton" },
  { title: "Retail Gift Box", desc: "Shelf-ready presentation box with insert.", ph: "Retail gift box" },
  { title: "Custom Branded", desc: "Your logo, colours and compliance labelling.", ph: "Custom branded packaging" },
];

export const QC_STAGES = [
  { title: "Raw material grading", text: "Colour, density and purity sorted at intake before any processing begins." },
  { title: "In-process checks", text: "Dimension and finish verified after carving, cutting and polishing." },
  { title: "Lab testing", text: "Moisture, mineral content and mesh size tested per batch for edible lines." },
  { title: "Pre-shipment inspection", text: "Third-party or in-house SGS-aligned inspection report shared before loading." },
];

export const QC_TABLE = [
  { param: "Purity (NaCl)", standard: "96–98%", method: "Lab titration" },
  { param: "Moisture", standard: "< 0.5%", method: "Moisture analyzer" },
  { param: "Mesh size (edible)", standard: "Fine / coarse / granular", method: "Sieve analysis" },
  { param: "Heavy metals", standard: "Within FDA / EU limits", method: "ICP-MS" },
];

export const SUSTAINABILITY = [
  { title: "Ethical labour practices", text: "We work only with licensed extraction partners audited twice yearly on wages and safety." },
  { title: "Waste reduction", text: "Carving offcuts are reprocessed into fine edible and bath salt rather than discarded." },
  { title: "Sustainable packaging", text: "Phasing in FSC-certified cartons and recyclable inner packaging across all product lines." },
  { title: "Community investment", text: "A share of export profit funds schooling and healthcare access in workshop communities." },
];

export const LEADERSHIP = [
  { name: "Imran Sethi", role: "Managing Director" },
  { name: "Ayesha Khan", role: "Head of Export" },
  { name: "Bilal Ahmed", role: "Production Manager" },
];

export const QUOTE_TRUST = [
  { t: "Manufacturer-direct pricing", d: "No middlemen — you buy from the factory floor." },
  { t: "Samples before you commit", d: "Evaluate quality with paid or freight-collect samples." },
  { t: "Full export documentation", d: "CI, packing list, CoO, phytosanitary, HS codes." },
  { t: "Private label capability", d: "Your brand, packaging and compliance handled." },
];
