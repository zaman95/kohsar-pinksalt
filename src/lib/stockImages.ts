/**
 * Local fallback photography (public/images/stock) used until real product
 * photos are uploaded in Sanity Studio. Free-license stock (Unsplash) —
 * generic but real, not the branded gradient placeholder. Any slot with a
 * real Sanity image always takes priority over these.
 */
export const STOCK = {
  heroLampInterior: "/images/stock/hero-lamp-interior.jpg",
  lampNatural: "/images/stock/lamp-natural.jpg",
  lampGeometric: "/images/stock/lamp-geometric.jpg",
  lampBasket: "/images/stock/lamp-basket.jpg",
  lampUsbMini: "/images/stock/lamp-usb-mini.jpg",
  candleHolder: "/images/stock/candle-holder.jpg",
  saltTile: "/images/stock/salt-tile.jpg",
  edibleSalt: "/images/stock/edible-salt.jpg",
  bathSalt: "/images/stock/bath-salt.jpg",
  lickBlock: "/images/stock/lick-block.jpg",
  packaging: "/images/stock/packaging.jpg",
  workshop: "/images/stock/workshop.jpg",
  mining: "/images/stock/mining.jpg",
  warehouse: "/images/stock/warehouse.jpg",
  qualityLab: "/images/stock/quality-lab.jpg",
  exportPacking: "/images/stock/export-packing.jpg",
  containerShip: "/images/stock/container-ship.jpg",
} as const;

export const CATEGORY = {
  lampNatural: "/images/category/lamp-natural.jpg",
  lampGeometric: "/images/category/lamp-geometric.jpg",
  lampBasket: "/images/category/lamp-basket.jpg",
  lampUsbMini: "/images/category/lamp-usb-mini.jpg",
  candleHolder: "/images/category/candle-holder.jpg",
  saltTile: "/images/category/salt-tile.jpg",
  edibleSalt: "/images/category/edible-salt.jpg",
  kitchenware: "/images/category/kitchenware.jpg",
  bathSalt: "/images/category/bath-salt.jpg",
  lickBlock: "/images/category/lick-block.jpg",
} as const;

export const CATEGORY_STOCK: Record<string, string> = {
  "lamp-natural": CATEGORY.lampNatural,
  "lamp-crafted": CATEGORY.lampGeometric,
  "lamp-basket": CATEGORY.lampBasket,
  "lamp-usb": CATEGORY.lampUsbMini,
  "holder-tealight": CATEGORY.candleHolder,
  "tile-cooking": CATEGORY.saltTile,
  "edible-fine": CATEGORY.edibleSalt,
  "kitchenware": CATEGORY.kitchenware,
  "bath-crystal": CATEGORY.bathSalt,
  "lick-block": CATEGORY.lickBlock,
};

export const PRODUCT_STOCK: Record<string, string> = CATEGORY_STOCK;

export const BLOG_STOCK: Record<string, string> = {
  "himalayan-lamps-buying-guide": STOCK.lampNatural,
  "private-label-guide": STOCK.packaging,
  "container-loading-explained": STOCK.containerShip,
  "factory-tour": STOCK.workshop,
  "wholesale-buying-guide": STOCK.exportPacking,
  "sustainability-in-mining": STOCK.mining,
};
