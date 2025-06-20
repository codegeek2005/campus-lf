import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container className="text-center">
        <p className="mb-2 fw-bold">Lost & Found Hub</p>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.9rem' }}>
          This platform is built to help our campus community easily report and retrieve lost belongings.
          Whether you've lost something or found an item, we're here to reconnect people with their possessions — with kindness, care, and a touch of hope.
        </p>
        <p className="mt-3 mb-0" style={{ fontSize: '0.8rem', color: '#bbb' }}>
          &copy; {new Date().getFullYear()} LF Hub. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
