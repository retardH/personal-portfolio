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

const MyHistory = () => {
  const { ref } = useSectionView('History');
  return (
    <section id="history" ref={ref}>
      <SectionHeader>My History</SectionHeader>
      <VerticalTimeline lineColor="">
        {experiencesData.map((e) => {
          return (
            <React.Fragment key={e.title}>
              <VerticalTimelineElement
                visible
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
                date={e.date}
                icon={e.icon}
              >
                <h3 className="font-semibold capitalize">{e.title}</h3>
                <p className="!mt-0">{e.location}</p>
                <p className="!mt-2 !font-normal !text-gray-700">
                  {e.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default MyHistory;
