import React, { FunctionComponent, useState, useEffect } from "react";
import styles from './TimelineID.module.scss';
import { useParams, Link } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface Rover {
    name: string;
    information: string;
    imageUrl: string;

}
export const TimelineId: FunctionComponent = () => {

    const { roverName }:any = useParams();
    const rover: Rover = getRover(roverName)!;
    return (
        <section className={styles.BackgroundColor}>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#631111', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #631111' }}
                    date="2011 - present"
                    iconStyle={{ background: '#631111', color: '#631111' }}
                    // icon={<Icon />}
                >
                    <h3 className="vertical-timeline-element-title">{rover.name}</h3>
                    <img className="rover-image" src={rover.imageUrl} />
                    <p>
                        {rover.information}
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    contentStyle={{ background: '#631111', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #631111' }}
                    iconStyle={{ background: '#631111', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">{rover.name}</h3>
                    <img className="rover-image" src={rover.imageUrl} />
                    <p>
                        {rover.information}
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    contentStyle={{ background: '#631111', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #631111' }}
                    iconStyle={{ background: '#631111', color: '#631111' }}
                >
                    <h3 className="vertical-timeline-element-title">{rover.name}</h3>
                    <img className="rover-image" src={rover.imageUrl} />
                    <p>
                        {rover.information}
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    contentStyle={{ background: '#631111', color: '#fff' }}

                    contentArrowStyle={{ borderRight: '7px solid  #631111' }}
                    iconStyle={{ background: '#631111', color: '#631111' }}
                >
                    <h3 className="vertical-timeline-element-title">{rover.name}</h3>
                    <img className="rover-image" src={rover.imageUrl} />
                    <p>
                        {rover.information}
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    contentStyle={{ background: '#631111', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #631111' }}
                    iconStyle={{ background: '#631111', color: '#631111' }}
                >
                    <h3 className="vertical-timeline-element-title">{rover.name}</h3>
                    <img className="rover-image" src={rover.imageUrl} />
                    <p>
                        {rover.information}
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    contentStyle={{ background: '#631111', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #631111' }}
                    iconStyle={{ background: '#631111', color: '#631111' }}
                >
                    <h3 className="vertical-timeline-element-title">{rover.information}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{rover.information}</h4>
                    <p>
                        {rover.information}
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <Link to="/view_all" className={styles.ButtonToRoverImage}>{rover.name} Image explorer</Link>
        </section>
    )
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


// export const Icon: FunctionComponent<any> = () => {
//     return (
//        <img src="/images/NasaLogo.png"/>
//     )
// };
