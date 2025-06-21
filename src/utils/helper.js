import { db, auth, googleProvider } from '../config/firebase';
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc, 
  query,
  limit
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate()


export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "campus_lf_uploads");

  const cloudName = 'dme26ibk1'

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Upload failed");

    const data = await res.json();
    console.log(data.secure_url);
    return data.secure_url;
  } catch (error) {
    console.error("Image Upload error:", error);
    return null;
  }
};





//firebase functions

// Ref to the listings collection
const listingsRef = collection(db, 'listings');

// add new listing
export const addListing = async (listing) => {
  const docRef = await addDoc(listingsRef, listing);
  return docRef.id;
};

// get all listings
export const getAllListings = async () => {
  const snapshot = await getDocs(listingsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// get single listing by id
export const getListingById = async (id) => {
  const docRef = doc(db, 'listings', id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

// update a listing
export const updateListing = async (id, updatedData) => {
  const docRef = doc(db, 'listings', id);
  await updateDoc(docRef, updatedData);

};

// delete 
export const deleteListing = async (id) => {
  const docRef = doc(db, 'listings', id);
  await deleteDoc(docRef);
};

// recent listings
export const getRecentListings = async (count = 3) => {
  const recentQuery = query(listingsRef, limit(count));
  const snapshot = await getDocs(recentQuery);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};



//authentication functions
export const signUpWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
  navigate('/new')
}

export const loginWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
  navigate('/new')
}

export const loginWithGoogle = () => {
  signInWithPopup(auth, googleProvider);
  navigate('/new')
}