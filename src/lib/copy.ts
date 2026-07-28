/**
 * ════════════════════════════════════════════════════════════════════════
 *  SITE COPY — every editable piece of website text lives in this file.
 * ════════════════════════════════════════════════════════════════════════
 *
 *  Edit the strings below and redeploy to change any wording on the site
 *  (headlines, section text, buttons, SEO titles/descriptions).
 *
 *  Where text lives:
 *   - THIS FILE ............... all page copy, navigation labels, SEO text
 *   - src/lib/constants.ts .... company contact details (name, email, phone)
 *   - src/lib/fallbackContent.ts  products / blog / FAQ / certifications /
 *                             testimonials shown until Sanity CMS is seeded
 *
 *  ⚠ HONESTY MARKERS: anything tagged `TODO(owner)` is a business claim
 *  (capacity, markets, headcount…) that MUST be replaced with your real
 *  figure — or deleted — before serious buyers do due diligence on you.
 *  Overseas buyers routinely verify claims; one caught exaggeration can
 *  kill a deal.
 */

// ── Global site metadata (browser tab, Google result, social shares) ──────
export const SITE = {
  metaTitle: "Kohsar Saltworks — Wholesale Himalayan Pink Salt Manufacturer & Exporter",
  metaTitleTemplate: "%s — Kohsar Saltworks",
  metaDescription:
    "Manufacturer and exporter of Himalayan pink salt lamps, tiles, edible salt, bath salt and private-label products. Bulk wholesale, OEM and container-ready export from Pakistan.",
  ogAlt: "Kohsar Saltworks — Wholesale Himalayan Pink Salt Manufacturer & Exporter",
};

// ── Navigation ─────────────────────────────────────────────────────────────
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

export const HEADER = {
  quoteButton: "Request Quote",
};

export const FOOTER = {
  blurb: "Himalayan pink salt manufacturer & exporter. Mine-to-container supply for wholesale buyers worldwide.",
  productsHeading: "Products",
  companyHeading: "Company",
  resourcesHeading: "Resources",
  viewAllProducts: "View all products",
  privacyLabel: "Privacy",
  termsLabel: "Terms",
  sitemapLabel: "Sitemap",
};

// TODO(owner): replace with your real profile URLs (a LinkedIn company page
// is the single most-checked B2B credibility signal). Remove any entry you
// don't maintain — a dead social link hurts more than no link.
export const SOCIALS: { label: "LinkedIn" | "Instagram" | "Facebook"; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/kohsar-saltworks" },
  { label: "Instagram", href: "https://www.instagram.com/kohsarsaltworks" },
  { label: "Facebook", href: "https://www.facebook.com/kohsarsaltworks" },
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

export const FLOATING = {
  whatsappLabel: "WhatsApp",
  quoteLabel: "Request Quote",
};

// ── Shared business data (shown on several pages) ─────────────────────────

// TODO(owner): list only countries you have actually shipped to.
export const REGIONS = ["USA", "UK", "China", "Turkiye", "Spain", "UAE", "Netherlands", "Germany", "Australia", "Japan"];

// TODO(owner): replace every value with your real figure.
export const STATS = [
  { value: "Khewra", label: "Source Region" },
  { value: "20+", label: "Export Markets" }, // TODO(owner): real market count
  { value: "6,000T", label: "Annual capacity" }, // TODO(owner): real annual capacity
  { value: "24h", label: "Quote turnaround" },
];

export const PROCESS_STEPS = [
  { num: "01", title: "Extraction", text: "Raw rock salt hand-mined near the Khewra range and graded at source." },
  { num: "02", title: "Handcrafting", text: "Carved, cut and finished by skilled artisans in our workshops." },
  { num: "03", title: "Quality control", text: "Lab tested for purity, moisture and colour; dimension-checked." },
  { num: "04", title: "Export packing", text: "Protective packaging, palletising and container loading for shipment." },
];

export const OEM_POINTS = ["Custom logo & engraving", "Retail-ready gift boxes", "Branded cartons & inserts", "Compliance labelling"];

export const INCOTERMS = ["FOB", "CIF", "CFR"];

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
  { t: "Competitive cost base", d: "Lower production and labour costs translate to sharper landed pricing without compromising the documentation global buyers require." },
  { t: "Established export infrastructure", d: "Pakistan's mature salt-export ecosystem — freight forwarders, inspection agencies and chambers of commerce — means cleaner paperwork and fewer customs delays on arrival." },
];

