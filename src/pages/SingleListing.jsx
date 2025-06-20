import { Container, Row, Col, Card, Badge, Image, Button } from 'react-bootstrap';
import { FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import notFoundSVG from '/noData.svg'
import { deleteListing, getListingById, updateListing } from '../utils/helper';
import { auth } from '../config/firebase';

const SingleListing = ({}) => {
  

  const [listing, setListing] = useState({})
  const navigate = useNavigate();
  const { id } = useParams();

  const currentUser = auth.currentUser;


  useEffect(()=>{
    const fetchListing = async () => {
      try{
        // const res = await fetch(`/api/listings/${id}`)
        // const data = await res.json();

        const data = await getListingById(id)

        setListing(data);
      } catch(error){
        console.log("error fetching data", error)
      }finally{
      } 
    }
    fetchListing();
  }, [])

  const {
    title,
    location,
    description,
    imageURL,
    status,
    contact,
    date,
    trackingId,
  } = listing;



  const handleMarkAsClaimed = async () => {
  try {
    const updatedListing = { ...listing, status: 'Claimed' };
    // const res = await fetch(`/api/listings/${listing.id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(updatedListing),
    // });

    // if (res.ok) {
    //   alert("Status updated to 'Claimed'.");
    //   setListing(updatedListing);
    // } else {
    //   alert("Failed to update status.");
    // }

    updateListing(updatedListing);
    setListing(updatedListing);
  } catch (err) {
    console.error("Error updating status:", err);
    alert("An error occurred.");
  }
};

const handleCopyDetails = () => {
  const text = `
📌 A *${title}* is reported to be ${status}
at ${location}

Tracking ID: ${trackingId}

To check status, view images, or contact details, click below:
${window.location.href}
`;

  navigator.clipboard.writeText(text)
    .then(() => alert("Details copied to clipboard!"))
    .catch(() => alert("Failed to copy details."));
};

const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this listing?");
    if (!confirmDelete) return;

    try {
      // const res = await fetch(`/api/listings/${id}`, {
      //   method: 'DELETE',
      // });

      // if (res.ok) {
      //   alert("Listing deleted successfully.");
      //   navigate('/listings'); // Redirect to listings page
      // } else {
      //   alert("Failed to delete listing.");
      // }
      deleteListing(id)
      navigate('/listings'); // Redirect to listings page
    } catch (err) {
      console.error("Delete error:", err);
      alert("An error occurred.");
    }
  };




  if (!listing) {
    return (
      <Container className="py-5 text-center">
        <h4>Listing not found</h4>
      </Container>
    );
  }

  
  return (
    <>
   
    <Container className="py-5">
       <Button variant="outline-primary" className="m-3" onClick={()=>navigate(-1)}>
              <FaArrowLeft className='me-2'/>Go Back
            </Button>
      <Card className="shadow-lg p-4">
        <Row>
          <Col md={6} className='d-flex align-items-center flex-column'>
            <Image src={imageURL || notFoundSVG} className="img-fluid rounded" style={{height:'25rem'}}  />
              {!imageURL &&<h2 className='text-center block'><strong>Images not Found</strong></h2>}
          </Col>

          <Col md={6} className='d-flex flex-column justify-content-between'>
           
            <div className="d-flex flex-column">
              <div className='d-flex justify-content-between'>
                <h3 className="fw-bold">{title}</h3>
                <Badge bg={status === 'Found' ? 'success' : 'danger'} className="inline mb-2">
                {status}
                </Badge>
              </div>
              <div>
                <FaMapMarkerAlt className="me-1" />
                <span className="mb-1 text-muted"> {location}</span>
              </div>
            </div>
            
            <p>{description || "No additional description provided."}</p>

            <hr />
            
            <div>
              <p><strong>Contact:</strong> {contact}</p>
              <p><strong>Date Posted:</strong> {date?.toDate?.().toLocaleString()}</p>
              <p><strong>Tracking ID:</strong> {trackingId}</p>
            </div>

              <div className="card-footer d-flex flex-wrap justify-content-between gap-2">

          <Button variant="secondary" onClick={handleCopyDetails}>
            Copy Details
          </Button>

          
          {currentUser && auth.currentUser.uid === item.userId && (
            <>
              <Button
                variant="success"
                onClick={handleMarkAsClaimed}
                disabled={listing.status === 'Claimed'}
              >
                Mark as Claimed
              </Button>

              <Button
                variant="danger"
                onClick={handleDelete}
                disabled={listing.status === 'Claimed'}
              >
                Delete Listing
              </Button>
              </>)
          }
        </div>

          </Col>

        
        </Row>
      </Card>
    </Container>
    </>
            
  );
};

export default SingleListing;
