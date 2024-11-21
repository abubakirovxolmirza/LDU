import React, { useRef, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import "./Contact.css";
import Map from "./map";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    user_phone: false,
    message: false
  });

  const validateForm = () => {
    const formElements = form.current.elements;
    const newErrors = {
      user_name: !formElements.user_name.value,
      user_email: !formElements.user_email.value,
      user_phone: !formElements.user_phone.value,
      message: !formElements.message.value
    };

    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all fields.");
      return;
    }

    const toastId = toast.loading("Sending your information...");
    emailjs
      .sendForm(
        "service_blw86sy",
        "template_5bf9r4d",
        form.current,
        "UWKokUDQPtSsV6HYa"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your information has been sent successfully!", { id: toastId });
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending data!", { id: toastId });
        }
      );

    e.target.reset();
  };

  return (
    <Container fluid className="about-section screen">
      <Container>
        <Row md={12}>
          <h1 className="purple clamp1" style={{ paddingBottom: "20px" }}>
            Contact Us
          </h1>
        </Row>
        <Row>
          <Col
            md={6}
            xs={{ order: 1 }}
            className="d-flex justify-content-start align-items-start"
          >
            <Form
              ref={form}
              onSubmit={sendEmail}
              className="form-control1 w-100 mb-5"
            >
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="text-start custom-label">
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  className={`custom-input ${errors.user_name ? 'is-invalid' : ''}`}
                />
                {errors.user_name && <div className="text-start invalid-feedback">Name is required.</div>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="text-start custom-label">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="name@example.com"
                  className={`custom-input ${errors.user_email ? 'is-invalid' : ''}`}
                />
                {errors.user_email && <div className="text-start invalid-feedback">Email is required.</div>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label className="text-start custom-label">
                  Phone
                </Form.Label>
                <Form.Control
                  type="text"
                  name="user_phone"
                  placeholder="Enter your phone number"
                  className={`font-family-san-serif custom-input ${errors.user_phone ? 'is-invalid' : ''}`}
                />
                {errors.user_phone && <div className="text-start invalid-feedback">Phone is required.</div>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formTextarea">
                <Form.Label className="text-start custom-label">
                  Message
                </Form.Label>
                <Form.Control
                  style={{ height: "135px" }}
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="Write your message"
                  className={`custom-input ${errors.message ? 'is-invalid' : ''}`}
                />
                {errors.message && <div className="text-start invalid-feedback">Message is required.</div>}
              </Form.Group>
              <Button type="submit" className="w-100 button-from">
                Submit
              </Button>
            </Form>
          </Col>
          <Col
            md={6}
            xs={{ order: 1 }}
            className="d-flex justify-content-start align-items-start"
          >
            <Map />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
