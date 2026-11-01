export interface GalleryItem {
  id: string;
  title: string;
  src: string;
  caption: string;
  location: string;
  year: string;
  category?: string;
}

export const galleryPhotos: GalleryItem[] = [
  {
    id: "photo-1",
    title: "Sea of Clouds & Mountain Inversion",
    category: "Mountains",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=85",
    caption: "A vast blanket of low-lying stratus clouds drowning the alpine valleys at dawn, leaving solitary jagged peaks breaking the horizon.",
    location: "Western Mountain Ridges",
    year: "2026",
  },
  {
    id: "photo-2",
    title: "Towering Golden Cumulonimbus",
    category: "Atmosphere",
    src: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1600&q=85",
    caption: "Gigantic vertical convective thunderheads catching the last amber rays of sunlight before dusk.",
    location: "Plains Horizon",
    year: "2026",
  },
  {
    id: "photo-3",
    title: "Feathered Cirrus Whispers",
    category: "Skies",
    src: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=1600&q=85",
    caption: "Ice-crystal strands drifting across the high troposphere, producing faint ethereal halos around the sun.",
    location: "Coastal Ridge Sky",
    year: "2026",
  },
  {
    id: "photo-4",
    title: "Altocumulus Mackerel Sky",
    category: "Waves",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    caption: "Rippling convection cells forming a textured wave pattern across the afternoon horizon.",
    location: "Plateau Overlook",
    year: "2026",
  },
  {
    id: "photo-5",
    title: "Dark Front Shelf & Thunderhead",
    category: "Storms",
    src: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=1600&q=85",
    caption: "A violent shelf cloud heralding high-velocity downdrafts and electrical activity across the rolling hills.",
    location: "Southern Valley Pass",
    year: "2026",
  },
  {
    id: "photo-6",
    title: "Sunset Cloud Inversion & Twilight Peaks",
    category: "Twilight",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    caption: "Dense fog bank trapped in thermal inversion under calm nocturnal atmospheric gradients, lit by fading magenta afterglow.",
    location: "Summit Lookout",
    year: "2026",
  },
];

export * from "./cloudData";
