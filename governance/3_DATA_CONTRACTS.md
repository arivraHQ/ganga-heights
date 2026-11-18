# 3. DATA CONTRACTS & SINGLE SOURCE OF TRUTH (SSOT)

**Project:** Ganga Heights by Arohan Realty (Kanpur)  
**File Location:** `/content/site.ts`  
**Status:** Governance Specification

---

## 1. Developer & Entity Metadata (NAP)
```typescript
export interface DeveloperProfile {
  name: "Arohan Realty";
  brandWordmark: "AROHAN";
  headquarters: "Civil Lines, Kanpur, Uttar Pradesh 208001";
  experienceYears: 12;
  deliveredSqFt: "2.4M sq ft";
  familiesHoused: "480+";
  phone: "+91 90000 00000";
  whatsapp: "+91 90000 00000";
  email: "concierge@arohanrealty.com";
  salesOfficeHours: "Monday – Sunday, 09:30 AM – 06:30 PM IST";
  reraRegistration: "UPRERAAGT12894 / PRJ-KAN-2023-8821";
}
```

---

## 2. Projects Data Contract
```typescript
export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  status: "Ongoing" | "Ready to Move" | "Plots Open";
  priceStartingFrom: string; // Indian INR format (e.g. "Rs. 62 Lakh onwards")
  configuration: string;     // e.g. "2 & 3 BHK Residences"
  location: string;          // e.g. "VIP Road, Kanpur"
  carpetAreaRange: string;   // e.g. "1,140 – 1,820 sq ft"
  imagePlaceholder: {
    src: string;
    alt: string;
    brief: string;           // Exact architectural photography brief
  };
  highlights: string[];
}
```

### The 3 Master Projects:
1. **Ganga Heights**
   - Type: High-Rise Residential Tower
   - Status: "Ongoing"
   - Price: "Rs. 62 Lakh onwards"
   - Configuration: "2 & 3 BHK Residences"
   - Location: "Ganga Barrage Link Road, Kanpur"
   - Image Brief: *"Monolithic limestone residential tower at golden hour, low angle looking up, dramatic clean sky, deep balcony recesses, no people, authentic north Indian contemporary brick & stone texture."*
2. **Arohan Villas**
   - Type: Gated Luxury Enclave
   - Status: "Ready to Move"
   - Price: "Rs. 1.85 Cr onwards"
   - Configuration: "4 BHK Private Courtyard Villas"
   - Location: "Civil Lines Extended, Kanpur"
   - Image Brief: *"Low-slung minimalist brick and limestone pavilion villa, private water basin reflecting morning light, mature trees, architectural symmetry, no cars, authentic quiet luxury."*
3. **Arohan Plots**
   - Type: Master-Planned Residential Land
   - Status: "Plots Open"
   - Price: "Rs. 18 – 45 Lakh"
   - Configuration: "120 – 300 sq. yard Freehold Plots"
   - Location: "Bithoor Corridor, Kanpur"
   - Image Brief: *"Wide paved estate boulevard lined with royal palm trees, clean stone curbstones, subtle low-voltage landscape lighting, clear dusk sky, peaceful suburban sanctuary."*

---

## 3. Unit Explorer Contract (8 Units)
```typescript
export interface UnitListing {
  id: string;
  unitCode: string;
  project: "Ganga Heights" | "Arohan Villas" | "Arohan Plots";
  bhk: "2 BHK" | "3 BHK" | "4 BHK" | "Plot";
  areaSqFt: number;
  floor: string;
  facing: "North-East" | "East" | "River Ganga View" | "Park Facing";
  priceNumeric: number;
  priceFormatted: string;
  status: "Available" | "Reserved";
}
```

---

## 4. Architectural Floor Plans Contract
```typescript
export interface FloorPlan {
  bhk: "2 BHK" | "3 BHK" | "4 BHK Villa";
  superBuiltUp: string;
  carpetArea: string;
  balconies: number;
  bathrooms: number;
  features: string[];
  svgDiagramId: string;
}
```

---

## 5. Amenities Contract (Interactive Sticky Left-Right Sync)
```typescript
export interface AmenityItem {
  id: string;
  title: string;
  category: "Wellness" | "Architecture" | "Security" | "Sustainability";
  description: string;
  spec: string;
  imagePlaceholder: {
    src: string;
    alt: string;
    brief: string;
  };
}
```
*List includes: 1. The Limestone Clubhouse, 2. Forest-Canopy Children's Play Area, 3. Panoramic Glass Gymnasium, 4. 24x7 Multi-Tiered Perimeter Security, 5. Dedicated EV Fast-Charging Bays, 6. 100% Uninterrupted Power Backup.*

---

## 6. Strategic Location Distances & SVG Map
```typescript
export interface LocationDistance {
  landmark: string;
  distance: string;
  driveTime: string;
  category: "Transit" | "Retail" | "Healthcare" | "Education";
}
```
- Kanpur Central Railway Station: 6.0 km (14 mins)
- Mall Road Commercial District: 4.2 km (9 mins)
- DPS & St. Aloysius Schools: 1.5 km (4 mins)
- Regency Multi-Speciality Hospital: 2.1 km (5 mins)
- Ganga Barrage Waterfront Promenade: 800 m (2 mins)

---

## 7. Homeowner Stories & Testimonials Contract
```typescript
export interface TestimonialStory {
  residentName: string;
  designation: string;
  unitPurchased: string;
  handoverYear: number;
  quote: string;
  curatorNote: string;
}
```

---

## 8. Clarifications & FAQ Contract (6 Real Kanpur Builder Inquiries)
1. **RERA Compliance & Title Deed:** Clear registration number and escrow account details.
2. **Construction-Linked Payment Schedule:** Milestone breakdown (10% booking, 10% foundation, etc.).
3. **Pre-Approved Banking Partners:** SBI, HDFC Bank, ICICI Bank, and Bank of Baroda.
4. **Possession Timeline & Penalty Clause:** Contractual delivery commitments and statutory interest.
5. **Post-Handover Maintenance Facility:** Arohan Estate Management 3-year warranty.
6. **Stamp Duty & Kanpur Registry Protocol:** UP state stamp duty rates and legal facilitation.
