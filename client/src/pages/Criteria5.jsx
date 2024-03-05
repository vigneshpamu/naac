import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import FiveOneOne from '@/components/criteria-5/5-1/FiveOneOne'
import FiveOneTwo from '@/components/criteria-5/5-1/FiveOneTwo'
import { FiveOneThree } from '@/components/criteria-5/5-1/FiveOneThree'
import FiveOneFour from '@/components/criteria-5/5-1/FiveOneFour'
import FiveOneFive from '@/components/criteria-5/5-1/FiveOneFive'
import FiveTwoOne from '@/components/criteria-5/5-2/FiveTwoOne'
import FiveTwoTwo from '@/components/criteria-5/5-2/FiveTwoTwo'
import FiveTwoThree from '@/components/criteria-5/5-2/FiveTwoThree'
import FiveThreeOne from '@/components/criteria-5/5-3/FiveThreeOne'
import FiveThreeTwo from '@/components/criteria-5/5-3/FiveThreeTwo'
import FiveThreeThree from '@/components/criteria-5/5-3/FiveThreeThree'
import FiveFourOne from '@/components/criteria-5/5-4/FiveFourOne'
import FiveFourTwo from '@/components/criteria-5/5-4/FiveFourTwo'
const Criteria5 = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-10 mt-16">
      <p className="text-4xl font-semibold text-center mb-10">Criteria 3</p>
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-3xl">5.1.1</AccordionTrigger>
            <AccordionContent>
              <FiveOneOne />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-3xl">5.1.2</AccordionTrigger>
            <AccordionContent>
              <FiveOneTwo />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-3xl">5.1.3</AccordionTrigger>
            <AccordionContent>
              <FiveOneThree />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-3xl">5.1.4</AccordionTrigger>
            <AccordionContent>
              <FiveOneFour />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-3xl">5.1.5</AccordionTrigger>
            <AccordionContent>
              <FiveOneFive />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-3xl">5.2.1</AccordionTrigger>
            <AccordionContent>
              <FiveTwoOne />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-3xl">5.2.2</AccordionTrigger>
            <AccordionContent>
              <FiveTwoTwo />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-3xl">5.2.3</AccordionTrigger>
            <AccordionContent>
              <FiveTwoThree />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="text-3xl">5.3.1</AccordionTrigger>
            <AccordionContent>
              <FiveThreeOne />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger className="text-3xl">5.3.2</AccordionTrigger>
            <AccordionContent>
              <FiveThreeTwo />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger className="text-3xl">5.3.3</AccordionTrigger>
            <AccordionContent>
              <FiveThreeThree />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger className="text-3xl">5.4.1</AccordionTrigger>
            <AccordionContent>
              <FiveFourOne />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger className="text-3xl">5.4.2</AccordionTrigger>
            <AccordionContent>
              <FiveFourTwo />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Criteria5
