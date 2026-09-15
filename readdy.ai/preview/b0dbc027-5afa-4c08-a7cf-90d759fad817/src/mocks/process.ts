export interface ProcessStep {
  step: string;
  icon: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    icon: "ri-chat-3-line",
    title: "Consultation",
    description:
      "We start with a free on-site walkthrough to understand your goals, budget and timeline. You get honest advice and a clear written estimate.",
  },
  {
    step: "02",
    icon: "ri-draft-line",
    title: "Design & Plan",
    description:
      "We finalize the scope, materials and details, handle permits and inspections, and lock in a realistic schedule before any work begins.",
  },
  {
    step: "03",
    icon: "ri-hammer-line",
    title: "Build & Communicate",
    description:
      "Our skilled crew gets to work with daily cleanup and regular updates. One point of contact keeps everything moving smoothly.",
  },
  {
    step: "04",
    icon: "ri-shield-check-line",
    title: "Final Walkthrough",
    description:
      "We inspect every detail with you, walk through the finished work, and don't leave until you're completely satisfied.",
  },
];