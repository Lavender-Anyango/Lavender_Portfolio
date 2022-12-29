import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { HiBuildingOffice2 } from 'react-icons/hi2';

const Experience = () => {
    return (
        <div className="experience">
            <div className="proficiency_title">Experience</div>
            <div className="intro_name_bar"></div>
            <div className="experience_timeline_container">
                <div>
                    <VerticalTimeline lineColor="linear-gradient(8.53deg, rgba(97, 94, 214, 0.17) 73.83%, rgba(92, 98, 125, 0) 97.07%)">
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2022 - present"
                            iconStyle={{ background: '#000', color: '#fff', opacity: 0 }}
                            contentArrowStyle={{ background: 'rgba(97, 94, 214, 0.15)' }}
                            contentStyle={{ background: 'rgba(97, 94, 214, 0.15)', color: '#fff', width: '280px' }}
                            icon={<HiBuildingOffice2 />}
                        >
                            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                            <h4 className="vertical-timeline-element-subtitle">eTranzact International PLC</h4>
                            <p>Developed payment API using Java and Spring Boot</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2021 - 2022"
                            iconStyle={{ background: '#000', color: '#fff', opacity: 0 }}
                            contentArrowStyle={{ background: 'rgba(97, 94, 214, 0.15)' }}
                            contentStyle={{ background: 'rgba(97, 94, 214, 0.15)', color: '#fff', width: '280px' }}
                            icon={<HiBuildingOffice2 />}
                        >
                            <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">ComradeNG</h4>
                            <p>
                                Worked as an assistant lead engineer to develop a voter application to sensitive the public on voting and voter
                                education using react
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2021 - 2022"
                            iconStyle={{ background: '#000', color: '#fff', opacity: 0 }}
                            contentArrowStyle={{ background: 'rgba(97, 94, 214, 0.15)' }}
                            contentStyle={{ background: 'rgba(97, 94, 214, 0.15)', color: '#fff', width: '280px' }}
                            icon={<HiBuildingOffice2 />}
                        >
                            <h3 className="vertical-timeline-element-title">Back End Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Zuri Team, Inc</h4>
                            <p>
                                Built a flight booking API to book traveling tickets thereby reducing queues by 40%, Secured API endpoints, thereby
                                improving security by 45% with Node
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2019 - 2020"
                            iconStyle={{ background: '#000', color: '#fff', opacity: 0 }}
                            contentArrowStyle={{ background: 'rgba(97, 94, 214, 0.15)' }}
                            contentStyle={{ background: 'rgba(97, 94, 214, 0.15)', color: '#fff', width: '280px' }}
                            icon={<HiBuildingOffice2 />}
                        >
                            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">AYD Media</h4>
                            <p>
                                Completed the integration of frontend and backend web applications by combining knowledge of frontend and backend
                                programming languages
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    );
};

export default Experience;
