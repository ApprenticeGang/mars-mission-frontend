import React, { FunctionComponent } from "react";
import styles from './TimelineID.module.scss';
import { useParams, Link } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface Rover {
    name: string;
    information: string;
    imageUrl: string;
}

interface RoverName{
    roverName: string;
}

export const TimelineId: FunctionComponent = () => {
  
    const params: RoverName = useParams();
    const rover = getRover(params.roverName);
    if (!rover) {
        return <div>Unable to find rover with name: {params.roverName}</div>
    }
    return (
        <section className={styles.BackgroundColor}>
            <VerticalTimeline>
                <TimelineElement date = {"2011"} heading ={rover.name} image = {rover.imageUrl} text = {rover.information}/>
                <TimelineElement date = {"2012"} heading ={rover.name} image = {rover.imageUrl} text = {rover.information}/>
                <TimelineElement date = {"2013"} heading ={rover.name} image = {rover.imageUrl} text = {rover.information}/>
                <TimelineElement date = {"2014"} heading ={rover.name} image = {rover.imageUrl} text = {rover.information}/>
            </VerticalTimeline>
            <Link to={`/view_all/${params.roverName}`} className={styles.ButtonToRoverImage}>{rover.name} Image explorer</Link>
        </section>
    )
};

interface TimelineElementProps {
    date: string;
    heading: string;
    image: string;
    text: string;
}

export const TimelineElement: FunctionComponent<TimelineElementProps> = ({ date, heading, image, text }) => {
    return (
        <VerticalTimelineElement
            data-testid = 'Timeline Element'
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#631111', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #631111' }}
            date={date}
            iconStyle={{ background: '#631111', color: '#631111' }}
        >
            <h3 data-testid="Timeline Header" className={styles.TimeLineHeading}>{heading}</h3>
            <img className={styles.RoverImage} src={image} alt="rover" />
            <p className={styles.RoverInformation}>
                {text}
            </p>
        </VerticalTimelineElement>
    );
}
export const getRover = (roverName: string | undefined): Rover | undefined => {
    /* istanbul ignore next */
    if (!roverName) {
        return undefined;
    }
    return rovers.find(rover => rover.name.toLowerCase() === roverName.toLowerCase());
    
} 

const rovers: Rover[] = [
    { name: "Spirit", information: "Rover 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageUrl: "/images/spirit_timeline.png" },
    { name: "Opportunity", information: "Rover on mars 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  imageUrl: "/images/opportunity_timeline.png" },
    { name: "Curiosity", information: "Rover on mars 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  imageUrl: "/images/curiosity_timeline.png" },
    { name: "Perserverance", information: "Rover on mars 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageUrl: "/images/perserverance_timeline.png" },
]

