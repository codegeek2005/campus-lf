import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../components/Hero';
import HomeListings from '../components/HomeListings';
import HomeCards from '../components/HomeCards';
import ViewAllListings from '../components/ViewAllListings';


const Home = () => {
  return (
    <>
    <Hero />

    <HomeCards />

    <HomeListings />

    <ViewAllListings />
    </>
  );
};

export default Home;
