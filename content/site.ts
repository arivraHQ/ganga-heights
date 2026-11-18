export interface Project {
  id: string;
  name: string;
  tagline: string;
  type: string;
  status: "Ongoing" | "Ready to Move" | "Plots Open";
  priceFrom: string;
  configuration: string;
  carpetArea: string;
  location: string;
  description: string;
  image: string;
  imageBrief: string;
  highlights: string[];
}

export interface Unit {
  id: string;
  code: string;
  project: string;
  bhk: string;
  carpetAreaSqFt: number;
  superAreaSqFt: number;
  floor: string;
  facing: string;
  price: string;
  priceNumericLakhs: number;
  status: "Available" | "Reserved";
}

export interface FloorPlanItem {
  id: string;
  title: string;
  bhk: string;
  carpetArea: string;
  superArea: string;
  balconies: string;
  facing: string;
  svgType: "2bhk" | "3bhk" | "4bhk";
  features: string[];
}

export interface Amenity {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  spec: string;
  image: string;
  imageBrief: string;
}

export interface LocationItem {
  name: string;
  category: "Connectivity" | "Commerce" | "Education" | "Healthcare";
  distance: string;
  time: string;
}

export interface Testimonial {
  name: string;
  profession: string;
  unit: string;
  year: string;
  comment: string;
  aspect: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const SITE_DATA = {
  brand: {
    name: "Ganga Heights",
    developer: "Arohan Realty",
    wordmark: "AROHAN REALTY",
    submark: "ARCHITECTURAL HOUSING — KANPUR",
    tagline: "Homes designed around the way you live.",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80",
    reraNumber: "UPRERAAGT12894 / PRJ-KAN-2023-8821",
    phone: "+91 90000 00000",
    phoneDisplay: "+91 90000 00000",
    whatsappUrl: "https://wa.me/919000000000?text=Hello%20Arohan%20Realty,%20I%20would%20like%20to%20inquire%20about%20Ganga%20Heights%20site%20visit.",
    email: "enquiry@arohanrealty.com",
    address: "Arohan House, 14/82 Civil Lines, Kanpur, Uttar Pradesh 208001",
    siteOffice: "Site Office: Ganga Barrage Corridor, Sector 4, Kanpur",
    hours: "Monday through Sunday, 09:30 AM to 06:30 PM",
  },

  navigation: [
    { name: "Projects", href: "#projects" },
    { name: "Listing Explorer", href: "#explorer" },
    { name: "Floor Plans", href: "#plans" },
    { name: "Amenities", href: "#amenities" },
    { name: "Location", href: "#location" },
    { name: "Calculator", href: "#calculator" },
    { name: "Contact", href: "#contact" },
  ],

  metrics: [
    { value: 3, suffix: "", label: "Kanpur Developments", description: "Bespoke residential enclaves" },
    { value: 480, suffix: "+", label: "Resident Families", description: "Residing across delivered enclaves" },
    { value: 12, suffix: " Yrs", label: "Structural Heritage", description: "Continuous regional building pedigree" },
    { value: 2.4, suffix: "M", label: "Sq Ft Constructed", description: "Delivered on schedule with clear titles" },
  ],

  projects: [
    {
      id: "ganga-heights",
      name: "Ganga Heights",
      tagline: "High-volume riverfront residences overlooking the holy Ganga corridor.",
      type: "Apartments",
      status: "Ongoing",
      priceFrom: "Rs. 62 Lakh onwards",
      configuration: "2 & 3 BHK Apartments",
      carpetArea: "1,140 – 1,780 sq ft",
      location: "Ganga Barrage Link Road, Kanpur",
      description: "Cast in monolithic limestone-toned concrete with deep recessed verandas, cross-ventilation shafts, and floor-to-ceiling fenestration framing the river horizon.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      imageBrief: "residential tower at golden hour, low angle, clean sky, no people, Indian architecture, textured limestone finish, deep shadow recesses",
      highlights: ["Cross-ventilated floor plates", "8-foot recessed shaded verandas", "Low-density dual-lift cores"],
    },
    {
      id: "arohan-villas",
      name: "Arohan Villas",
      tagline: "Individual courtyard residences structured around private garden atriums.",
      type: "Villas",
      status: "Ready to Move",
      priceFrom: "Rs. 1.85 Cr onwards",
      configuration: "4 BHK Courtyard Villas",
      carpetArea: "2,840 sq ft (plot 310 sq yd)",
      location: "Civil Lines Extension, Kanpur",
      description: "Low-slung rectilinear brickwork paired with fluted stone pillars. Each residence features a private plunge basin, personal servant quarters, and internal skylight courts.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      imageBrief: "modern brick and stone luxury courtyard villa, morning sunlight, water basin reflection, manicured native greenery, tranquil, no people",
      highlights: ["Internal open-to-sky courtyard", "Dual covered private car bays", "Ready for immediate registry & possession"],
    },
    {
      id: "arohan-plots",
      name: "Arohan Plots",
      tagline: "Demarcated freehold residential land parcels with master infrastructure ready.",
      type: "Plots",
      status: "Plots Open",
      priceFrom: "Rs. 18 – 45 Lakh",
      configuration: "120 – 300 sq. yd Land Parcels",
      carpetArea: "1,080 – 2,700 sq ft land footprint",
      location: "Bithoor Heritage Corridor, Kanpur",
      description: "Freehold residential plots within a secured perimeter wall. Complete with 40-foot wide asphalt roads, concealed storm drainage, underground cabling, and landscaped avenues.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      imageBrief: "wide paved residential avenue, limestone boundary markers, mature neem trees, dusk ambient lighting, architectural precision, no people",
      highlights: ["Clear freehold title with prompt registry", "Underground utility conduits installed", "Gated perimeter with dedicated guardhouse"],
    },
  ] as Project[],

  units: [
    { id: "u-101", code: "GH-T1-204", project: "Ganga Heights", bhk: "2 BHK", carpetAreaSqFt: 1140, superAreaSqFt: 1425, floor: "2nd Floor", facing: "East / Morning Sun", price: "Rs. 62.5 Lakh", priceNumericLakhs: 62.5, status: "Available" },
    { id: "u-102", code: "GH-T1-502", project: "Ganga Heights", bhk: "2 BHK", carpetAreaSqFt: 1180, superAreaSqFt: 1475, floor: "5th Floor", facing: "North-East / Garden", price: "Rs. 64.9 Lakh", priceNumericLakhs: 64.9, status: "Available" },
    { id: "u-103", code: "GH-T2-701", project: "Ganga Heights", bhk: "3 BHK", carpetAreaSqFt: 1560, superAreaSqFt: 1950, floor: "7th Floor", facing: "River Ganga View", price: "Rs. 86.0 Lakh", priceNumericLakhs: 86.0, status: "Available" },
    { id: "u-104", code: "GH-T2-1104", project: "Ganga Heights", bhk: "3 BHK", carpetAreaSqFt: 1780, superAreaSqFt: 2225, floor: "11th Floor (Pent Corner)", facing: "River Ganga Panoramic", price: "Rs. 98.5 Lakh", priceNumericLakhs: 98.5, status: "Reserved" },
    { id: "u-105", code: "AV-V08", project: "Arohan Villas", bhk: "4 BHK Villa", carpetAreaSqFt: 2840, superAreaSqFt: 3550, floor: "Ground + 1 Floor", facing: "North / Vastu Aligned", price: "Rs. 1.85 Cr", priceNumericLakhs: 185.0, status: "Available" },
    { id: "u-106", code: "AV-V14", project: "Arohan Villas", bhk: "4 BHK Villa", carpetAreaSqFt: 3120, superAreaSqFt: 3900, floor: "Ground + 1 + Terrace", facing: "East / Private Lawn", price: "Rs. 2.10 Cr", priceNumericLakhs: 210.0, status: "Available" },
    { id: "u-107", code: "AP-P42", project: "Arohan Plots", bhk: "Plot 150 yd", carpetAreaSqFt: 1350, superAreaSqFt: 1350, floor: "Plot Ground", facing: "Park Frontage", price: "Rs. 22.5 Lakh", priceNumericLakhs: 22.5, status: "Available" },
    { id: "u-108", code: "AP-P88", project: "Arohan Plots", bhk: "Plot 250 yd", carpetAreaSqFt: 2250, superAreaSqFt: 2250, floor: "Corner Plot Ground", facing: "Dual 40-ft Road Access", price: "Rs. 38.0 Lakh", priceNumericLakhs: 38.0, status: "Available" },
  ] as Unit[],

  floorPlans: [
    {
      id: "plan-2bhk",
      title: "Type A — 2 Bedroom Sanctuary",
      bhk: "2 BHK",
      carpetArea: "1,140 sq ft",
      superArea: "1,425 sq ft",
      balconies: "2 Wide Shaded Decks",
      facing: "East / Morning Light",
      svgType: "2bhk",
      features: [
        "Foyer entry maintaining private living room acoustic separation",
        "Dual cross-ventilated master bedroom with corner window seat",
        "Utility drying balcony adjoining kitchen enclosure",
        "8-foot deep sunset deck off living pavilion",
      ],
    },
    {
      id: "plan-3bhk",
      title: "Type B — 3 Bedroom Grand Residence",
      bhk: "3 BHK",
      carpetArea: "1,560 sq ft",
      superArea: "1,950 sq ft",
      balconies: "3 Architectural Balconies",
      facing: "River Ganga North-East",
      svgType: "3bhk",
      features: [
        "Formal living and dining salon opening into 22-foot river vista gallery",
        "En-suite master bath with dry/wet partition and dressing vestibule",
        "Staff bath and utility annex with separate service entry corridor",
        "Vastu-compliant kitchen placed in southeastern quadrant",
      ],
    },
    {
      id: "plan-4bhk",
      title: "Type C — 4 Bedroom Courtyard Villa",
      bhk: "4 BHK Villa",
      carpetArea: "2,840 sq ft",
      superArea: "3,550 sq ft",
      balconies: "Central Atrium + Terrace",
      facing: "Vastu Aligned North-East",
      svgType: "4bhk",
      features: [
        "Double-height light atrium filtering natural daylighting into core",
        "Ground-floor senior suite with direct courtyard step-out access",
        "Private rooftop tea pavilion and stargazing terrace",
        "Enclosed two-vehicle portico with direct butler access",
      ],
    },
  ] as FloorPlanItem[],

  amenities: [
    {
      id: "clubhouse",
      number: "01",
      title: "The Limestone Pavilion",
      category: "Social & Gathering",
      description: "An understated 8,000 sq ft clubhouse built with local sandstone masonry, housing a quiet library, temperature-tempered lap pool, and private conference salon.",
      spec: "8,000 sq ft footprint • Natural limestone cladding • Filtered acoustic lining",
      image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
      imageBrief: "architectural pavilion interior with limestone columns, filtered natural sunlight, modern quiet library lounge, timber furniture, no people",
    },
    {
      id: "security",
      number: "02",
      title: "Multi-Tiered Access Security",
      category: "Safety & Privacy",
      description: "Understated perimeter surveillance featuring optical barrier gates, ANPR vehicle identification, and continuous trained personnel round-the-clock.",
      spec: "24x7 biometric & ANPR entry • 64-channel thermal perimeter • Manned gatehouse",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      imageBrief: "minimalist architectural gatehouse, brushed metal barriers, subtle ground uplighting, stone wall texture, dusk",
    },
    {
      id: "gym",
      number: "03",
      title: "Panoramic Glass Gymnasium",
      category: "Health & Fitness",
      description: "Air-purified fitness suite with floor-to-ceiling glass fenestration looking directly into mature bamboo groves, equipped with biomechanical strength systems.",
      spec: "HEPA air filtration • Technogym biomechanical gear • Dedicated yoga deck",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      imageBrief: "minimalist fitness studio with oak flooring, floor-to-ceiling glass looking onto green bamboo courtyard, warm indirect cove lighting",
    },
    {
      id: "play",
      number: "04",
      title: "Native Canopy Play Space",
      category: "Family & Nature",
      description: "Childhood outdoor play architecture crafted from untreated teak, stone mounds, and sand pits under preserved native shade trees, free of plastic apparatus.",
      spec: "Zero-plastic construction • Impact-tested cedar bark base • Native neem canopy",
      image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80",
      imageBrief: "architectural natural timber playground, soft morning light, green lawn, stone stepping stones, tasteful and quiet",
    },
    {
      id: "power",
      number: "05",
      title: "100% Uninterrupted Power Backup",
      category: "Infrastructure",
      description: "Sound-attenuated dual generator infrastructure guaranteeing automatic sub-second changeover for all residential appliances, air conditioners, and lifts.",
      spec: "Acoustically damped diesel gensets • Sub-second sync ATS • Full-load coverage",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      imageBrief: "clean industrial architectural enclosure, neat conduits, brushed aluminum louvers, architectural landscape screening",
    },
    {
      id: "ev",
      number: "06",
      title: "Dedicated EV Charging Bays",
      category: "Mobility",
      description: "Level-2 and fast DC charging points situated within basement parking zones, mapped to individual residential power meters with surge protection.",
      spec: "22kW Type-2 AC points • Individual digital sub-metering • Fire suppression canopy",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
      imageBrief: "subterranean parking bay with architectural concrete columns, subtle brass signage, clean EV charging post, immaculate floor coating",
    },
  ] as Amenity[],

  locationDistances: [
    { name: "Kanpur Central Railway Station", category: "Connectivity", distance: "6.0 km", time: "14 mins" },
    { name: "Mall Road Commercial District", category: "Commerce", distance: "4.2 km", time: "9 mins" },
    { name: "Regency Multi-Speciality Hospital", category: "Healthcare", distance: "2.1 km", time: "5 mins" },
    { name: "Delhi Public School & St. Aloysius", category: "Education", distance: "1.5 km", time: "4 mins" },
    { name: "Ganga Barrage Promenade", category: "Connectivity", distance: "800 m", time: "2 mins" },
    { name: "Chakeri Airport (Kanpur)", category: "Connectivity", distance: "14.5 km", time: "26 mins" },
  ] as LocationItem[],

  testimonials: [
    {
      name: "Dr. Alok Srivastava",
      profession: "Senior Consultant Cardiologist",
      unit: "Unit GH-T2-901, Ganga Heights",
      year: "Booked 2023",
      comment: "Arohan’s insistence on structural integrity is evident the moment you step into the site. The natural cross-ventilation in the 3 BHK layout keeps the living rooms naturally cool even during Kanpur’s harsh June heat.",
      aspect: "Thermal & Structural Comfort",
    },
    {
      name: "Meenakshi Agarwal",
      profession: "Industrialist & Textile Exporter",
      unit: "Villa 12, Arohan Villas",
      year: "Possession 2024",
      comment: "We looked for over two years in Civil Lines and Swaroop Nagar for a residence that felt calm and uncluttered. The internal courtyard of Arohan Villas gives our family total privacy without sacrificing natural light.",
      aspect: "Architectural Privacy",
    },
    {
      name: "Vikramaditya Shukla",
      profession: "High Court Advocate",
      unit: "Plot AP-18, Arohan Plots",
      year: "Registry 2023",
      comment: "In Kanpur, clean land documentation is rare. Arohan Realty had all RERA numbers, municipal approvals, and revenue clearances ready for inspection on day one. Registry was completed within three weeks of booking.",
      aspect: "Title Deed Transparency",
    },
  ] as Testimonial[],

  faqs: [
    {
      category: "Legal & Regulatory",
      question: "Is Ganga Heights fully approved under UP RERA?",
      answer: "Yes. Ganga Heights is formally registered under Uttar Pradesh RERA with registration number UPRERAAGT12894 / PRJ-KAN-2023-8821. All project sanctions, structural drawings, and quarterly escrow account filings are publicly inspectable on the official UP RERA web portal.",
    },
    {
      category: "Financial Structure",
      question: "What is the construction-linked payment schedule?",
      answer: "Payments are pegged strictly to verified site milestones: 10% upon booking, 10% on completion of foundation plinth, and progressive 7.5% tranches on casting of each individual floor slab. The remaining 5% is payable only on issuance of the municipal completion certificate and formal handover.",
    },
    {
      category: "Home Loans",
      question: "Which banking institutions have pre-approved the project?",
      answer: "Formal project approvals and clear-title certifications have been issued by State Bank of India (SBI), HDFC Bank, ICICI Bank, and Bank of Baroda. Dedicated bank relationship managers are stationed at our site office to facilitate loan sanction within 5 to 7 working days.",
    },
    {
      category: "Possession Timeline",
      question: "What is the contractually committed possession timeline?",
      answer: "Ganga Heights Tower 1 is scheduled for handover in December 2025, with Tower 2 following in June 2026. Arohan Villas is ready to move immediately, with instant registry and keys handover upon full clearance. Arohan Plots are ready for boundary construction today.",
    },
    {
      category: "Estate Maintenance",
      question: "How will the estate be managed after handover?",
      answer: "Arohan Estate Management Services maintains the property for the first 36 months following handover at nominal contractual rates. Thereafter, operations and reserve sinking funds are formally transferred to the registered Residents' Welfare Association (RWA).",
    },
    {
      category: "Registry & Stamp Duty",
      question: "What are the applicable stamp duty and registration charges in Kanpur?",
      answer: "As per current Uttar Pradesh Stamp and Registration department norms, stamp duty is payable at 7% of circle rate or agreement value (with a 1% rebate applicable when registered in a woman's name), along with 1% municipal registration fees. Our legal desk manages all stamp paperwork.",
    },
  ] as FAQItem[],
};
