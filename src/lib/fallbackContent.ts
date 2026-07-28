import type { BlogPost, Category, Certification, Faq, Product, Testimonial } from "@/lib/types";

/**
 * Local content shown until Sanity is configured and seeded (see
 * scripts/seed.ts / README). Every query in lib/queries.ts falls back to
 * this the moment Sanity returns nothing, so the site never ships an empty
 * catalog/blog/FAQ just because a project hasn't been connected yet. Any
 * real Sanity content always takes priority.
 */

function toBlocks(paragraphs: string[]) {
  return paragraphs.map((text, i) => ({
    _type: "block" as const,
    _key: `b${i}`,
    style: "normal" as const,
    children: [{ _type: "span" as const, _key: `s${i}`, text }],
  }));
}

export const FALLBACK_CATEGORIES: Category[] = [
  { _id: "category-lamp-natural", name: "Natural Shape Lamps", slug: "lamp-natural", blurb: "Raw crystal form, 1–10kg weight classes", order: 1 },
  { _id: "category-lamp-crafted", name: "Crafted & Geometric Lamps", slug: "lamp-crafted", blurb: "Cube, pyramid, sphere & fire-bowl cuts", order: 2 },
  { _id: "category-lamp-basket", name: "Basket Lamps", slug: "lamp-basket", blurb: "Wooden & iron basket-mounted crystal", order: 3 },
  { _id: "category-lamp-usb", name: "USB & Night Lamps", slug: "lamp-usb", blurb: "Mini USB lamps, plug-in night lights", order: 4 },
  { _id: "category-holder-tealight", name: "Candle Holders", slug: "holder-tealight", blurb: "Tealight, natural & geometric cut", order: 5 },
  { _id: "category-tile-cooking", name: "Salt Tiles & Bricks", slug: "tile-cooking", blurb: "Cooking tiles, wall & sauna bricks", order: 6 },
  { _id: "category-edible-fine", name: "Edible / Cooking Salt", slug: "edible-fine", blurb: "Fine, coarse & granulated cuts", order: 7 },
  { _id: "category-kitchenware", name: "Kitchenware", slug: "kitchenware", blurb: "Shot glasses, wine glasses, mortar & pestle, framed cooking tiles", order: 8 },
  { _id: "category-bath-crystal", name: "Bath & Spa Salt", slug: "bath-crystal", blurb: "Bath crystals, Massage stones, fine granules & blends", order: 9 },
  { _id: "category-lick-block", name: "Animal Salt Licks", slug: "lick-block", blurb: "Livestock mineral lick blocks", order: 10 },
  // { _id: "category-therapy", name: "Salt Therapy Products", slug: "therapy", blurb: "Massage stones, inhalers & detox blocks", order: 11 },
];

const CATEGORY_BY_SLUG = new Map(FALLBACK_CATEGORIES.map((c) => [c.slug, { name: c.name, slug: c.slug }]));

/**
 * B2B catalog: no prices or MOQs are published — pricing is quoted per
 * requirement (volume, spec, packaging, Incoterm). Each product lists its
 * design/shape variants with a model code buyers can reference in quotes.
 */
