/**
 * CLOUD & ATMOSPHERIC PHOTOGRAPHY DATA
 * -------------------------------------------------------------
 * Focused on cloud formations, atmospheric inversions, and skies.
 * Drop your captures in: `public/images/gallery/your-cloud.jpg`
 * -------------------------------------------------------------
 */

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
      filter: "Graduated ND 0.9",
    },
  },
  {
    id: "cloud-3",
    title: "Whispering Wind-Carved Cirrus Feathers",
    cloudType: "Cirrus",
    src: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=1600&q=85",
    caption: "Delicate ice crystal filaments swept into poetic curved brushes by jetstream winds across the upper troposphere.",
    altitude: "8,500m ASL",
    lighting: "High Noon Cyan",
    location: "Plateau Overlook",
    year: "2025",
    telemetry: {
      aperture: "f/11",
      shutter: "1/800s",
      iso: "ISO 100",
      focalLength: "35mm",
      filter: "CPL",
    },
  },
  {
    id: "cloud-4",
    title: "Violent Supercell Storm Shelf",
    cloudType: "Storm Shelf",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    caption: "A razor-sharp shelf cloud leading a severe frontal boundary, creating a breathtaking contrast between turquoise sea and brooding sky.",
    altitude: "1,200m ASL",
    lighting: "Pre-Storm Twilight",
    location: "Coastal Ridge",
    year: "2026",
    telemetry: {
      aperture: "f/4.0",
      shutter: "1/500s",
      iso: "ISO 250",
      focalLength: "24mm",
      filter: "None (Raw Light)",
    },
  },
  {
    id: "cloud-5",
    title: "Sunset Altocumulus Mackerel Sky",
    cloudType: "Altocumulus",
    src: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=1600&q=85",
    caption: "Rippling sheets of miniature cloud pillows catching radiant magenta and violet gradients during an October sunset.",
    altitude: "3,600m ASL",
    lighting: "Violet Twilight",
    location: "High Desert Overlook",
    year: "2025",
    telemetry: {
      aperture: "f/6.3",
      shutter: "1/320s",
      iso: "ISO 200",
      focalLength: "70mm",
      filter: "Soft ND4",
    },
  },
  {
    id: "cloud-6",
    title: "Suspended Mammatus Pouches",
    cloudType: "Mammatus",
    src: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1600&q=85",
    caption: "Dramatic pendulous pouches hanging beneath an anvil cloud formation, illuminated with ethereal bronze undertones.",
    altitude: "5,000m ASL",
    lighting: "Post-Storm Dusk",
    location: "Eastern Valley",
    year: "2026",
    telemetry: {
      aperture: "f/5.0",
      shutter: "1/640s",
      iso: "ISO 125",
      focalLength: "105mm",
      filter: "Circular Polarizer",
    },
  },
];
