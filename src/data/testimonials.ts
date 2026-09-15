export interface Testimonial {
  name: string;
  location: string;
  project: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Silver Spring, MD",
    project: "Kitchen remodel",
    quote:
      "FAHMS tore out our dated kitchen and rebuilt it exactly how we imagined. Clear communication, tidy crew, and they finished right on schedule. Couldn't be happier.",
    rating: 5,
  },
  {
    name: "David & Priya K.",
    location: "Columbia, MD",
    project: "Rear addition",
    quote:
      "We added a full family room and new kitchen. The team handled permits, inspections and every detail. Quality of workmanship was exceptional throughout.",
    rating: 5,
  },
  {
    name: "Michael T.",
    location: "Elkridge, MD",
    project: "New custom home",
    quote:
      "Building a custom home is daunting, but FAHMS made it feel effortless. On budget, on time, and the finished house exceeded what we'd hoped for.",
    rating: 5,
  },
  {
    name: "Jennifer R.",
    location: "Greenbelt, MD",
    project: "Deck & fence",
    quote:
      "Our new composite deck is gorgeous and rock solid. They came when they said, kept the site clean daily, and the price matched the quote. Highly recommend.",
    rating: 5,
  },
];

export const trustStats = [
  { value: "20+", label: "Years in construction" },
  { value: "350+", label: "Projects completed" },
  { value: "5.0", label: "Average client rating" },
  { value: "MHIC", label: "#168360 Licensed & Insured" },
];