// TODO(owner): replace with your facility's real figures — buyers may ask to
// verify these on a video call or factory audit.
export const FACILITY_STATS = [
  { value: "10,000 sq ft", label: "Facility footprint" },
  { value: "30+", label: "Skilled artisans" },
  { value: "6,000T", label: "Annual capacity" },
  { value: "2", label: "Production lines" },
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
  { title: "Pre-shipment inspection", text: "Third-party or in-house pre-shipment inspection report shared before loading." },
];

// TODO(owner): confirm these specs against your actual lab reports before
// quoting them to buyers — they will be held against your shipments.
export const QC_TABLE = [
  { param: "Purity (NaCl)", standard: "96–98%", method: "Lab titration" },
  { param: "Moisture", standard: "< 0.5%", method: "Moisture analyzer" },
  { param: "Mesh size (edible)", standard: "Fine / coarse / granular", method: "Sieve analysis" },
  { param: "Heavy metals", standard: "Within FDA / EU limits", method: "ICP-MS" },
];

export const SUSTAINABILITY = [
  { title: "Ethical labour practices", text: "We work only with licensed extraction partners audited on wages and safety." },
  { title: "Waste reduction", text: "Carving offcuts are reprocessed into fine edible and bath salt rather than discarded." },
  { title: "Sustainable packaging", text: "Phasing in FSC-certified cartons and recyclable inner packaging across all product lines." },
  { title: "Community investment", text: "A share of export profit funds schooling and healthcare access in workshop communities." },
];

// TODO(owner): add your real team here (name + role). The section is hidden
// while this list is empty. Never publish invented people — buyers look
// leadership up on LinkedIn as a first legitimacy check.
// Example: { name: "Your Name", role: "Founder & Managing Director" },
export const LEADERSHIP: { name: string; role: string }[] = [];
// export const LEADERSHIP = [
//   { name: "Imran Sethi", role: "Managing Director" },
//   { name: "Ayesha Khan", role: "Head of Export" },
//   { name: "Bilal Ahmed", role: "Production Manager" },
// ];

export const QUOTE_TRUST = [
  { t: "Manufacturer-direct pricing", d: "No middlemen — you buy from the factory floor." },
  { t: "Samples before you commit", d: "Evaluate quality with paid or freight-collect samples." },
  { t: "Full export documentation", d: "CI, packing list, CoO, phytosanitary, HS codes." },
  { t: "Private label capability", d: "Your brand, packaging and compliance handled." },
];

// ── Page: Home (/) ─────────────────────────────────────────────────────────
export const HOME = {
  metaTitle: "Wholesale Himalayan Pink Salt Manufacturer & Exporter",
  metaDescription:
    "Direct from the Khewra range. Bulk supply for importers, distributors, and private-label brands worldwide. Lab-tested and container-ready export from Pakistan.",
  hero: {
    title: "Premium Himalayan Pink Salt, straight from the source in Pakistan.",
    lead: "Direct from the Khewra range. Bulk supply for importers, distributors, and private-label brands worldwide. Lab-tested and container-ready export from Pakistan.",
    ctaPrimary: "Request Wholesale Quote →",
    ctaSecondary: "Download Catalog",
  },
  // TODO(owner): match this to your real market count (also see STATS above).
  trustStrip: "Exporting to 20+ countries",
  why: {
    eyebrow: "Why Kohsar",
    title: "A vertically integrated salt house — mine to container.",
    body: "We operate extraction liaison, hand-carving workshops, edible-grade processing, and export packing under one roof near the Khewra range. That vertical control is why buyers trust us with private-label programs and repeat container orders.",
    cta: "Our story & facility →",
  },
  categories: {
    eyebrow: "Product Range",
    title: "Everything we make from pink salt",
    cta: "View all products →",
  },
  process: {
    eyebrow: "From Mine to Market",
    title: "A controlled four-stage process",
  },
  featured: {
    eyebrow: "Best Sellers",
    title: "Featured wholesale products",
    cta: "Browse catalog →",
  },
  oem: {
    eyebrow: "OEM & Private Label",
    title: "Your brand, our factory floor.",
    body: "From logo-engraved lamps to fully retail-ready cartons and gift boxes, we build private-label programs end to end — design, sampling, compliance labelling and export.",
    cta: "Start a private-label inquiry →",
    imageAlt: "Custom branded packaging",
  },
  certifications: {
    eyebrow: "Documented & Compliant",
    title: "Quality documented at every step",
  },
  export: {
    eyebrow: "Export & Logistics",
    title: "Container-ready, worldwide.",
    body: "Sea and air freight from Karachi Port with full export documentation — commercial invoice, packing list, phytosanitary and CoO. FOB, CIF and CFR terms supported.",
  },
  testimonials: {
    eyebrow: "Trusted by buyers worldwide",
  },
  finalCta: {
    title: "Ready to source Himalayan salt at scale?",
    lead: "Send us your requirement — we reply with pricing, samples and lead times within one business day.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "Browse products",
  },
  heroImageAlt: "Salt lamp glowing in a warm interior",
};

