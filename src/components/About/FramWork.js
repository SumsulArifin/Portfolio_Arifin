import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiSpringboot,
    SiFastapi
} from "react-icons/si";

import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiAngularSimple,
    DiMysql,
    DiGithubFull
} from "react-icons/di";
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function FramWork() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFastapi />
            </Col>
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
