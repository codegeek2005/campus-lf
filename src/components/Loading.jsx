import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = ({ text = 'Loading...' }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center my-5">
      <Spinner animation="border" variant="primary" />
      <p className="mt-2 text-muted">{text}</p>
    </div>
  );
};

export default Loading;
