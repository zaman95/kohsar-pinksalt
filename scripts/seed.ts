/**
 * One-time content migration: pushes the site's original copy (categories,
 * products, blog posts, FAQs, certifications, testimonials, site settings)
 * into Sanity so the studio starts populated instead of empty.
 *
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET and
 * SANITY_API_WRITE_TOKEN (Editor permission) in .env.local. Safe to re-run —
 * every document uses a deterministic _id and is upserted with createOrReplace.
 *
 * Usage: npm run seed
 */
import { config } from "dotenv";

config({ path: ".env.local" });

type SeedCategory = { id: string; name: string; blurb: string; order: number };
type SeedProduct = {
  id: string;
  categoryId: string;
  name: string;
  tag: string;
  moq: string;
  priceRange: string;
  sizes: string[];
  description: string;
  featured: boolean;
  order: number;
};
type SeedPost = {
  id: string;
  category: string;
  publishedAt: string;
  title: string;
  excerpt: string;
  body: string[];
};
type SeedFaq = { id: string; category: string; question: string; answer: string; order: number };
type SeedCert = { id: string; name: string; issuingBody: string; scope: string; year: string; shortDesc: string; order: number };
type SeedTestimonial = { id: string; quote: string; name: string; role: string; order: number };

const categories: SeedCategory[] = [
  { id: "lamp-natural", name: "Natural Shape Lamps", blurb: "Raw crystal form, 1–10kg weight classes", order: 1 },
  { id: "lamp-crafted", name: "Crafted & Geometric Lamps", blurb: "Cube, pyramid, sphere & fire-bowl cuts", order: 2 },
  { id: "lamp-basket", name: "Basket Lamps", blurb: "Wooden & iron basket-mounted crystal", order: 3 },
  { id: "lamp-usb", name: "USB & Night Lamps", blurb: "Mini USB lamps, plug-in night lights", order: 4 },
  { id: "holder-tealight", name: "Candle Holders", blurb: "Tealight, natural & geometric cut", order: 5 },
  { id: "tile-cooking", name: "Salt Tiles & Bricks", blurb: "Cooking tiles, wall & sauna bricks", order: 6 },
  { id: "edible-fine", name: "Edible / Cooking Salt", blurb: "Fine, coarse, granulated, kitchenware", order: 7 },
  { id: "bath-crystal", name: "Bath & Spa Salt", blurb: "Bath crystals, massage stones", order: 8 },
  { id: "lick-block", name: "Animal Salt Licks", blurb: "Livestock mineral lick blocks", order: 9 },
];

