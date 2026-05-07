export type RoomTypeOption = "kitchen" | "bathroom" | "living room" | "bedroom" | "laundry";

export type ItemKey =
  | "flooring"
  | "wall finish"
  | "benchtop"
  | "cabinetry finish"
  | "sofa"
  | "table"
  | "chair"
  | "bed"
  | "lighting";

export type RoomItemConfig = {
  label: ItemKey;
  options: string[];
};

export const roomTypes: RoomTypeOption[] = ["kitchen", "bathroom", "living room", "bedroom", "laundry"];

export const roomConfigs: Record<RoomTypeOption, RoomItemConfig[]> = {
  kitchen: [
    { label: "flooring", options: ["Timber", "Porcelain Tile", "Dark Slate"] },
    { label: "wall finish", options: ["White Paint", "Dark Gray Paint", "Subway Tile"] },
    { label: "benchtop", options: ["Laminate", "Quartz", "Marble"] },
    { label: "cabinetry finish", options: ["Matte White", "Oak Veneer", "Charcoal"] },
    { label: "lighting", options: ["Recessed LED", "Pendant", "Track Lighting"] },
  ],
  bathroom: [
    { label: "flooring", options: ["Ceramic Tile", "Dark Stone", "Vinyl"] },
    { label: "wall finish", options: ["Gloss White Tile", "Dark Slate Tile", "Painted Plaster"] },
    { label: "cabinetry finish", options: ["Matte White", "Walnut", "Charcoal"] },
    { label: "lighting", options: ["Mirror Light", "Ceiling Spot", "Wall Sconce"] },
  ],
  "living room": [
    { label: "flooring", options: ["Timber", "Dark Timber", "Carpet"] },
    { label: "wall finish", options: ["Warm White Paint", "Dark Olive Paint", "Textured Wallpaper"] },
    { label: "sofa", options: ["Fabric Sofa", "Leather Sofa", "Sectional"] },
    { label: "table", options: ["Glass Coffee Table", "Timber Coffee Table", "Stone Coffee Table"] },
    { label: "chair", options: ["Accent Chair", "Lounge Chair", "Armless Chair"] },
    { label: "lighting", options: ["Floor Lamp", "Pendant", "Wall Washer"] },
  ],
  bedroom: [
    { label: "flooring", options: ["Carpet", "Timber", "Dark Timber"] },
    { label: "wall finish", options: ["Soft White Paint", "Dark Navy Paint", "Linen Wallpaper"] },
    { label: "bed", options: ["Upholstered Bed", "Timber Frame", "Platform Bed"] },
    { label: "table", options: ["Nightstand Pair", "Single Nightstand", "Floating Shelf"] },
    { label: "lighting", options: ["Bedside Lamp", "Pendant", "Wall Sconce"] },
  ],
  laundry: [
    { label: "flooring", options: ["Vinyl", "Porcelain Tile", "Dark Slate"] },
    { label: "wall finish", options: ["Moisture Paint", "White Tile", "Dark Gray Paint"] },
    { label: "cabinetry finish", options: ["Matte White", "Ash", "Charcoal"] },
    { label: "benchtop", options: ["Laminate", "Quartz", "Marble"] },
    { label: "lighting", options: ["Linear LED", "Ceiling Spot", "Pendant"] },
  ],
};

export const optionPrices: Record<string, number> = {
  Timber: 1200,
  "Porcelain Tile": 1500,
  "Dark Slate": 1700,
  "White Paint": 450,
  "Dark Gray Paint": 500,
  "Subway Tile": 900,
  Laminate: 800,
  Quartz: 1800,
  Marble: 2600,
  "Matte White": 700,
  "Oak Veneer": 1200,
  Charcoal: 900,
  "Recessed LED": 550,
  Pendant: 650,
  "Track Lighting": 750,
  "Ceramic Tile": 1300,
  "Dark Stone": 1900,
  Vinyl: 900,
  "Gloss White Tile": 950,
  "Dark Slate Tile": 1400,
  "Painted Plaster": 600,
  Walnut: 1300,
  "Mirror Light": 500,
  "Ceiling Spot": 520,
  "Wall Sconce": 580,
  "Dark Timber": 1400,
  Carpet: 1100,
  "Warm White Paint": 460,
  "Dark Olive Paint": 520,
  "Textured Wallpaper": 980,
  "Fabric Sofa": 2100,
  "Leather Sofa": 3200,
  Sectional: 2900,
  "Glass Coffee Table": 750,
  "Timber Coffee Table": 900,
  "Stone Coffee Table": 1300,
  "Accent Chair": 650,
  "Lounge Chair": 980,
  "Armless Chair": 520,
  "Floor Lamp": 450,
  "Wall Washer": 680,
  "Soft White Paint": 430,
  "Dark Navy Paint": 510,
  "Linen Wallpaper": 1050,
  "Upholstered Bed": 2400,
  "Timber Frame": 1800,
  "Platform Bed": 1600,
  "Nightstand Pair": 820,
  "Single Nightstand": 430,
  "Floating Shelf": 280,
  "Bedside Lamp": 360,
  "Moisture Paint": 540,
  "White Tile": 880,
  Ash: 950,
  "Linear LED": 620,
};