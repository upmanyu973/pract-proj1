import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Pannel from "./Pannel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Pannel.css";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const navigate = useNavigate();
  // const [onHoverStyle, setOnHoverStyle] = useState({ display: "none" });

  // const mouseOverEvent = () => {
  //   setOnHoverStyle({ display: "unset" });
  // };
  // const mouseOffEvent = () => {
  //   setOnHoverStyle({ display: "none" });
  // };
  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row>
          {/* <Col
            style={{
              flexWrap: "wrap",
              height: "745px",
              borderRight: "2px solid grey",
            }}
            md={2}
            // onMouseOver={mouseOverEvent}
            // onMouseOut={mouseOffEvent}
          >
            <Sidebar navigate={navigate} /> */}
          {/* </Col> */}
          <Col md={12} className="pannel">
            <Pannel />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Body;
