import type { MetaFunction } from '@remix-run/node'
import Card from '~/components/Card'
import Footer from '~/components/Footer'

export const meta: MetaFunction = () => {
  return [{ title: 'Four Card Feature Section' }, { name: 'description', content: 'A Challenge from Fronendmentor' }]
}

export default function Index() {
  return (
    <main className=" grid min-h-screen place-items-center bg-very-light-gray px-10 py-20 text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-extralight tracking-[0.1044rem] text-very-dark-blue lg:text-4xl lg:tracking-[0.01563]">
          Reliable, efficient delivery
        </h1>
        <h2 className="mb-[0.81rem] text-2xl font-semibold tracking-[0.1044rem] text-very-dark-blue lg:text-4xl lg:tracking-[0.01563]">
          Powered by Technology
        </h2>
        <p className="mb-[4.75rem] max-w-lg text-[0.9375rem] leading-[1.5625rem] tracking-[0.0065rem] text-very-dark-blue opacity-50">
          Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is
          successful
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card
            title="Supervisor"
            text="Monitors activity to identify project roadblocks"
            imgSrc="/images/icon-supervisor.svg"
            color="#44D3D2"
            className="lg:row-span-2"
          />
          <Card
            title="Team Builder"
            text="Scans our talent network to create the optimal team for your project"
            imgSrc="/images/icon-karma.svg"
            color="#EA5454"
            className=""
          />
          <Card
            title="Karma"
            text="Regularly evaluates our talent to ensure quality"
            imgSrc="/images/icon-team-builder.svg"
            color="#FCAE4A"
            className=""
          />
          <Card
            title="Calculator"
            text="Uses data from past projects to provide better delivery estimates"
            imgSrc="/images/icon-calculator.svg"
            color="#549EF2"
            className="lg:col-start-3 lg:row-span-2 lg:row-start-1"
          />
        </div>
        <Footer />
      </div>
    </main>
  )
}
