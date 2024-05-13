"use client"
import { HoverEffect } from "./ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-screen bg-black relative top-[-1.5rem]  mx-auto px-8">
      <h1 className="text-white text-5xl  py-10">Features</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Afforestation and Deforestation in a Region",
    description:
      "LeafLens uses YOLO-based image analytics to monitor afforestation and deforestation by detecting changes in tree populations through satellite and aerial imagery analysis.",
    link: "",
  },
  {
    title: "WildFire Detection",
    description:
      "LeafLens rapidly identifies potential wildfires using YOLO technology to analyze thermal and visual imagery, enabling early intervention and minimizing ecological damage.",
    link: "",
  },
  {
    title: "Sky Patrol",
    description:
      "LeafLens extends its monitoring capabilities by deploying drones for real-time, high-resolution imaging of large and inaccessible areas, ensuring comprehensive coverage.",
    link: "",
  },
  {
    title: "ZooScope",
    description:
      "The model employs advanced detection algorithms to identify and enumerate wildlife within forested environments, thereby facilitating regular wildlife monitoring and management for forest authorities.",
    link: "",
  },
  {
    title: "NotifyShield",
    description:
      "When detecting unauthorized land changes or suspicious activities, the system generates concise alerts for authorities, detailing the location and nature of the observed alterations.",
    link: "",
  },
  // {
  //   title: "Microsoft",
  //   description:
  //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  //   link: "https://microsoft.com",
  // },
];
