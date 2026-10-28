export interface CloudPhoto {
  id: string;
  title: string;
  cloudType: "Cumulonimbus" | "Cirrus" | "Altocumulus" | "Cloud Inversion" | "Storm Shelf" | "Mammatus";
  src: string;
  caption: string;
  altitude: string;
  lighting: string;
  location: string;
  year: string;
  telemetry: {
    aperture: string;
    shutter: string;
    iso: string;
    focalLength: string;
    filter: string;
  };
}

export const cloudPhotos: CloudPhoto[] = [
  {
    id: "cloud-1",
    title: "Sea of Clouds & Mountain Inversion",
    cloudType: "Cloud Inversion",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=85",
    caption: "A vast blanket of low-lying stratus clouds drowning the alpine valleys at dawn, leaving only solitary jagged peaks breaking the horizon.",
    altitude: "2,840m ASL",
    lighting: "Alpenglow Dawn",
    location: "Western Mountain Ridges",
    year: "2026",
    telemetry: {
      aperture: "f/8.0",
      shutter: "1/250s",
      iso: "ISO 100",
      focalLength: "50mm",
      filter: "Circular Polarizer (CPL)",
    },
  },
  {
    id: "cloud-2",
    title: "Towering Golden Cumulonimbus",
    cloudType: "Cumulonimbus",
    src: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1600&q=85",
    caption: "Gigantic vertical convective thunderheads catching the last amber rays of sunlight before unleashing evening monsoon squalls.",
    altitude: "4,100m ASL",
    lighting: "Golden Hour Ember",
    location: "Plains Horizon",
    year: "2026",
    telemetry: {
      aperture: "f/5.6",
      shutter: "1/1000s",
      iso: "ISO 160",
      focalLength: "85mm",
      filter: "UV Protector",
    },
  },
  {
    id: "cloud-3",
    title: "Feathered Cirrus Whispers",
    cloudType: "Cirrus",
    src: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=1600&q=85",
    caption: "Ice-crystal strands drifting across the high troposphere at sub-zero temperatures, producing faint halos around the sun.",
    altitude: "8,500m ASL",
    lighting: "Midday Solar Drift",
    location: "Coastal Ridge Sky",
    year: "2026",
    telemetry: {
      aperture: "f/11.0",
      shutter: "1/500s",
      iso: "ISO 100",
      focalLength: "24mm",
      filter: "CPL + ND4",
    },
  },
  {
    id: "cloud-4",
    title: "Altocumulus Mackerel Sky",
    cloudType: "Altocumulus",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    caption: "Rippling convection cells forming a textured wave patterns across the afternoon sky before an approaching warm front.",
    altitude: "3,600m ASL",
    lighting: "Late Afternoon Azure",
    location: "Plateau Overlook",
    year: "2026",
    telemetry: {
      aperture: "f/8.0",
      shutter: "1/640s",
      iso: "ISO 200",
      focalLength: "35mm",
      filter: "CPL",
    },
  },
  {
    id: "cloud-5",
    title: "Dark Front Shelf & Thunderhead",
    cloudType: "Storm Shelf",
    src: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=1600&q=85",
    caption: "A violent shelf cloud heralding high-velocity downdrafts and electrical activity across the rolling hills.",
    altitude: "1,200m ASL",
    lighting: "Twilight Storm Violet",
    location: "Southern Valley Pass",
    year: "2026",
    telemetry: {
      aperture: "f/4.0",
      shutter: "1/320s",
      iso: "ISO 400",
      focalLength: "28mm",
      filter: "None",
    },
  },
  {
    id: "cloud-6",
    title: "Sunset Cloud Inversion & Twilight Peaks",
    cloudType: "Cloud Inversion",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    caption: "Dense fog bank trapped in thermal inversion under calm nocturnal atmospheric gradients, lit by the fading magenta afterglow.",
    altitude: "3,100m ASL",
    lighting: "Dusk Magenta",
    location: "Summit Lookout",
    year: "2026",
    telemetry: {
      aperture: "f/7.1",
      shutter: "1/125s",
      iso: "ISO 125",
      focalLength: "70mm",
      filter: "Soft Graduated ND",
    },
  },
];
