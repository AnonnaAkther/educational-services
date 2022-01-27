import React from 'react';
import { Accordion, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="text-success mt-5">
            <ul>
                <li>
                    <h2>Knowledge or skill gained through schooling or study.</h2>
                    </li>
                    <li>
                    <h2>(psychology) Behavioral modification especially through experience or conditioning.</h2>
                    </li>
                    <li>
                    <h2>The acquiring of knowledge or skill.</h2>
                    </li>
                    <li>
                    <h2>The act, process, or experience of gaining knowledge or skill.</h2>
                    </li>
                    <li>
                    <h2>The definition of learning is the process or experience of gaining knowledge or skill</h2>
                    </li>
                    <li>
                    <h2>Good work in language presupposes and depends on a real knowledge of things.</h2>
                    </li>
            </ul>
            <Accordion className="mt-5" defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
    Learning is the process of acquiring new understanding,
     knowledge, behaviors, skills, values, attitudes,
      and preferences. ... Some learning is immediate,
       induced by a single event (e.g. being burned by a hot stove),
        but much skill and knowledge accumulate from repeated experiences.
        In the educational process, the communication between the student and the teacher can be verbal or non-verbal. Both interlocutors and participants can express their emotions. A student can express emotions regarding the relation with the content of the lesson, and toward the kind of knowledge acquired. A teacher can express emotions related to the evolution of the student during the educational process.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
    The directive nature of the educational process is affirmed 
    (see, e.g., the discussion with Moacir Gadotti and Sergio Guimarães published in Brazil in 1989 
    – Gadotti et al., 1995: 50). Guarding against the perceived danger of a laissez faire pedagogy,
     resulting from a misconception of his particular notion of dialog, Freire emphasizes this directivity in the conversation with Ira Shor
      and elsewhere: “At the moment the teacher begins the dialogue, he or she knows a great deal,
       first in terms of knowledge and second in terms of the horizon that he or she wants to get to.
     The starting point is what the teacher knows about the object and where the teacher wants to go with it” (Shor and Freire, 1987: 103).
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        <div className="prover mt-5">
        {['top'].map((placement) => (
            <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
                <Popover id={`popover-positioned-${placement}`}>
                <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                <Popover.Body>
                    <strong>Learning Proccess!</strong> Implement Coming Soon.
                </Popover.Body>
                </Popover>
            }
            >
            <Button variant="success">Popover on {placement}</Button>
            </OverlayTrigger>
        ))}
        </div>
        </div>
    );
};

export default AboutUs;