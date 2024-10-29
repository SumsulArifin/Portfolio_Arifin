import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Capture.PNG";
import chatify1 from "../../Assets/Capture1.PNG";
import chatify3 from "../../Assets/images.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Works experience
        </h1>
        <p class="text-start" style={{ color: "white" }}>
          Programming Experience
        </p>
        <Row style={{ justifyContent: "start", paddingBottom: "10px" }}>
          <Col md={6}>
            <div className="card bg-base-100 w-96 h-100 shadow-xl">
              <div className="card-body items-start text-start">
                <h2 className="card-title text-xl font-semibold">Data Analyst <span class="text-success fs-6" style={{ fontSize: "1.em" }}> genweb2</span></h2>
                <p className="text-gray-500">February 2024 - Present</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li>Prepare and preprocess data for machine learning models.</li>
                  <li>Manage and ensure the quality of large datasets.</li>
                  <li>Perform complex data analyses and extract meaningful insights.</li>
                  <li>Utilize Python libraries (MoviePy, Pandas, Anaconda, NumPy, TQDM, etc.) for data processing.</li>
                  <li>Collaborate with cross-functional teams to deliver data-driven solutions.</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body items-start text-start">
                <h2 className="card-title text-xl font-semibold">Java Software Engineer <span class="text-success fs-6" style={{ fontSize: "1.em" }}> TechKnowGram Ltd</span></h2>
                <p className="text-gray-500">2023 - 2024</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li>Prepare and preprocess data for machine learning models.</li>
                  <li>Manage and ensure the quality of large datasets.</li>
                  <li>Perform complex data analyses and extract meaningful insights.</li>
                  <li>Utilize Python libraries (MoviePy, Pandas, Anaconda, NumPy, TQDM, etc.) for data processing.</li>
                  <li>Collaborate with cross-functional teams to deliver data-driven solutions.</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <p class="text-start" style={{ color: "white" }}>
          Sales and Marketing Experience
        </p>

        <Row style={{ justifyContent: "start", paddingBottom: "10px" }}>
          <Col md={4}>
            <div className="card bg-base-100 w-96 h-100 shadow-xl">
              <div className="card-body items-start text-start">
                <h2 className="card-title text-xl font-semibold">Area Sales Manager
                  <span class="text-success fs-6" style={{ fontSize: "1.em" }}> Walton Hi-Tech Industries</span></h2>
                <p className="text-gray-500"> 2019 - 2022</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li>Manage Sales and Distribution.</li>
                  <li>Retail Market Visits.</li>
                  <li>Offer Creation.</li>
                  <li>Sales Target Achievement.</li>
                  <li>Logistics Coordination.</li>
                  <li>Performance Monitoring.</li>
                  <li>Reporting.</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card bg-base-100 w-96 h-100 shadow-xl">
              <div className="card-body items-start text-start">
                <h2 className="card-title text-xl font-semibold">Operations Supervisor <span class="text-success fs-6" style={{ fontSize: "1.em" }}> Bproperty.com</span></h2>
                <p className="text-gray-500"> 2018 - 2019</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li>Supervision of Data Collector Team.</li>
                  <li>Performance Target Understanding.</li>
                  <li>Training and Development.</li>
                  <li>Communication of Company Updates.</li>
                  <li>Problem Resolution.</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card bg-base-100 w-96 h-100 shadow-xl">
              <div className="card-body items-start text-start">
                <h2 className="card-title text-xl font-semibold">Vendor Manager
                  <span class="text-success fs-6" style={{ fontSize: "1.em" }}> daraz.com.bd</span></h2>
                <p className="text-gray-500">2017 - 2018t</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li>Vendor Acquisition and Relationship Building.</li>
                  <li>Communication with Vendors.</li>
                  <li>Price Negotiation.</li>
                  <li>Market Monitoring and Research.</li>
                  <li>Reporting and Analysis.</li>
                </ul>
              </div>
            </div>
          </Col>

        </Row>
        <h1 className="project-heading mb-5 mt-5">
          My Project
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify3}
              isBlog={false}
              title="salesOfPoint"
              description="This project is a comprehensive, full-stack application designed with a secure and scalable architecture. The backend is built with Spring Boot and Spring Security, ensuring robust data processing and secure authentication/authorization. A MySQL database supports efficient data storage and retrieval, while the Angular 15 frontend provides a dynamic, responsive user interface for a seamless web experience. Additionally, a Flutter-based mobile app offers users consistent functionality on mobile devices, extending accessibility across platforms. This combination of technologies ensures flexibility, security, and usability across web and mobile environments.."
              ghLink="https://github.com/SumsulArifin/salesOfPoint"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="panda-E-commerce"
              description="panda-E-commerce is a user-friendly online shopping platform built with HTML5, CSS, and Bootstrap. This e-commerce website offers a seamless shopping experience, allowing users to browse through a wide range of products, add items to their cart, and complete secure checkout processes. The platform is designed with a clean and intuitive interface, ensuring easy navigation and a pleasant shopping experience."
              ghLink="https://github.com/SumsulArifin/Panda-Mart"
              demoLink="https://panda-jnda-commerce.netlify.app/#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify1}
              isBlog={false}
              title="Chatify"
              description=" React project using Vite, Tailwind CSS, and DaisyUI for a fast, customizable UI development experience. Vite handles dev, build, and preview tasks, while React Router and React Icons provide navigation and icons. Tailwind and DaisyUI streamline styling with ready-made components, and PostCSS plus Autoprefixer handle CSS compatibility."
              ghLink=""
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
