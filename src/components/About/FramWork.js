import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiSpringboot,
    SiFastapi
} from "react-icons/si";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">FastAPI</Popover.Header>
        <Popover.Body>
            This is a hover-triggered popover with some <strong>FastAPI</strong> related content!
        </Popover.Body>
    </Popover>
);


function FramWork() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                <Col xs={4} md={2} className="tech-icons">
                    <SiSpringboot />
                </Col>
            </OverlayTrigger>
            <OverlayTrigger
                trigger={['hover', 'focus']} // Activates popover on hover and focus
                placement="top"              // Controls popover placement
                overlay={popover}
            >
                <Col xs={4} md={2} className="tech-icons">

                    <div className="icon-container">
                        <SiFastapi />
                    </div>

                </Col>
            </OverlayTrigger>

            {/* <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiAngularSimple />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGithubFull />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
            </Col> */}

        </Row>
    );
}

export default FramWork;
