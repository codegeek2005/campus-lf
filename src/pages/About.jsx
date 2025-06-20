import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={10} lg={8}>
            <h2 className="text-center fw-bold mb-3">About Us</h2>
            <p className="text-center text-muted">
              We're students—just like you—who believe that campus life can be safer, kinder, and more connected. That’s why we built this platform—to help each other when things go missing or need to be returned.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="fw-bold">Our Mission</Card.Title>
                <Card.Text>
                  To foster a culture of trust and helpfulness on campus by making it easy to report, find, and return lost items. Because we all know how it feels to lose something valuable.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="fw-bold">Our Responsibility</Card.Title>
                <Card.Text>
                  We see this platform not as a project, but as a responsibility—our way of giving back to the student community. By stepping up, we hope to inspire others to do the same.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center">
          <Col md={10} lg={8}>
            <div className="text-center">
              <p className="fw-bold text-dark fs-5">
                Together, let's make our campus a little more caring, one listing at a time.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
