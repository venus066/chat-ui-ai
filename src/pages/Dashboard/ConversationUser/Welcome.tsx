import React from "react";
import { Button, Col, Row } from "reactstrap";

const Welcome = () => {
  return (
    <Row className="w-100 h-100 align-items-center justify-content-center">
      <Col md={7} className="col-xxl-5 col-md-7">
        <div className="p-4 text-center">
          <div className="avatar-xl mx-auto mb-4">
            <div className="avatar-title bg-soft-primary rounded-circle">
              <i className="bx bxs-message-alt-detail display-4 text-primary m-0"></i>
            </div>
          </div>

          <h4>Welcome to Doot Chat App</h4>
          <p className="text-muted mb-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. cum sociis natoque penatibus et
          </p>

          <Button color="primary" type="button" className="w-lg">
            Get Started
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Welcome;