// ── Page: About (/about) ───────────────────────────────────────────────────
export const ABOUT = {
  metaTitle: "About Us",
  metaDescription:
    "Kohsar Saltworks' story, mission and vision — a Himalayan pink salt manufacturer and exporter based at the Khewra Salt Range, Pakistan.",
  heroTitle: "From the Khewra Salt Range to buyers worldwide",
  heroImageAlt: "Inside the Kohsar workshop",
  storyEyebrow: "Our Story",
  storyP1:
    "Kohsar Saltworks was founded in 2022 to close the gap between Himalayan salt mines and global buyers. Based in the Khewra Industrial Zone, we built an integrated operation — from raw extraction to finished export — so our partners get consistent quality, transparent pricing, and direct accountability.",
  storyP2:
    "We hand-finish every decorative piece and pair that craft with the documentation and lead-time discipline that global import teams require.",
  missionLabel: "Mission",
  mission:
    "Make premium Himalayan salt products accessible to import partners through reliable supply, honest documentation and fair pricing.",
  visionLabel: "Vision",
  vision:
    "To be the export partner global brands trust first when sourcing Himalayan salt — on quality, compliance and speed.",
  leadershipEyebrow: "Leadership",
  ctaFacility: "Tour our facility →",
  ctaWhyPakistan: "Why source from Pakistan →",
};

// ── Page: Products (/products) ─────────────────────────────────────────────
export const PRODUCTS = {
  metaTitle: "Product Catalog",
  metaDescription:
    "Wholesale Himalayan pink salt — salt lamps, tiles, kitchenware, edible salt, bath salt, therapy products and more. Every product available for private label and bulk container orders.",
  title: "Product Catalog",
  lead: "Wholesale Himalayan pink salt across every category we manufacture. Each product is available for private label and bulk container orders — pricing is quoted per requirement.",
  filterAll: "All",
  emptyCategory: "No products in this category yet — check back soon.",
  customCta: {
    title: "Can't find what you need?",
    lead: "We manufacture custom shapes, sizes and packaging to spec.",
    button: "Request a custom quote →",
  },
};

// ── Page: Product detail (/products/[slug]) ────────────────────────────────
export const PRODUCT_DETAIL = {
  // B2B: no public prices — the panel explains pricing is quoted per requirement.
  pricingTitle: "Wholesale pricing on request",
  pricingNote:
    "As a manufacturer we price each order individually — based on volume, sizes, packaging and Incoterm. Send your requirement and receive a formal offer within one business day.",
  requestQuote: "Request Quote",
  requestSample: "Request Sample",
  relatedTitle: "Related products",
  variantsTitle: "Designs & models",
  variantsNote: "Reference the model code in your inquiry. All designs are available in the sizes listed under Specifications.",
  variantCols: { model: "Model code", name: "Design / variant", note: "Notes" },
  quickFacts: {
    leadTime: "18–28 days",
    packaging: "Bulk / retail / custom",
    privateLabel: "Available",
    samples: "Paid / freight-collect",
  },
  specs: [
    { k: "Material", v: "100% natural Himalayan pink salt (Khewra range)" },
    { k: "Colour grade", v: "Light pink to deep amber, sortable to spec" },
    { k: "Moisture", v: "< 0.5% — kiln-dried and stabilised" },
    { k: "Customization", v: "Logo engraving, base finish, plug standard, dimmer" },
    { k: "Private label", v: "Available — artwork, barcode & retail box to your brand" },
  ],
  sizesLabel: "Available sizes",
  sizesFallback: "Contact us for sizing",
  pack: [
    { k: "Inner packaging", v: "Bubble wrap + individual white/brown box" },
    { k: "Master carton", v: "5-ply export carton, 6–12 pcs per carton" },
    { k: "Carton marking", v: "Neutral or your brand & shipping marks" },
    { k: "Palletisation", v: "Shrink-wrapped, corner-protected, ISPM-15 pallets" },
    { k: "Gift packaging", v: "Optional retail-ready gift box & sleeve" },
    { k: "Labelling", v: "Multilingual, compliant with destination market" },
  ],
  ship: [
    { k: "Order quantity", v: "Minimums confirmed with your quote — trial orders welcome" },
    { k: "Container load", v: "20ft ≈ 22–24 MT · 40ft ≈ 26–28 MT (product dependent)" },
    { k: "Lead time", v: "18–28 days after sample & PI approval" },
    { k: "Incoterms", v: "FOB Karachi, CIF, CFR" },
    { k: "Freight", v: "Sea (LCL/FCL) & air freight arranged" },
    { k: "Documents", v: "CI, packing list, CoO, phytosanitary, HS code included" },
  ],
};

