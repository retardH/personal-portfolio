'use client';
import React from 'react';
import SectionHeader from './section-header';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionView } from '@/lib/hooks';
import { useInView } from 'react-intersection-observer';

const MyHistory = () => {
  const { ref } = useSectionView('History');

  return (
    <section id="history" ref={ref} className="scroll-mt-28">
      <div>
        <SectionHeader>My History</SectionHeader>
        <VerticalTimeline lineColor="" animate>
          {experiencesData.map((e) => {
            return <TimelineElement key={e.title} {...e} />;
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

type TimeLineElemetProps = (typeof experiencesData)[number];
const TimelineElement: React.FC<TimeLineElemetProps> = (item) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} key={item.title} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: '#f3f4f6',
          boxShadow: 'none',
          border: '1px solid rgba(0,0,0,0.05)',
          textAlign: 'left',
          padding: '1.3rem 2rem',
        }}
        contentArrowStyle={{
          borderRight: '0.4rem solid #9ca3af',
        }}
        iconStyle={{
          background: 'white',
          fontSize: '1.5rem',
        }}
        date={item.date}
        icon={item.icon}
        visible={inView}
      >
        <h3 className="!text-lg font-semibold capitalize">{item.title}</h3>
        <p className="!mt-0">{item.location}</p>
        <p className="!mt-2 !text-base !font-normal !text-gray-700">
          {item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
};

export default MyHistory;
