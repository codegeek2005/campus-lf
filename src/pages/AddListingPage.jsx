import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { uploadImageToCloudinary } from '../utils/helper';
import { data, useNavigate, Navigate } from 'react-router-dom';
import { addListing } from '../utils/helper';
import { serverTimestamp } from 'firebase/firestore';
import { auth } from '../config/firebase';


const CreateListingForm = () => {

  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const [formData, setFormData] = useState({
    title: '',
    location: '',
    contact: '',
    description: '',
    status: '',
  });

  const [selectedImage, setSelectedImage] = useState(null)

  const navigate = useNavigate();

  const generateTrackingId = (status) => {
  const date = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const random = Math.random().toString(36).substring(2, 4).toUpperCase() + Math.floor(Math.random() * 90 + 10);
  return `${status.toUpperCase()}-${date}-${random}`;
};

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
const file = e.target.files[0];
    console.log(file.name)
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should not exceed 5MB.");
        e.target.value = "";
        return;
      }
      setSelectedImage(file);
    }
  };


  //code for POST request
  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log(selectedImage);

  const listing = {
    ...formData,
    date: serverTimestamp(),
    trackingId: generateTrackingId(formData.status),
    imageURL: '',
    userID: auth.currentUser.uid
  };

  // if there’s an image to upload, do it first and merge it into inputData
    if (selectedImage) {
      const imageUrl = await uploadImageToCloudinary(selectedImage);
      console.log("Image URL:", imageUrl);
      if (!imageUrl) {
        console.error("Image upload failed");
        return;
      }
      listing.imageURL = imageUrl;
    }

  try {
  //   const res = await fetch('/api/listings', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(listing),
  //   });

  //   if (!res.ok) {throw new Error('Failed to submit');}
  //   else{
  //      alert('Listing successfully submitted!');
  //      const data = res.json();
  //     navigate(`/listings`)
  //   }
  addListing(listing)
  navigate(`/listings`)

  } catch (error) {
    console.error(error);
    alert('Something went wrong.');
  }

};


  return (
    <Container fluid className="py-5 px-3" style={{ backgroundColor: '#F4D04E', minHeight: '100vh' }}>
      <Card className="shadow mx-auto" style={{ maxWidth: '600px' }}>
        <Card.Header>
          <h4 className="mb-0 fw-bold">Add New Lost/Found Object </h4>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Item Name</Form.Label>
              <Form.Control
                id="title"
                type="text"
                placeholder="e.g. Water Bottle"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Location</Form.Label>
              <Form.Control
                id="location"
                type="text"
                placeholder="e.g. Cafeteria"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Contact</Form.Label>
              <Form.Control
                id="contact"
                type="text"
                placeholder="Phone number or email"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Description (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                id="description"
                rows={3}
                placeholder="Add any special details..."
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Status</Form.Label>
              <Form.Select
                id="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="">Select status</option>
                <option value="Lost">Lost</option>
                <option value="Found">Found</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Upload an image</Form.Label>
              <Form.Control
                type="file"
                id="images"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100 fw-bold">
              Submit Listing
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateListingForm;
