import React, { FunctionComponent, useState, useEffect } from "react";
import styles from './TimelineID.module.scss';
// import {roverCurisity, roverOpportunity, roverPerservance, roverSpirt} from './RoverInformation' 
import { RoverExplorer } from "../RoverExplorer/RoverExplorer";
import { useParams } from "react-router-dom";
import ReactDOM from 'react-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
 
interface Rover {
    name: string;
    information: string;
    imageUrl: string;
}
export const TimelineId: FunctionComponent = () => {

    const { roverName }: any = useParams();
    const rover: Rover = getRover(roverName)!;

    return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#631111', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">{rover.name}</h3>
        <h4 className="vertical-timeline-element-subtitle">{rover.information}</h4>
        <img className="rover-image" src={rover.imageUrl} />
        <p>
            {rover.information}
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>
          User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    )
    
    // return(
    //     <div className={styles.timelineID}>
    //         {/* <h3>The current Timeline Id is: {roverName} </h3>
    //         <RoverImage name={rover.name} information={rover.information} imageUrl={rover.imageUrl} /> */}
    //         <Timeline events={events} />
    //     </div>
    // )

};
export function getRover(roverName: String): Rover | undefined {
    console.log(roverName);
    return rovers.find(rover => rover.name.toLowerCase() === roverName.toLowerCase())

};

export const RoverImage: FunctionComponent<Rover> = (getRover) => {
    return (
        <section>

            <h2>{getRover.name}</h2>
            <h3>{getRover.information}</h3>
            <img src={getRover.imageUrl} />
        </section>
    )
};

const rovers: Rover[] = [
    { name: "Spirit", information: "Rover on mars 1", imageUrl: "/images/mars-exploration-rover.png" },
    { name: "Opportunity", information: "Rover on mars 2", imageUrl: "/images/oppertunity_rover.png" },
    { name: "Curiosity", information: "Rover on mars 3", imageUrl: "/images/curiosity_rover.png" },
    { name: "Perserverance", information: "Rover on mars 4", imageUrl: "/images/perserverance.png" },
]



