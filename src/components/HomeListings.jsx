import Listing from './Listing';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getRecentListings } from '../utils/helper';
import Loading from './Loading';


const Listings = ({isHome = true}) => {
//isHome is used because on HomePage, we will only display 3 cards instead of all of them
  


    const [loading, setLoading] = useState(true);
    const [listings, setListings] = useState([]);

     useEffect (() => {

       const fetchListings = async () => {
         
         // const apiURL = '/api/listings?_limit=3'
         
         try {
           // const res = await fetch(apiURL);
           // const data = await res.json();
                
                setLoading(true)
                const data = await getRecentListings(); //only last 3 recent listings as collection is sorted acc to date in desc order
                setLoading(false)

                setListings(data)
            
            } catch (error) {
                console.log('error fetching data', error)
            } finally{
                setLoading(false)
            }
        }
        fetchListings();
    }, [])

  return (
    <>
      <Container className="py-5">
            <div className='d-flex justify-content-center m-2 mb-4 mt-0'>
            <h2 className="text-center">Recent Listings</h2>
        </div>
        {loading && <Loading text="fetching recent listings"/>}
        <Row>
          {listings.map((item) => (
            <Col md={4} sm={6} xs={12} key={item.id} className="mb-4">
             <Listing item = {item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Listings
