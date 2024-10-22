import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sumsul Arifin </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />
            I am currently employed as a Data Analyst at Genweb2.
            <br />
            I have completed One Year IT Professional Diploma in JAVA at ISDB-BISEW.
            <br />
            I have completed Bachelor of Business Administration (BBA) in Marketing at Southeast University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning New Things
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sumsul Arifin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
