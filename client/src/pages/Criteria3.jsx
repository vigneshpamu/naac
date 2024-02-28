import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import ThreeOneOne from '@/components/criteria-3/3-1/ThreeOneOne'
import ThreeOneTwo from '@/components/criteria-3/3-1/ThreeOneTwo'
import ThreeOneThree from '@/components/criteria-3/3-1/ThreeOneThree'
import ThreeTwoOne from '@/components/criteria-3/3-2/ThreeTwoOne'
import ThreeTwoTwo from '@/components/criteria-3/3-2/ThreeTwoTwo'
import ThreeThreeOne from '@/components/criteria-3/3-3/ThreeThreeOne'
import ThreeThreeTwo from '@/components/criteria-3/3-3/ThreeThreeTwo'
import ThreeThreeThree from '@/components/criteria-3/3-3/ThreeThreeThree'
import ThreeThreeFour from '@/components/criteria-3/3-3/ThreeThreeFour'
import ThreeFourOne from '@/components/criteria-3/3-4/ThreeFourOne'
import ThreeFourTwo from '@/components/criteria-3/3-4/ThreeFourTwo'
const Criteria3 = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-10 mt-16">
      <p className="text-4xl font-semibold text-center mb-10">Criteria 3</p>
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-3xl">3.1.1</AccordionTrigger>
            <AccordionContent>
              <ThreeOneOne />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-3xl">3.1.2</AccordionTrigger>
            <AccordionContent>
              <ThreeOneTwo />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-3xl">3.1.3</AccordionTrigger>
            <AccordionContent>
              <ThreeOneThree />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-3xl">3.2.1</AccordionTrigger>
            <AccordionContent>
              <ThreeTwoOne />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-3xl">3.2.2</AccordionTrigger>
            <AccordionContent>
              <ThreeTwoTwo />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-3xl">3.3.1</AccordionTrigger>
            <AccordionContent>
              <ThreeThreeOne />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-3xl">3.3.2</AccordionTrigger>
            <AccordionContent>
              <ThreeThreeTwo />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-3xl">3.3.3</AccordionTrigger>
            <AccordionContent>
              <ThreeThreeThree />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="text-3xl">3.3.4</AccordionTrigger>
            <AccordionContent>
              <ThreeThreeFour />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger className="text-3xl">3.4.1</AccordionTrigger>
            <AccordionContent>
              <ThreeFourOne />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger className="text-3xl">3.4.2</AccordionTrigger>
            <AccordionContent>
              <ThreeFourTwo />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Criteria3
