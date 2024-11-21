import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/26129984_lel.jpg";
import { home3 } from "../../img";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { consultation, deliberation, evalution, finish, solution } from "../../img";


const dataRoadmap = [
  {
    id: 1,
    icon:consultation,
    title: "OUR TRUCKS AND TRAILERS",
    desc: `- We initiate the process by
    engaging with our clients to
    deeply understand their
    challenges, goals, and
    requirements.
    <br/>
    <br/>
    - Through in-depth discussions,
    we gather insights into their
    existing processes and areas for
    improvement`,
  },
  {
    id: 2,
    icon:deliberation,
    title: "DELIBERATION",
    desc: `- Internally, we collaborate to
    analyze the information
    gathered during the consultation
    phase.
    <br/>
    <br/>
    - Our team brainstorms ideas
    and explores potential solutions
    that align with the client's
    objectives.`,
  },
  {
    id: 3,
    icon:solution,
    title: "SOLUTION",
    desc: `- Leveraging our expertise, we
    design bespoke IT automation
    solutions tailored to address the
    specific needs identified during
    consultation.
    <br/>
    <br/>
    - Our focus is on developing
    innovative strategies that
    streamline workflows and
    enhance operational efficiency`,
  },
  {
    id: 4,
    icon:evalution,
    title: "EVALUATION",
    desc: `- We present the proposed
    solutions to the client for review
    and feedback.
    <br/>
    <br/>
    - Facilitating open
    communication, we iterate on
    the proposed solutions based on
    client input to ensure alignment`,
  },
  {
    id: 5,
    icon:finish,
    title: "FINALIZATION",
    desc: `- Fine-tuning and finalizing the
    chosen solution, we address all
    technical and logistical aspects
    to meet the client's
    requirements.
    <br/>
    <br/>
    - Our goal is to deliver a
    comprehensive solution that not
    only meets but exceeds our
    client's expectations`,
  },
];

function About() {
  return (
    <Container fluid className="about-section screen">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              textAlign: "start",
              justifyContent: "start",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <p className="clamp2" style={{ color: "white"}}>WELCOME TO</p>
            <h1 className="clamp" style={{ paddingBottom: "20px", color: "white"}}>
            LDU BOLD EAGLE TRANSPORTATION INC
            </h1>
            <p className="clamp4" style={{ color: "white"}}>
            Every time that we work with you, we deliver 5 years of freight transportation experience to your business; we simply put it to work for you. We provide tailored solutions for each client and solve any logistics task.

Our main goal is to always perform flexible, fast, and cost-efficient delivery. That’s why we’ve gathered an experienced team that can handle any task. We only employ professionals who are put through a rigorous pre-screening process that includes a comprehensive background check, all the previous along with qualified dispatch who will deliver your freight anywhere in the United States of America.
              <br /> <br />
              We have as our best core value, the responsibility to operate safely, we are always up for innovation and improvement, our eyes are  looking forward for better and smarter logistics solutions for any type of business.
always
The same as you, we believe that time is money and we value your cargo, that is why we narrow the timeframe of each delivery.
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "150px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={home3} alt="about" className="img-fluid" style={{ borderRadius: "12px",  }} />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              textAlign: "start",
              justifyContent: "start",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <p className="clamp2" style={{ color: "white", textAligin: "center", width: "full"}}>OUR TRUCKS AND TRAILERS</p>
            <h1 className="clamp" style={{ paddingBottom: "20px" , color: "white"}}>
              Our Journey
            </h1>
            <p className="clamp4" style={{ color: "white"}}>
              NNT Express embodies a tale of innovation and adaptability, rooted
              in a commitment to excellence and driven by a passion for
              transformation. Established in 2020 within the logistics sector,
              NNT Express swiftly rose to prominence as a trusted partner,
              revolutionizing traditional workflows and setting new standards
              for efficiency and reliability.
              <br />
              <br />
              In 2023, recognizing the seismic shift towards digitalization, NNT
              Express embraced change and expanded its horizons into the realm
              of Information Technology (IT). This strategic pivot marked a
              defining moment in the company's evolution, as it embarked on a
              journey to harness the power of technology to shape the future of
              logistics.
              <br />
              <br />
              Under the visionary leadership of its founders, NNT Express
              swiftly became a trailblazer in the IT landscape, pioneering the
              development of essential platforms such as Electronic Logging
              Device (ELD) and Transportation Management System (TMS). These
              platforms not only streamlined logistics processes but also laid
              the foundation for a new era of innovation within the industry
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              textAlign: "start",
              justifyContent: "start",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Timeline roadmaps={dataRoadmap} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;

const Timeline = ({ roadmaps }) => {
  const centeredIconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#11426a",
    color: "#fff",
  };
  return (
    <VerticalTimeline>
      {roadmaps.map((item, idx) => (
        <VerticalTimelineElement
          key={idx}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            color: "#fff",
            border: "1px solid #11426a",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #11426a" }}
          // date="2011 - present"
          iconStyle={centeredIconStyle}
          icon={<img className="w-[20px] colorr" src={item.icon} alt="icon" />}
        >
          <h3 className="vertical-timeline-element-title">{item?.title}</h3>
          <p
            className="text-[16px] font-[500] text-[#11426a]"
            dangerouslySetInnerHTML={{
              __html: item.desc,
            }}
          ></p>
        </VerticalTimelineElement>
      ))}

      {/* <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      /> */}
    </VerticalTimeline>
  );
};
