import React from "react";
import "../css/ForgotPassword.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const ForgotPassword = () => {
  return (
    <div>
      <Card className="forgotPasswordCard">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Please enter your Email Here.knflnkqfnklelflkenlqfqwlk
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              SEND
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgotPassword;