// ── Product cards (lists & homepage) ───────────────────────────────────────
export const PRODUCT_CARD = {
  designsLabel: "designs",
  madeToSpec: "Made to spec",
  details: "Details →",
};

// ── Page: OEM / Private Label (/oem) ───────────────────────────────────────
export const OEM = {
  metaTitle: "OEM / Private Label",
  metaDescription:
    "Your brand, manufactured at source — private-label salt lamps, cartons and gift boxes with design, sampling and compliance labelling.",
  heroTitle: "Your brand, manufactured at source",
  heroImageAlt: "Branded retail packaging lineup",
  howEyebrow: "How it works",
  packagingEyebrow: "Packaging options",
  moqTitle: "Minimums that scale with your packaging",
  moqLead: "Private-label minimums depend on the packaging format and print run — gift-box-only branding starts lower than fully custom cartons. We'll confirm exact minimums with your quote.",
  cta: "Start a private-label inquiry →",
};

// ── Page: Export & Shipping (/export) ──────────────────────────────────────
export const EXPORT = {
  metaTitle: "Export & Shipping",
  metaDescription:
    "Container-ready logistics, worldwide — sea and air freight from Karachi Port with full export documentation.",
  heroTitle: "Container-ready logistics, worldwide",
  heroLead: "Sea and air freight from Karachi Port with full export documentation.",
  containerEyebrow: "Container Loading Guide",
  incotermsEyebrow: "Incoterms Supported",
  countriesEyebrow: "Countries We Export To",
  notListed: {
    title: "Not seeing your country?",
    lead: "We ship to non-listed destinations regularly — ask us directly.",
    button: "Check shipping to my country →",
  },
};

// ── Page: Wholesale Process (/process) ─────────────────────────────────────
export const PROCESS = {
  metaTitle: "Wholesale Process",
  metaDescription:
    "From first inquiry to delivered container — the seven-step wholesale process for ordering from Kohsar Saltworks.",
  heroTitle: "From first inquiry to delivered container",
  cta: "Start step one — request a quote →",
};

// ── Page: Why Pakistan (/why-pakistan) ─────────────────────────────────────
export const WHY_PAKISTAN_PAGE = {
  metaTitle: "Why Pakistan",
  metaDescription:
    "Why serious buyers source Himalayan salt from Pakistan — source proximity, skilled labour, trade access and port logistics.",
  heroTitle: "Why serious buyers source Himalayan salt from Pakistan",
  cta: "Get a quote from source →",
};

// ── Page: Facility (/facility) ─────────────────────────────────────────────
export const FACILITY = {
  metaTitle: "Manufacturing Facility",
  metaDescription:
    "Carving workshops, edible-grade processing, quality checks and export packing — how Kohsar Saltworks produces near the Khewra Salt Range.",
  heroTitle: "Mine to container, under one roof",
  // TODO(owner): match this to your real facility description.
  heroLead:
    "Our facility near the Khewra Industrial Zone houses carving workshops, an edible-grade processing line, quality checks and export packing.",
  audit: {
    title: "Want a live factory audit?",
    lead: "We host video walkthroughs for serious buyers before large orders.",
    button: "Request a factory audit →",
  },
};

// ── Page: Certifications (/certifications) ─────────────────────────────────
export const CERTIFICATIONS = {
  metaTitle: "Export Documentation & Compliance",
  metaDescription:
    "Certificate of origin, phytosanitary certificate, lab test reports and pre-shipment inspection — the documentation provided with every Kohsar shipment.",
  heroTitle: "Documentation provided with every shipment",
  empty: "Certification details are being added — check back soon or request them in your quote.",
};

// ── Page: Quality (/quality) ───────────────────────────────────────────────
export const QUALITY = {
  metaTitle: "Quality Control",
  metaDescription:
    "Inspected at every stage, not just the last — raw material grading, in-process checks, lab testing and pre-shipment inspection.",
  heroTitle: "Inspected at every stage, not just the last",
  tableHeaders: { param: "Parameter", standard: "Standard", method: "Test method" },
};

// ── Page: Sustainability (/sustainability) ─────────────────────────────────
export const SUSTAINABILITY_PAGE = {
  metaTitle: "Sustainability",
  metaDescription:
    "Responsible sourcing, from mine to market — ethical labour practices, waste reduction, sustainable packaging and community investment.",
  heroTitle: "Responsible sourcing, from mine to market",
};