const products: SeedProduct[] = [
  {
    id: "lamp-natural",
    categoryId: "lamp-natural",
    name: "Natural Shape Salt Lamp",
    tag: "Best Seller",
    moq: "500 pcs",
    priceRange: "$2.20–4.80 / pc",
    sizes: ["1–2kg", "2–3kg", "3–5kg", "5–7kg", "7–10kg"],
    description:
      "Hand-selected natural-form crystal lamp on a mango-wood base, wired to your market standard (EU/US/UK plug, dimmer optional). Our most-ordered SKU across every export region.",
    featured: true,
    order: 1,
  },
  {
    id: "lamp-crafted",
    categoryId: "lamp-crafted",
    name: "Geometric Cut Lamp (Cube / Pyramid / Sphere)",
    tag: "New",
    moq: "500 pcs",
    priceRange: "$3.40–6.20 / pc",
    sizes: ["2–3kg", "3–5kg", "5–7kg"],
    description:
      "Precision diamond-cut lamp in cube, pyramid or sphere profile with a polished finish — a strong margin line for design-led retail and gifting ranges.",
    featured: true,
    order: 2,
  },
  {
    id: "lamp-basket",
    categoryId: "lamp-basket",
    name: "Wooden Basket Salt Lamp",
    tag: "Gifting",
    moq: "300 pcs",
    priceRange: "$4.80–8.50 / pc",
    sizes: ["2–3kg", "3–5kg"],
    description:
      "Natural crystal chunks set in a mango-wood or iron basket frame — a premium gifting SKU with strong sell-through in home & wellness retail.",
    featured: true,
    order: 3,
  },
  {
    id: "lamp-usb",
    categoryId: "lamp-usb",
    name: "USB Mini Lamp / Plug-in Night Light",
    tag: "New",
    moq: "1,000 pcs",
    priceRange: "$1.60–2.90 / pc",
    sizes: ["Mini (150–300g)", "Plug-in night light"],
    description:
      "Compact USB-powered or plug-in mini lamp with warm LED — ideal for retail impulse counters, gift sets and hospitality amenity lines.",
    featured: true,
    order: 4,
  },
  {
    id: "holder-tealight",
    categoryId: "holder-tealight",
    name: "Salt Tealight Holder",
    tag: "Gifting",
    moq: "1,000 pcs",
    priceRange: "$0.90–1.80 / pc",
    sizes: ["Single tealight", "Multi-hole", "Heart shape"],
    description:
      "Single and multi-hole tealight holders, natural or geometric cut, in carved or CNC-finished form — a fast-moving spa and gift-line staple.",
    featured: false,
    order: 5,
  },
  {
    id: "tile-cooking",
    categoryId: "tile-cooking",
    name: "Salt Cooking Tile",
    tag: "Culinary",
    moq: "1,000 pcs",
    priceRange: "$2.60–4.20 / pc",
    sizes: ["8×8in", "12×8in", "custom to spec"],
    description: "Food-grade searing and serving tile in standard and custom sizes, edge-finished and heat-tested for direct grill and oven use.",
    featured: false,
    order: 6,
  },
  {
    id: "edible-fine",
    categoryId: "edible-fine",
    name: "Edible Fine Salt · 84+ Minerals",
    tag: "FDA",
    moq: "5,000 kg",
    priceRange: "$0.25–0.50 / kg",
    sizes: ["Fine", "Coarse", "Granulated"],
    description: "Food-grade pink salt in fine, coarse and granulated cuts. Supplied as bulk bags or retail-ready pouches, private-label ready.",
    featured: false,
    order: 7,
  },
  {
    id: "bath-crystal",
    categoryId: "bath-crystal",
    name: "Spa Bath Salt Crystals",
    tag: "Wellness",
    moq: "3,000 kg",
    priceRange: "$0.35–0.70 / kg",
    sizes: ["Coarse crystal", "Fine granule", "Scented blend"],
    description: "Graded bath crystals, optionally scented and blended. Supplied in retail jars, refill sacks or bulk supply for private label.",
    featured: false,
    order: 8,
  },
  {
    id: "lick-block",
    categoryId: "lick-block",
    name: "Livestock Salt Lick Block",
    tag: "Agri",
    moq: "10,000 kg",
    priceRange: "$0.15–0.30 / kg",
    sizes: ["1kg", "2kg", "5kg", "with/without rope"],
    description: "Natural mineral lick blocks for cattle and equine, with or without rope, in standard block weights for agricultural distributors.",
    featured: false,
    order: 9,
  },
];

const posts: SeedPost[] = [
  {
    id: "himalayan-lamps-buying-guide",
    category: "Buying Guide",
    publishedAt: "2026-06-01T09:00:00Z",
    title: "A Wholesale Buyer's Guide to Sourcing Salt Lamps",
    excerpt: "What to check on grade, wiring standards and MOQ before you place a container order.",
    body: [
      "Buyers new to Himalayan salt lamps often focus on colour alone, but grade, crystal density and wiring compliance matter far more for a program that will sit on retail shelves in multiple countries.",
      "We grade every lamp by weight class and light transmission, then match wiring and plugs to your destination market's electrical standard — UL, CE or BS — so customs and retail compliance are never a surprise.",
      "For first-time importers, we recommend a mixed sample carton across weight classes before committing to a full container, which we can ship within a week of your request.",
    ],
  },
  {
    id: "private-label-guide",
    category: "Private Label",
    publishedAt: "2026-05-01T09:00:00Z",
    title: "How Private Label Works: From Logo to Landed Product",
    excerpt: "The five-stage workflow we run for every private-label partner, and what we need from you at each step.",
    body: [
      "A private-label program starts with a short consultation on your target market, price point and packaging ambitions — this shapes which of our product lines suit your brand best.",
      "From there we move to design and sampling: artwork, box structure and labelling are proofed on physical samples before any tooling or print run is committed.",
      "Once approved, production and export packing follow our standard QC gates, and we ship with your branding fully applied, ready for retail.",
    ],
  },
  {
    id: "container-loading-explained",
    category: "Logistics",
    publishedAt: "2026-04-01T09:00:00Z",
    title: "20ft vs 40ft: Planning Your Container Load",
    excerpt: "A practical breakdown of what actually fits, by product category, so you can plan cost per unit accurately.",
    body: [
      "Salt is dense cargo, so container loads are usually weight-limited before they are volume-limited — this changes how you should think about mixing SKUs in a single container.",
      "A 20ft container typically carries 22–24 metric tons of packaged salt product, while a 40ft standard container carries 26–28 metric tons due to weight distribution rules, not floor space.",
      "We provide a loading plan with every quotation so you can see exact carton counts, pallet counts and estimated cost per unit landed at your port.",
    ],
  },
  {
    id: "factory-tour",
    category: "Behind the Scenes",
    publishedAt: "2026-03-01T09:00:00Z",
    title: "Inside Our Khewra Workshop: Mine to Container",
    excerpt: "A walk through extraction, hand-carving and export packing at our production facility.",
    body: [
      "Our raw material is hand-selected near the mine face, graded by colour and density before it ever reaches the workshop floor.",
      "Skilled artisans — many with over a decade of experience — carve, sand and finish each piece, with quality checks after every stage rather than only at the end of the line.",
      "The final stop is our export packing hall, where every carton is weighed, labelled and photographed before palletising for its destination port.",
    ],
  },
  {
    id: "wholesale-buying-guide",
    category: "Buying Guide",
    publishedAt: "2026-02-01T09:00:00Z",
    title: "First-Time Wholesale Import: A Step-by-Step Guide",
    excerpt: "What importers should ask a supplier before sending a deposit, and how our process is structured to de-risk it.",
    body: [
      "The biggest risk in first-time importing is mismatched expectations on spec, packaging and timeline — all of which should be locked in writing before any payment moves.",
      "Our process fixes this with a written proforma invoice that specifies grade, packaging, Incoterm and lead time, followed by a pre-shipment inspection report you approve before the container is sealed.",
      "We also encourage first-time buyers to start with a smaller trial order — most of our long-term partners began with a single pallet before scaling to full containers.",
    ],
  },
  {
    id: "sustainability-in-mining",
    category: "Sustainability",
    publishedAt: "2026-01-01T09:00:00Z",
    title: "Responsible Mining: What We Do Differently",
    excerpt: "Fair wages, ethical labour practices and waste reduction across our supply chain.",
    body: [
      "We work only with licensed extraction partners who meet documented labour and safety standards, and we audit those sites twice a year.",
      "Offcuts from carving and cutting are reprocessed into edible-grade fine salt and bath salt rather than discarded, reducing raw material waste across the workshop.",
      "Packaging is shifting to FSC-certified cartons and recyclable inner materials as we phase out single-use plastic across our product range.",
    ],
  },
];

