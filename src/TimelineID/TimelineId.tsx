import React, { FunctionComponent } from "react";
import styles from './TimelineID.module.scss';
import { useParams, Link } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface Rover {
    name: string;
    information: string;
    informationSectionOne: string;
    imageUrl: string;
}
export const TimelineId: FunctionComponent = () => {

    const { roverName }: any = useParams();
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
                >
                    <h3 className={styles.TimeLineHeading}>{rover.name}</h3>
                    <img className={styles.RoverImage} src={rover.imageUrl} alt="rover" />
                    <p className={styles.RoverInformation}>
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
                    <h3 className={styles.TimeLineHeading}>{rover.name}</h3>
                    <img className={styles.RoverImage} src={rover.imageUrl} alt="rover" />
                    <p className={styles.RoverInformation}>
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
                    <h3 className={styles.TimeLineHeading}>{rover.name}</h3>
                    <img className={styles.RoverImage} src={rover.imageUrl} alt="rover" />
                    <p className={styles.RoverInformation}>
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
                   <h3 className={styles.TimeLineHeading}>{rover.name}</h3>
                    <img className={styles.RoverImage} src={rover.imageUrl} alt="rover" />
                    <p className={styles.RoverInformation}>
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
                     <h3 className={styles.TimeLineHeading}>{rover.name}</h3>
                    <img className={styles.RoverImage} src={rover.imageUrl} alt="rover" />
                    <p className={styles.RoverInformation}>
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
                     <h3 className={styles.TimeLineHeading}>{rover.name}</h3>
                    <img className={styles.RoverImage} src={rover.imageUrl} alt="rover" />
                    <p className={styles.RoverInformation}>
                        {rover.information}
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <Link to="timeline/:roverName" className={styles.ButtonToRoverImage}>{rover.name} Image explorer</Link>
        </section> //change the line to when image viewer is complete
    )
};

export function getRover(roverName: string): Rover | undefined {
    console.log(roverName);
    return rovers.find(rover => rover.name.toLowerCase() === roverName.toLowerCase())

}

export const RoverImage: FunctionComponent<Rover> = (getRover) => {
    return (
        <section>
            <h2>{getRover.name}</h2>
            <h3>{getRover.information}</h3>
            <img src={getRover.imageUrl} alt="rover" />
        </section>
    )
};

const rovers: Rover[] = [
    { name: "Spirit", information: "Rover 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", informationSectionOne: "info2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageUrl: "/images/spirit_timeline.png" },
    { name: "Opportunity", information: "Rover on mars 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", informationSectionOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  ", imageUrl: "/images/opportunity_timeline.png" },
    { name: "Curiosity", information: "Rover on mars 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", informationSectionOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut", imageUrl: "/images/curiosity_timeline.png" },
    { name: "Perserverance", information: "Rover on mars 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", informationSectionOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut", imageUrl: "/images/perserverance_timeline.png" },
]