// ── Page: Catalog (/catalog) ───────────────────────────────────────────────
export const CATALOG = {
  metaTitle: "Catalog Download",
  metaDescription: "Get our full wholesale catalog — designs, specifications and packaging options across all product categories.",
  title: "Get our full wholesale catalog",
  lead: "Designs, specifications and packaging options across all categories — updated quarterly.",
  coverAlt: "Catalog cover artwork",
  // TODO(owner): when you have a real catalog PDF, put it in /public (e.g.
  // /catalog.pdf) and set pdfUrl: "/catalog.pdf" — the button below becomes
  // a direct download. While empty, the button sends buyers to the quote
  // form to request the catalog by email instead.
  pdfUrl: "",
  downloadButton: "Download Catalog (PDF) ↓",
  requestButton: "Request the catalog by email →",
};

// ── Page: Blog (/blog) ─────────────────────────────────────────────────────
export const BLOG = {
  metaTitle: "Blog — Import Guides & Wholesale Insights",
  metaDescription:
    "Import guides and wholesale insights for buyers sourcing Himalayan pink salt products — MOQs, container loading, private label and more.",
  heroTitle: "Import guides & wholesale insights",
  empty: "No posts published yet — check back soon.",
  relatedTitle: "More from the blog",
};

// ── Page: FAQ (/faq) ───────────────────────────────────────────────────────
export const FAQ = {
  metaTitle: "Frequently Asked Questions",
  metaDescription:
    "MOQs, samples, payment terms, Incoterms, lead times, private label minimums and export documentation — answered.",
  title: "Frequently asked questions",
  stillQuestions: "Still have questions?",
  cta: "Contact our export team →",
};

// ── Page: Contact (/contact) ───────────────────────────────────────────────
export const CONTACT = {
  metaTitle: "Contact Our Export Team",
  metaDescription: "Reach Kohsar Saltworks' export team by phone, WhatsApp or email — factory address and business hours.",
  title: "Talk to our export team",
  labels: {
    address: "Factory address",
    phone: "Phone / WhatsApp",
    email: "Email",
    hours: "Business hours",
  },
};

// ── Page: Quote (/quote) ───────────────────────────────────────────────────
// Two intents share this one page/form (?type=quote|sample) instead of two
// separate forms — same email pipeline, adapted copy and fields per intent.
export const QUOTE = {
  metaTitle: "Request a Wholesale Quote",
  metaDescription:
    "Tell us what you need — pricing, samples and lead times for Himalayan pink salt products, delivered within one business day.",
  title: "Request a Wholesale Quote",
  lead: "Tell us what you need. Our export team replies within one business day with pricing, samples and lead times.",
  sampleMetaTitle: "Request a Product Sample",
  sampleMetaDescription: "Evaluate quality before you commit — request a paid or freight-collect sample of any Kohsar Saltworks product.",
  sampleTitle: "Request a Product Sample",
  sampleLead: "Evaluate quality before you commit to a bulk order. Tell us where to send it — our export team confirms sample cost and shipping within one business day.",
  asideTitle: "Why buyers choose Kohsar",
  preferToTalk: "Prefer to talk?",
  productNoteLabel: "Product / model",
  moreDetailsToggle: "Add shipping & branding details (optional)",
  shippingAddressLabel: "Shipping address / port *",
  shippingAddressLabelOptional: "Shipping destination (port)",
};

// ── Forms (shared) ─────────────────────────────────────────────────────────
export const FORMS = {
  quoteSuccessTitle: "Inquiry received — thank you.",
  quoteSuccessBody:
    "Our export team has your request and will reply within one business day with pricing, available samples and estimated lead times.",
  sampleSuccessTitle: "Sample request received — thank you.",
  sampleSuccessBody:
    "Our export team will confirm sample cost (if any) and shipping details by email, then dispatch your sample.",
  contactSuccessTitle: "Message sent — thank you.",
  contactSuccessBody: "We'll get back to you within one business day.",
  quoteSubmit: "Submit inquiry →",
  quoteSubmitting: "Submitting…",
  sampleSubmit: "Request sample →",
  sampleSubmitting: "Sending…",
  contactSubmit: "Send message →",
  contactSubmitting: "Sending…",
};

// ── 404 page ───────────────────────────────────────────────────────────────
export const NOT_FOUND = {
  title: "This page went missing in transit",
  body: "The page you're looking for doesn't exist. Try the catalog or head back home.",
  ctaHome: "Back to home",
  ctaProducts: "Browse products",
};