const faqs: SeedFaq[] = [
  { id: "q1", category: "Ordering", question: "What is your minimum order quantity (MOQ)?", answer: "MOQ varies by product — typically 300–1,000 pieces for lamps and décor, or 3,000–10,000 kg for bulk salt. Custom and private-label orders may have higher minimums; we'll confirm exact figures on your quote.", order: 1 },
  { id: "q2", category: "Ordering", question: "Can I order a sample before committing to a full container?", answer: "Yes. We offer paid or freight-collect samples for every product line so you can verify quality before placing a bulk order.", order: 2 },
  { id: "q3", category: "Payment", question: "What payment terms do you accept?", answer: "T/T (30% deposit, 70% before shipment) is standard. Established buyers with repeat orders may qualify for L/C or open-account terms.", order: 3 },
  { id: "q4", category: "Shipping", question: "Which Incoterms do you support?", answer: "FOB Karachi is most common; we also quote CIF, CFR, EXW and DDP depending on your logistics preference.", order: 4 },
  { id: "q5", category: "Shipping", question: "How long does production and shipping take?", answer: "Typical lead time is 18–28 days after sample and PI approval, plus sea transit time to your port (varies by destination).", order: 5 },
  { id: "q6", category: "Private Label", question: "Do you offer private label and custom packaging?", answer: "Yes — logo engraving, custom retail boxes, branded cartons and compliance labelling are all available. See our OEM / Private Label page for the full workflow.", order: 6 },
  { id: "q7", category: "Private Label", question: "Is there a minimum order for private label programs?", answer: "Private label programs typically start at 1,000–2,000 units per SKU to justify custom packaging tooling and print runs.", order: 7 },
  { id: "q8", category: "Documentation", question: "What export documents do you provide?", answer: "Commercial invoice, packing list, certificate of origin, phytosanitary certificate and HS code classification are included with every shipment.", order: 8 },
];

const certifications: SeedCert[] = [
  { id: "iso-22000", name: "ISO 22000", issuingBody: "International Standards Org.", scope: "Food safety management system", year: "2016", shortDesc: "Food safety", order: 1 },
  { id: "iso-9001", name: "ISO 9001", issuingBody: "International Standards Org.", scope: "Quality management system", year: "2014", shortDesc: "Quality mgmt", order: 2 },
  { id: "haccp", name: "HACCP", issuingBody: "Codex Alimentarius", scope: "Hazard analysis & critical control points", year: "2017", shortDesc: "Hazard control", order: 3 },
  { id: "sgs", name: "SGS Inspection", issuingBody: "SGS S.A.", scope: "Pre-shipment quality inspection", year: "Annual", shortDesc: "Inspection", order: 4 },
  { id: "fda", name: "FDA Registration", issuingBody: "U.S. FDA", scope: "US food-grade facility registration", year: "2019", shortDesc: "US food grade", order: 5 },
  { id: "coo", name: "Certificate of Origin", issuingBody: "Chamber of Commerce, Pakistan", scope: "Per-shipment origin certification", year: "Per shipment", shortDesc: "Origin certified", order: 6 },
];