export const FALLBACK_PRODUCTS: Product[] = [
  {
    _id: "product-lamp-natural",
    name: "Natural Shape Salt Lamp",
    slug: "lamp-natural",
    category: CATEGORY_BY_SLUG.get("lamp-natural"),
    tag: "Best Seller",
    sizes: ["1–2kg", "2–3kg", "3–5kg", "5–7kg", "7–10kg"],
    variants: [
      { model: "KS-NL-01", name: "1-2kg Natural Shape Salt Lamp", note: "Hand-selected pink crystal, wood base" },
      { model: "KS-NL-02", name: "3-5kg Natural Shape Salt Lamp", note: "Hand-selected pink crystal, wood base" },
      { model: "KS-NL-03", name: "5-7kg Natural Shape Salt Lamp", note: "Hand-selected pink crystal, wood base" },
      { model: "KS-NL-04", name: "7-10kg Natural Shape Salt Lamp", note: "Hand-selected pink crystal, wood base" },
      { model: "KS-NL-04", name: "Custom Size Natural Shape Salt Lamp", note: "Any custom size" },
    ],
    description:
      "Hand-selected natural-form crystal lamp on a mango-wood base, wired to your market standard (EU/US/UK plug, dimmer optional). Our most-ordered line across export regions.",
    featured: true,
    order: 1,
  },
  {
    _id: "product-lamp-crafted",
    name: "Crafted & Geometric Salt Lamp",
    slug: "lamp-crafted",
    category: CATEGORY_BY_SLUG.get("lamp-crafted"),
    tag: "New",
    sizes: ["2–3kg", "3–5kg", "5–7kg"],
    variants: [
      { model: "KS-CL-01", name: "Cube", note: "Polished faces, sharp edges" },
      { model: "KS-CL-02", name: "Pyramid", note: "Four-sided, polished finish" },
      { model: "KS-CL-03", name: "Sphere", note: "On wooden or salt base" },
      { model: "KS-CL-04", name: "Egg / Oval", note: "Smooth polished profile" },
      { model: "KS-CL-05", name: "Bowl of Fire", note: "Carved bowl filled with crystal chunks" },
      { model: "KS-CL-06", name: "Heart", note: "Popular gifting cut" },
      { model: "KS-CL-07", name: "Cylinder / Tower", note: "Tall profile, hotel & spa favourite" },
    ],
    description:
      "Precision-cut lamps in polished geometric profiles — a strong margin line for design-led retail and gifting ranges. Custom shapes can be carved to your drawing.",
    featured: true,
    order: 2,
  },
  {
    _id: "product-lamp-basket",
    name: "Basket Salt Lamp",
    slug: "lamp-basket",
    category: CATEGORY_BY_SLUG.get("lamp-basket"),
    tag: "Gifting",
    sizes: ["2–3kg", "3–5kg"],
    variants: [
      { model: "KS-BL-01", name: "Iron Bowl Basket", note: "Black powder-coated bowl, crystal chunks" },
      { model: "KS-BL-02", name: "Iron Cage Basket", note: "Openwork cage silhouette" },
      { model: "KS-BL-03", name: "Wooden Bowl Basket", note: "Mango-wood bowl, natural chunks" },
      { model: "KS-BL-04", name: "Square Wooden Basket", note: "Slatted square frame" },
    ],
    description:
      "Natural crystal chunks set in iron or mango-wood basket frames — a premium gifting line with strong sell-through in home & wellness retail.",
    featured: true,
    order: 3,
  },
  {
    _id: "product-lamp-usb",
    name: "USB Mini Lamp / Night Light",
    slug: "lamp-usb",
    category: CATEGORY_BY_SLUG.get("lamp-usb"),
    tag: "New",
    sizes: ["Mini (150–300g)", "Plug-in night light"],
    variants: [
      { model: "KS-UL-01", name: "USB Mini Natural", note: "Warm LED, USB powered" },
      { model: "KS-UL-02", name: "USB Sphere", note: "Polished mini sphere" },
      { model: "KS-UL-03", name: "USB Pyramid", note: "Polished mini pyramid" },
    ],
    description:
      "Compact USB-powered or plug-in mini lamps with warm LED — ideal for retail impulse counters, gift sets and hospitality amenity lines.",
    featured: true,
    order: 4,
  },
  {
    _id: "product-holder-tealight",
    name: "Salt Tealight Holder",
    slug: "holder-tealight",
    category: CATEGORY_BY_SLUG.get("holder-tealight"),
    tag: "Gifting",
    sizes: ["Single tealight", "Multi-hole", "Heart shape"],
    variants: [
      { model: "KS-CH-01", name: "Natural Single", note: "Raw form, single tealight" },
      { model: "KS-CH-02", name: "Two-Hole", note: "Natural or polished" },
      { model: "KS-CH-03", name: "Three-Hole", note: "Centrepiece format" },
      { model: "KS-CH-04", name: "Heart", note: "Carved heart profile" },
      { model: "KS-CH-05", name: "Round Polished", note: "CNC-finished, uniform sets" },
    ],
    description:
      "Single and multi-hole tealight holders, natural or geometric cut, in carved or CNC-finished form — a fast-moving spa and gift-line staple.",
    order: 5,
  },
  {
    _id: "product-tile-cooking",
    name: "Salt Tiles & Bricks",
    slug: "tile-cooking",
    category: CATEGORY_BY_SLUG.get("tile-cooking"),
    tag: "Culinary",
    sizes: ["8×8in", "12×8in", "custom to spec"],
    variants: [
      { model: "KS-TB-01", name: "Cooking / Searing Tile", note: "Heat-tested for grill & oven" },
      { model: "KS-TB-02", name: "Round Serving Tile", note: "Edge-finished presentation round" },
      { model: "KS-TB-03", name: "Sauna / Wall Brick", note: "Uniform bricks for salt rooms" },
      { model: "KS-TB-04", name: "Custom-Cut Tile", note: "Cut to your drawing & tolerance" },
    ],
    description: "Food-grade searing and serving tiles plus wall and sauna bricks, edge-finished and cut to standard or custom dimensions.",
    order: 6,
  },
  {
    _id: "product-edible-fine",
    name: "Edible Pink Salt · 84+ Minerals",
    slug: "edible-fine",
    category: CATEGORY_BY_SLUG.get("edible-fine"),
    tag: "Food Grade",
    sizes: ["Fine", "Coarse", "Granulated", "Chunks"],
    variants: [
      { model: "KS-ES-01", name: "Fine", note: "Table & processing grade" },
      { model: "KS-ES-02", name: "Coarse", note: "Grinder & mill refills" },
      { model: "KS-ES-03", name: "Granulate", note: "Between fine and coarse" },
      { model: "KS-ES-04", name: "Chunks / Rock", note: "For grating & display jars" },
    ],
    description:
      "Food-grade pink salt in fine, coarse, granulated and chunk cuts, in light pink to dark pink colour grades. Supplied as bulk bags or retail-ready pouches, private-label ready.",
    order: 7,
  },
  {
    _id: "product-kitchenware",
    name: "Salt Kitchenware · Serving & Prep",
    slug: "kitchenware",
    category: CATEGORY_BY_SLUG.get("kitchenware"),
    tag: "Culinary",
    sizes: ["Shot / wine glass", "Mortar & pestle", "Framed cooking tile", "Urn / plate"],
    variants: [
      { model: "KS-KW-01", name: "Shot Glass Set", note: "Tequila sets, retail-boxed" },
      { model: "KS-KW-02", name: "Wine Glass", note: "Carved single piece" },
      { model: "KS-KW-03", name: "Mortar & Pestle", note: "With wooden pestle" },
      { model: "KS-KW-04", name: "Serving Plate / Platter", note: "Round & rectangular" },
      { model: "KS-KW-05", name: "Framed Cooking Tile", note: "Wooden, stainless or iron frame" },
      { model: "KS-KW-06", name: "Salt Urn", note: "Storage & display piece" },
    ],
    description:
      "Food-grade Himalayan salt kitchenware — shot sets, wine glasses, mortar & pestle, urns, plates and framed cooking tiles. Custom pieces carved to spec, private label available.",
    featured: true,
    order: 8,
  },
  {
    _id: "product-bath-crystal",
    name: "Bath & Spa Salt",
    slug: "bath-crystal",
    category: CATEGORY_BY_SLUG.get("bath-crystal"),
    tag: "Wellness",
    sizes: ["Coarse crystal", "Fine granule", "Scented blend"],
    variants: [
      { model: "KS-BS-01", name: "Coarse Bath Crystals", note: "Graded natural crystals" },
      { model: "KS-BS-02", name: "Fine Bath Granules", note: "Fast-dissolving soak grade" },
      { model: "KS-BS-03", name: "Scented Blend", note: "Essential-oil blends to your brief" },
      { model: "KS-BS-04", name: "Retail Jar / Pouch Pack", note: "Filled & labelled to your brand" },
    ],
    description: "Graded bath crystals and granules, optionally scented and blended. Supplied in retail jars, refill sacks or bulk supply for private label.",
    order: 9,
  },
  {
    _id: "product-lick-block",
    name: "Livestock Salt Lick Block",
    slug: "lick-block",
    category: CATEGORY_BY_SLUG.get("lick-block"),
    tag: "Agri",
    sizes: ["1kg", "2kg", "5kg"],
    variants: [
      { model: "KS-LB-01", name: "Block with Rope", note: "Drilled & roped for hanging" },
      { model: "KS-LB-02", name: "Block without Rope", note: "Feeder & trough format" },
      // { model: "KS-LB-03", name: "Compressed Mineral Block", note: "Pressed, uniform weight" },
      { model: "KS-LB-04", name: "Custom Shape Block", note: "Cut to distributor spec" },
    ],
    description: "Natural mineral lick blocks for cattle and equine, with or without rope, in standard block weights for agricultural distributors.",
    order: 10,
  },
  // {
  //   _id: "product-therapy",
  //   name: "Salt Therapy & Wellness Products",
  //   slug: "therapy",
  //   category: CATEGORY_BY_SLUG.get("therapy"),
  //   tag: "Wellness",
  //   sizes: ["Stone sets", "Single units", "Bulk refills"],
  //   variants: [
  //     { model: "KS-TP-01", name: "Massage Stones", note: "Polished pairs & sets" },
  //     { model: "KS-TP-02", name: "Salt Inhaler Refill Crystals", note: "Food-grade crystal fill" },
  //     { model: "KS-TP-03", name: "Foot Detox Block", note: "Contoured standing block" },
  //     { model: "KS-TP-04", name: "Therapy Pillow / Pad", note: "Warmable crystal-filled pad" },
  //   ],
  //   description:
  //     "Spa and wellness line — polished massage stones, inhaler refill crystals, detox blocks and therapy pads for wellness retailers and spa suppliers.",
  //   order: 11,
  // },
];

