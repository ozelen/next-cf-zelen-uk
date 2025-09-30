import * as React from 'react';
import PageHeader from '../common/PageHeader';
import { TextBlock } from '../common/TextBlock';
import { ServiceItem } from '../common/ServiceItem';
import { PageHeaderText } from "../common/PageHeaderText";

export default function Services () {
  return (
    <div>
      <PageHeader img={'bg/BE0A7135-opt.jpg'}>
        <PageHeaderText header="Discovering Technical Terrain">
          <p className="md:text-4xl text-zinc-200 italic">
            Navigating Challenges in Digital and Real Worlds
          </p>
        </PageHeaderText>
      </PageHeader>
      <TextBlock title="Architecture Consulting">
        {/*  px-2 sm:px-6 lg:px-8 py-6 */}
        <>
          <div className='flex flex-row'>
            <p className='px-2 py-10 text-xl'>
              In the vast expanse of technology, much like the unpredictable terrains of an off-road expedition, it&apos;s crucial to have a guide who understands the intricacies of the landscape. Whether you&apos;re embarking on a new project journey or optimizing existing systems, our expertise ensures you&apos;re always on the right track.
            </p>
          </div>
          <ServiceItem title='Project Discovery'>
            Delve deep into understanding the project&apos;s vision, goals, and potential challenges. It&apos;s the first step to charting the right course.
          </ServiceItem>
          <ServiceItem title='Project Assessment'>
            Comprehensive evaluation of the project&apos;s current state, identifying areas of improvement, and setting the direction for a successful journey.
          </ServiceItem>
          <ServiceItem title='Strategy Planning'>
            Crafting a roadmap that aligns with business goals, technological possibilities, and market dynamics.
          </ServiceItem>
          <ServiceItem title='Scope Estimation'>
            Detailed breakdown of tasks, timeframes, and resources needed, ensuring that the project remains within boundaries and meets expectations.
          </ServiceItem>
          <ServiceItem title='Security Audit'>
            A deep dive into your system&apos;s vulnerabilities and strengths, fortifying it against potential threats and breaches
          </ServiceItem>
        </>
      </TextBlock>
    </div>
  );
}
