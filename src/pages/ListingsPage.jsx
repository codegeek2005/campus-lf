import Listings from '../components/Listings';
import { Button, Container, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getAllListings } from '../utils/helper';

const ListingsPage = () => {


  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All')






  useEffect (() => {
        const fetchListings = async () => {
            
        // const apiURL = '/api/listings'

        //     try {
        //         const res = await fetch(apiURL);
        //         const data = await res.json();

        //         setListings(data)
        //         setFilteredListings(data)
            
        //     } catch (error) {
        //         console.log('error fetching data', error)
        //     } finally{
        //         setLoading(false)
        //     }
        const data = await getAllListings()
        setListings(data)
        setFilteredListings(data)
        }
        fetchListings();

       
            
    }, [])

    useEffect(() => {
    const term = searchTerm.toLowerCase();

    const results = listings.filter((item) => {

      
      const matchesStatus =
        filterStatus === '' || item.status === filterStatus;


      const matchesSearch = term === '' ||
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.location.toLowerCase().includes(term) ||
        item.contact.toLowerCase().includes(term) ||
        item.trackingId.toLowerCase().includes(term);



      return matchesSearch && matchesStatus;
    });

    setFilteredListings(results);
  }, [searchTerm, filterStatus, listings]);



  return (
    <>
    <Container className="mt-4 mb-2">
        <Form.Control
          type="text"
          placeholder="Search by title, location, contact, ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

              <Form.Select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        >
        <option value="">All</option>
        <option value="Lost">Lost</option>
        <option value="Found">Found</option>
        <option value="Claimed">Claimed</option>
        </Form.Select>

      </Container>

    <Listings listings = {searchTerm ? filteredListings : listings} />
    </>
  )
}

export default ListingsPage
