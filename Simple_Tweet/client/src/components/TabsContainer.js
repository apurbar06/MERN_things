import React from "react";
import "./TabsContainer.css";
import { Row, Col } from "react-bootstrap";

const TabsContainer = ({ children }) => {
  return (
    <Row className="tabs-container">
      <Col sm={12} md={12} xl={6}>
        <div> {children} </div>
      </Col>
    </Row>
  );
};

export default TabsContainer;