export const FALLBACK_POSTS: BlogPost[] = [
  {
    _id: "post-himalayan-lamps-buying-guide",
    title: "A Wholesale Buyer's Guide to Sourcing Salt Lamps",
    slug: "himalayan-lamps-buying-guide",
    category: "Buying Guide",
    publishedAt: "2026-06-01T09:00:00Z",
    excerpt: "What to check on grade, wiring standards and MOQ before you place a container order.",
    author: "Kohsar Export Team",
    body: toBlocks([
      "Buyers new to Himalayan salt lamps often focus on colour alone, but grade, crystal density and wiring compliance matter far more for a program that will sit on retail shelves in multiple countries.",
      "We grade every lamp by weight class and light transmission, then match wiring and plugs to your destination market's electrical standard — UL, CE or BS — so customs and retail compliance are never a surprise.",
      "For first-time importers, we recommend a mixed sample carton across weight classes before committing to a full container, which we can ship within a week of your request.",
    ]),
  },
  {
    _id: "post-private-label-guide",
    title: "How Private Label Works: From Logo to Landed Product",
    slug: "private-label-guide",
    category: "Private Label",
    publishedAt: "2026-05-01T09:00:00Z",
    excerpt: "The five-stage workflow we run for every private-label partner, and what we need from you at each step.",
    author: "Kohsar Export Team",
    body: toBlocks([
      "A private-label program starts with a short consultation on your target market, price point and packaging ambitions — this shapes which of our product lines suit your brand best.",
      "From there we move to design and sampling: artwork, box structure and labelling are proofed on physical samples before any tooling or print run is committed.",
      "Once approved, production and export packing follow our standard QC gates, and we ship with your branding fully applied, ready for retail.",
    ]),
  },
  {
    _id: "post-container-loading-explained",
    title: "20ft vs 40ft: Planning Your Container Load",
    slug: "container-loading-explained",
    category: "Logistics",
    publishedAt: "2026-04-01T09:00:00Z",
    excerpt: "A practical breakdown of what actually fits, by product category, so you can plan cost per unit accurately.",
    author: "Kohsar Export Team",
    body: toBlocks([
      "Salt is dense cargo, so container loads are usually weight-limited before they are volume-limited — this changes how you should think about mixing SKUs in a single container.",
      "A 20ft container typically carries 22–24 metric tons of packaged salt product, while a 40ft standard container carries 26–28 metric tons due to weight distribution rules, not floor space.",
      "We provide a loading plan with every quotation so you can see exact carton counts, pallet counts and estimated cost per unit landed at your port.",
    ]),
  },
  {
    _id: "post-factory-tour",
    title: "Inside Our Khewra Workshop: Mine to Container",
    slug: "factory-tour",
    category: "Behind the Scenes",
    publishedAt: "2026-03-01T09:00:00Z",
    excerpt: "A walk through extraction, hand-carving and export packing at our production facility.",
    author: "Kohsar Export Team",
    body: toBlocks([
      "Our raw material is hand-selected near the mine face, graded by colour and density before it ever reaches the workshop floor.",
      "Skilled artisans — many with over a decade of experience — carve, sand and finish each piece, with quality checks after every stage rather than only at the end of the line.",
      "The final stop is our export packing hall, where every carton is weighed, labelled and photographed before palletising for its destination port.",
    ]),
  },
  {
    _id: "post-wholesale-buying-guide",
    title: "First-Time Wholesale Import: A Step-by-Step Guide",
    slug: "wholesale-buying-guide",
    category: "Buying Guide",
    publishedAt: "2026-02-01T09:00:00Z",
    excerpt: "What importers should ask a supplier before sending a deposit, and how our process is structured to de-risk it.",
    author: "Kohsar Export Team",
    body: toBlocks([
      "The biggest risk in first-time importing is mismatched expectations on spec, packaging and timeline — all of which should be locked in writing before any payment moves.",
      "Our process fixes this with a written proforma invoice that specifies grade, packaging, Incoterm and lead time, followed by a pre-shipment inspection report you approve before the container is sealed.",
      "We also encourage first-time buyers to start with a smaller trial order — most of our long-term partners began with a single pallet before scaling to full containers.",
    ]),
  },
  {
    _id: "post-sustainability-in-mining",
    title: "Responsible Mining: What We Do Differently",
    slug: "sustainability-in-mining",
    category: "Sustainability",
    publishedAt: "2026-01-01T09:00:00Z",
    excerpt: "Fair wages, ethical labour practices and waste reduction across our supply chain.",
    author: "Kohsar Export Team",
    body: toBlocks([
      "We work only with licensed extraction partners who meet documented labour and safety standards, and we review those standards with our partners regularly.",
      "Offcuts from carving and cutting are reprocessed into edible-grade fine salt and bath salt rather than discarded, reducing raw material waste across the workshop.",
      "Packaging is shifting to FSC-certified cartons and recyclable inner materials as we phase out single-use plastic across our product range.",
    ]),
  },
];

