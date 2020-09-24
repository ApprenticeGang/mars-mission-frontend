import React, { FunctionComponent , useState, useEffect} from "react";
import styles from './TimelineID.module.scss';
import { useParams, Link } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface Rover {
    name: string;
    information: string;
    imageUrl: string;
}

export interface TimelineEvent {
    image_url?: string | undefined;
    heading: string;
    body: string;
    date: string;
}


interface RoverName{
    roverName: string;
}

/* istanbul ignore next */
const fetchTimelines = async (roverName: string): Promise<TimelineEvent[]> => {
    const response= await fetch(`https://mars-mission-backend-staging.herokuapp.com/api/rovers/${roverName}/timeline`);
    const json = await response.json()
    return json
    // .then(response => response.json())

 };
/* istanbul ignore next */
export const TimelineId: FunctionComponent = () => {
    const [timeline, setTimeline] = useState<TimelineEvent[]>([]);
    const {roverName}: RoverName = useParams();
    useEffect(() => {
                fetchTimelines(roverName)
                    .then(response => setTimeline(response))
            }, [roverName]);

    return (
        <section className={styles.BackgroundColor}>  
            <VerticalTimeline>
                {timeline.map(timelineEntry => <TimelineElement date={timelineEntry.date} heading={timelineEntry.heading} image_url={timelineEntry.image_url} body={timelineEntry.body}/>)   }
            </VerticalTimeline>
            <Link to="/timeline/:roverName" className={styles.ButtonToRoverImage}>{roverName} Image explorer</Link>
        </section>
    )
};
/* istanbul ignore next */
export const TimelineElement: FunctionComponent<TimelineEvent> = ({ date, heading, image_url, body }) => {
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
            <img className={styles.RoverImage} src={image_url} alt="rover" />
            <p className={styles.RoverInformation}>
                {body}
            </p>
        </VerticalTimelineElement>
    );
}