const testimonials: SeedTestimonial[] = [
  { id: "reinhardt", quote: "Consistent quality across three years of container orders. Their private-label program made our retail launch effortless.", name: "M. Reinhardt", role: "Wellness Importer · Germany", order: 1 },
  { id: "coleman", quote: "Fast quotes, honest lead times, and packaging that survives the ocean. Exactly what a distributor needs.", name: "Sarah Coleman", role: "Distributor · USA", order: 2 },
  { id: "tanaka", quote: "From sampling to DDP delivery, the export team handled everything. Documentation was flawless.", name: "Y. Tanaka", role: "Retail Chain · Japan", order: 3 },
];

function toPortableText(paragraphs: string[]) {
  return paragraphs.map((text) => ({
    _type: "block" as const,
    _key: crypto.randomUUID(),
    style: "normal" as const,
    children: [{ _type: "span" as const, _key: crypto.randomUUID(), text }],
  }));
}

async function seed() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("SANITY_API_WRITE_TOKEN is not set in .env.local — cannot write to Sanity. See .env.local.example.");
    process.exit(1);
  }

  // Imported dynamically (after dotenv has populated process.env) so the
  // Sanity client's module-level env var reads pick up .env.local — a
  // static top-level import would be hoisted above the config() call.
  const { writeClient } = await import("../src/sanity/client");

  console.log("Seeding categories...");
  for (const c of categories) {
    await writeClient.createOrReplace({
      _id: `category-${c.id}`,
      _type: "category",
      name: c.name,
      slug: { _type: "slug", current: c.id },
      blurb: c.blurb,
      order: c.order,
    });
  }

  console.log("Seeding products...");
  for (const p of products) {
    await writeClient.createOrReplace({
      _id: `product-${p.id}`,
      _type: "product",
      name: p.name,
      slug: { _type: "slug", current: p.id },
      category: { _type: "reference", _ref: `category-${p.categoryId}` },
      tag: p.tag,
      moq: p.moq,
      priceRange: p.priceRange,
      sizes: p.sizes,
      description: p.description,
      featured: p.featured,
      order: p.order,
    });
  }

  console.log("Seeding blog posts...");
  for (const post of posts) {
    await writeClient.createOrReplace({
      _id: `post-${post.id}`,
      _type: "blogPost",
      title: post.title,
      slug: { _type: "slug", current: post.id },
      category: post.category,
      publishedAt: post.publishedAt,
      excerpt: post.excerpt,
      body: toPortableText(post.body),
      author: "Kohsar Export Team",
    });
  }

  console.log("Seeding FAQs...");
  for (const f of faqs) {
    await writeClient.createOrReplace({
      _id: `faq-${f.id}`,
      _type: "faq",
      question: f.question,
      answer: f.answer,
      category: f.category,
      order: f.order,
    });
  }

  console.log("Seeding certifications...");
  for (const c of certifications) {
    await writeClient.createOrReplace({
      _id: `cert-${c.id}`,
      _type: "certification",
      name: c.name,
      issuingBody: c.issuingBody,
      scope: c.scope,
      year: c.year,
      shortDesc: c.shortDesc,
      order: c.order,
    });
  }

  console.log("Seeding testimonials...");
  for (const t of testimonials) {
    await writeClient.createOrReplace({
      _id: `testimonial-${t.id}`,
      _type: "testimonial",
      quote: t.quote,
      name: t.name,
      role: t.role,
      order: t.order,
    });
  }

  console.log("Seeding site settings...");
  await writeClient.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    companyName: "Kohsar Saltworks",
    legalName: "Kohsar Saltworks (Pvt) Ltd.",
    tagline: "Manufacturer · Exporter · OEM Partner",
    email: "export@kohsarsaltworks.com",
    phone: "+92 300 000 0000",
    whatsappNumber: "920000000000",
    factoryAddress: "Khewra Industrial Zone, Jhelum, Punjab, Pakistan",
    hours: "Mon–Sat, 9:00–18:00 PKT",
  });

  console.log("Done. Add product/category/post images in Sanity Studio at /studio.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