export const FALLBACK_FAQS: Faq[] = [
  { _id: "faq-q1", category: "Ordering", question: "What is your minimum order quantity (MOQ)?", answer: "Minimums depend on the product, size mix and packaging, so we don't publish fixed MOQs. Share your target quantity in the quote form and we'll confirm minimums with your offer — trial orders and mixed pallets are welcome for first-time buyers.", order: 1 },
  { _id: "faq-q2", category: "Ordering", question: "Can I order a sample before committing to a full container?", answer: "Yes. We offer paid or freight-collect samples for every product line so you can verify quality before placing a bulk order.", order: 2 },
  { _id: "faq-q3", category: "Payment", question: "What payment terms do you accept?", answer: "T/T (30% deposit, 70% before shipment) is standard. Established buyers with repeat orders may qualify for L/C or open-account terms.", order: 3 },
  { _id: "faq-q4", category: "Shipping", question: "Which Incoterms do you support?", answer: "FOB Karachi is most common; we also quote CIF, and CFR.", order: 4 },
  { _id: "faq-q5", category: "Shipping", question: "How long does production and shipping take?", answer: "Typical lead time is 18–28 days after sample and PI approval, plus sea transit time to your port (varies by destination).", order: 5 },
  { _id: "faq-q6", category: "Private Label", question: "Do you offer private label and custom packaging?", answer: "Yes — logo engraving, custom retail boxes, branded cartons and compliance labelling are all available. See our OEM / Private Label page for the full workflow.", order: 6 },
  { _id: "faq-q7", category: "Private Label", question: "Is there a minimum order for private label programs?", answer: "Private-label minimums depend on the packaging format and print run — gift-box-only branding starts lower than fully custom cartons. We'll confirm the exact minimum with your quote.", order: 7 },
  { _id: "faq-q8", category: "Documentation", question: "What export documents do you provide?", answer: "Commercial invoice, packing list, certificate of origin, phytosanitary certificate and HS code classification are included with every shipment.", order: 8 },
];

