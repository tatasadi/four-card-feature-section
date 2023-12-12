import type { MetaFunction } from "@remix-run/node"
import Card from "~/components/Card"

export const meta: MetaFunction = () => {
  return [
    { title: "Four Card Feature Section" },
    { name: "description", content: "A Challenge from Fronendmentor" },
  ]
}

const cards = [
  {
    title: "Supervisor",
    text: "Monitors activity to identify project roadblocks",
    imgSrc: "/images/icon-supervisor.svg",
    color: "#44D3D2",
  },
  {
    title: "Team Builder",
    text: "Scans our talent network to create the optimal team for your project",
    imgSrc: "/images/icon-team-builder.svg",
    color: "#EA5454",
  },
  {
    title: "Karma",
    text: "Regularly evaluates our talent to ensure quality",
    imgSrc: "/images/icon-karma.svg",
    color: "#FCAE4A",
  },
  {
    title: "Calculator",
    text: "Uses data from past projects to provide better delivery estimates",
    imgSrc: "/images/icon-calculator.svg",
    color: "#549EF2",
  },
]

export default function Index() {
  return (
    <main className="bg-very-light-gray min-h-screen flex items-center justify-center px-10 py-20 text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-extralight tracking-[0.1044rem] text-very-dark-blue">
          Reliable, efficient delivery
        </h1>
        <h2 className="text-2xl font-semibold tracking-[0.1044rem] text-very-dark-blue mb-[0.81rem]">
          Powered by Technology
        </h2>
        <p className="text-[0.9375rem] leading-[1.5625rem] tracking-[0.0065rem] text-very-dark-blue mb-[4.75rem] opacity-50">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </main>
  )
}
