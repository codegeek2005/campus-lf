import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const ViewAllListings = () => {
  return (
    <Container className="my-3 d-flex justify-content-center">
      <Link to="/listings">
        <Button
          variant="warning"
          className="px-4 py-3 fw-semibold text-dark"
        >
          View All Listings
        </Button>
      </Link>
    </Container>
  );
};

export default ViewAllListings;