/**
 * ⚠ TODO(owner): ONLY list certifications you actually hold. Claiming ISO /
 * HACCP / FDA registration you don't have is false advertising and can be
 * verified (and reported) by any serious buyer in minutes. The entries below
 * are limited to standard per-shipment export documents that every Pakistani
 * exporter provides. When you obtain a real certification, add it here (or
 * in Sanity Studio) with the real certificate number and year — and be ready
 * to email the certificate PDF when a buyer asks.
 *
 * Examples to add once genuinely obtained:
 *   { _id: "cert-iso-22000", name: "ISO 22000", issuingBody: "<certifying body>", scope: "Food safety management system", year: "<year>", shortDesc: "Food safety", order: 10 },
 *   { _id: "cert-haccp", name: "HACCP", issuingBody: "<certifying body>", scope: "Hazard analysis & critical control points", year: "<year>", shortDesc: "Hazard control", order: 11 },
 *   { _id: "cert-fda", name: "FDA Facility Registration", issuingBody: "U.S. FDA", scope: "US food facility registration", year: "<year>", shortDesc: "US food facilities", order: 12 },
 */
export const FALLBACK_CERTIFICATIONS: Certification[] = [
  { _id: "cert-coo", name: "Certificate of Origin", issuingBody: "Chamber of Commerce, Pakistan", scope: "Per-shipment origin certification", year: "Per shipment", shortDesc: "Origin certified", order: 1 },
  { _id: "cert-phyto", name: "Phytosanitary Certificate", issuingBody: "Dept. of Plant Protection, Pakistan", scope: "Per-shipment export health certification", year: "Per shipment", shortDesc: "Export compliance", order: 2 },
  { _id: "cert-lab", name: "Batch Lab Reports", issuingBody: "Independent laboratory", scope: "Purity, moisture & heavy-metal analysis per edible batch", year: "Per batch", shortDesc: "Lab tested", order: 3 },
  { _id: "cert-inspection", name: "Pre-Shipment Inspection", issuingBody: "Third-party, on request", scope: "Independent inspection available for any order", year: "On request", shortDesc: "Inspection", order: 4 },
];

/**
 * ⚠ TODO(owner): add real customer quotes only — with the customer's written
 * permission. Invented testimonials with invented names are illegal in many
 * of your target markets (e.g. FTC rules in the US) and easy to spot. The
 * homepage testimonial section stays hidden while this list is empty.
 *
 * Format: { _id: "testimonial-1", quote: "…", name: "Full Name", role: "Company · Country", order: 1 },
 */
export const FALLBACK_TESTIMONIALS: Testimonial[] = [];

// export const FALLBACK_TESTIMONIALS: Testimonial[] = [
//   { _id: "testimonial-reinhardt", quote: "Consistent quality across three years of container orders. Their private-label program made our retail launch effortless.", name: "M. Reinhardt", role: "Wellness Importer · Germany", order: 1 },
//   { _id: "testimonial-coleman", quote: "Fast quotes, honest lead times, and packaging that survives the ocean. Exactly what a distributor needs.", name: "Sarah Coleman", role: "Distributor · USA", order: 2 },
//   { _id: "testimonial-tanaka", quote: "From sampling to delivery, the export team handled everything. Documentation was flawless.", name: "Y. Tanaka", role: "Retail Chain · Japan", order: 3 },
// ];
