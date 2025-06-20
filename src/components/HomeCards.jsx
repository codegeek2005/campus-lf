import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InfoCards = () => {
  return (
    <section className="py-4" style={{ backgroundColor: '#f9f9f9' }}>
      <Container>
        <Row className="g-4">

          {/* Report a Listing Card */}
          <Col md={6}>
            <Card className="h-100 shadow" style={{ backgroundColor: '#F4D04E' }}>
              <Card.Body>
                <Card.Title className="fs-4 fw-bold text-dark">Report an Item</Card.Title>
                <Card.Text className="text-secondary mb-4" style={{ color: '#6B6B6B' }}>
                  Lost or found something on campus? Help others by posting a listing here.
                </Card.Text>
                <Link to="/new">
                  <Button variant="dark">Add a Listing</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Browse Listings Card */}
          <Col md={6}>
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title className="fs-4 fw-bold text-dark">Browse Listings</Card.Title>
                <Card.Text className="text-secondary mb-4" style={{ color: '#6B6B6B' }}>
                  Look through lost and found listings to reclaim or return belongings.
                </Card.Text>
                <Link to="/listings">
                  <Button style={{ backgroundColor: '#F4D04E', color: '#111111', border: 'none' }}>
                    View Listings
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default InfoCards;
