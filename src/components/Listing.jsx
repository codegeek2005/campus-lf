import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Listing = ({ item }) => {
  const isClaimed = item.status === 'Claimed';

  return (
    <Card 
      className={`h-100 shadow-sm border-0 ${isClaimed ? 'bg-light text-muted' : ''}`} 
      style={isClaimed ? { opacity: 0.7 } : {}}
    >
      {/* <Card.Img variant="top" src={item.images?.[0]} /> */}

      <Card.Body className="d-flex flex-column justify-content-between">
        {/* Date & Status Badge */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <small className="text-muted">{item.date?.toDate().toLocaleDateString()}</small>
          <Badge bg={
            item.status === 'Lost' ? 'danger' :
            item.status === 'Found' ? 'success' : 'secondary'
          }>
            {item.status}
          </Badge>
        </div>

      
        <Card.Title className="fw-bold mb-2">{item.title}</Card.Title>

        <Card.Text className="text-truncate" style={{ maxHeight: '4.5em' }}>
          {item.description}
        </Card.Text>

        <small className="text-muted d-block mb-2">
          Tracking ID: <strong>{item.trackingId}</strong>
        </small>

        <hr />

      
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FaMapMarkerAlt className="me-1" />
            <small className="text-muted">{item.location}</small>
          </div>
          <Button 
            variant={isClaimed ? 'outline-secondary' : 'outline-dark'} 
            size="sm"
            as={Link}
            to={`/listing/${item.id}`}
            disabled={isClaimed}
          >
            {isClaimed ? 'Claimed' : 'View Details'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Listing;
