export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  short: string;
  description: string;
  image: string;
}

export const services: ServiceItem[] = [
  {
    id: "general-contractor",
    icon: "ri-building-2-line",
    title: "General Contractor",
    short: "Full project management from permit to punch list.",
    description:
      "As your licensed general contractor, FAHMS coordinates every trade, handles permits and inspections, and keeps the whole build on schedule and on budget — one point of contact from start to finish.",
    image:
      "https://readdy.ai/api/search-image?query=A%20contractor%20in%20a%20hard%20hat%20and%20work%20vest%20reviewing%20blueprints%20on%20a%20clipboard%20inside%20a%20bright%20framed%20house%20under%20construction%2C%20warm%20natural%20light%2C%20realistic%20editorial%20photography%2C%20clean%20wood%20studs&width=720&height=560&seq=svc-general-01&orientation=landscape",
  },
  {
    id: "build-houses",
    icon: "ri-home-5-line",
    title: "Build Houses",
    short: "Custom new builds crafted to fit your land and lifestyle.",
    description:
      "From ground-up custom homes to spec builds, we deliver solid foundations, thoughtful layouts and quality finishes — a home built to last, designed around how you actually live.",
    image:
      "https://readdy.ai/api/search-image?query=A%20modern%20two-storey%20custom%20home%20exterior%20with%20warm%20stone%20and%20wood%20cladding%20and%20a%20green%20lawn%20beneath%20a%20bright%20clear%20blue%20sky%2C%20sunny%20daytime%20natural%20light%2C%20realistic%20architectural%20photography&width=720&height=560&seq=svc-build-02&orientation=landscape&nocache=true",
  },
  {
    id: "extend-houses",
    icon: "ri-arrow-right-up-line",
    title: "Extend Houses",
    short: "Open up more space with a well-built extension.",
    description:
      "Whether it's a rear extension, side bump-out or a two-storey addition, we open up your home with space that feels natural — strong structure, seamless flow and bright, usable rooms.",
    image:
      "https://readdy.ai/api/search-image?query=A%20beautiful%20single-storey%20rear%20extension%20with%20large%20glass%20sliding%20doors%20opening%20onto%20a%20sunny%20patio%20garden%20beneath%20a%20bright%20clear%20blue%20sky%2C%20clean%20daytime%20natural%20light%2C%20realistic%20architectural%20photography&width=720&height=560&seq=svc-extend-03&orientation=landscape&nocache=true",
  },
  {
    id: "fencing",
    icon: "ri-plant-line",
    title: "Fencing",
    short: "Privacy, security and boundary fences built to last.",
    description:
      "Wooden privacy, vinyl and ornamental metal fencing installed plumb and level with sturdy posts. We build fences that boost curb appeal, define boundaries and stand up to the seasons.",
    image:
      "https://readdy.ai/api/search-image?query=A%20newly%20installed%20privacy%20wood%20fence%20around%20a%20clean%20green%20back%20yard%20with%20a%20gate%2C%20warm%20soft%20sunlight%2C%20realistic%20editorial%20photography&width=720&height=560&seq=svc-fence-04&orientation=landscape",
  },
  {
    id: "deck",
    icon: "ri-tree-line",
    title: "Deck",
    short: "Durable decks for entertaining and relaxing outdoors.",
    description:
      "From classic pressure-treated to low-maintenance composite, we build decks that are solid underfoot and beautiful to look at — with railings, stairs and lighting options.",
    image:
      "https://readdy.ai/api/search-image?query=A%20spacious%20composite%20wood%20back%20deck%20with%20modern%20railings%20and%20outdoor%20furniture%2C%20soft%20morning%20sunlight%2C%20realistic%20editorial%20photography&width=720&height=560&seq=svc-deck-05&orientation=landscape",
  },
  {
    id: "kitchen",
    icon: "ri-knife-line",
    title: "Kitchen",
    short: "Kitchen remodels with quality cabinets and finishes.",
    description:
      "Full kitchen renovations — layout, cabinetry, countertops, tile, lighting and fixtures — completed by one team so the process is smooth and the result is a kitchen you love to cook in.",
    image:
      "https://readdy.ai/api/search-image?query=A%20bright%20renovated%20kitchen%20with%20white%20shaker%20cabinets%2C%20quartz%20countertops%2C%20warm%20wood%20floors%20and%20pendant%20lighting%2C%20natural%20daylight%2C%20realistic%20interior%20photography&width=720&height=560&seq=svc-kitchen-06&orientation=landscape",
  },
  {
    id: "bathroom",
    icon: "ri-drop-line",
    title: "Bathroom",
    short: "Modern bathroom upgrades, waterproofing and tile.",
    description:
      "From refresh to full gut, we handle tile, vanities, fixtures, glass and waterproofing — delivering bathrooms that feel like a spa and function flawlessly for years.",
    image:
      "https://readdy.ai/api/search-image?query=A%20modern%20renovated%20bathroom%20with%20a%20walk-in%20glass%20shower%2C%20marble%20tile%20and%20a%20freestanding%20tub%2C%20warm%20soft%20lighting%2C%20realistic%20interior%20photography&width=720&height=560&seq=svc-bath-07&orientation=landscape",
  },
  {
    id: "basement",
    icon: "ri-stairs-line",
    title: "Basement",
    short: "Turn your basement into usable living space.",
    description:
      "Finish your basement into a family room, home office, gym or rental unit — with proper framing, insulation, flooring, egress windows and finish-out for a space you'll actually use.",
    image:
      "https://readdy.ai/api/search-image?query=A%20finished%20basement%20family%20room%20with%20plush%20carpet%2C%20built-in%20shelving%2C%20warm%20recessed%20lighting%20and%20a%20cozy%20living%20area%2C%20realistic%20interior%20photography&width=720&height=560&seq=svc-basement-08&orientation=landscape",
  },
  {
    id: "patios",
    icon: "ri-home-gear-line",
    title: "Patios",
    short: "Inviting outdoor patios built for gathering and relaxing.",
    description:
      "Create an outdoor space you'll use all season with a thoughtfully built patio. We install durable concrete, paver and stone surfaces with clean grading, lasting drainage and details that complement your home.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=720&h=560&q=85",
  },
  {
    id: "hardscaping",
    icon: "ri-landscape-line",
    title: "Hardscaping",
    short: "Durable stonework and landscape features that elevate your property.",
    description:
      "From walkways and retaining walls to steps and seat walls, we shape outdoor spaces with carefully installed pavers and natural stone. Every detail is built for beauty, stability and years of use.",
    image: "/images/hardscaping-pathway.jpe",
  },
];
