import Listing from './Listing';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Listings = ({ listings }) => {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <Button variant="outline-primary" className="mt-2 ms-2 mb-0" onClick={() => navigate(-1)}>
        <FaArrowLeft className="me-2" /> Go Back
      </Button>

      <div className="d-flex justify-content-center m-2 mb-4 mt-0">
        <h2 className="text-center">Browse All Listings</h2>
      </div>

      <Row>
        {listings.map((item) => (
          <Col md={4} sm={6} xs={12} key={item.id} className="mb-4">
            <Listing item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Listings;
