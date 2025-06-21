# Campus Lost & Found (Campus LF)

**Author:** Muhammad bin Ramzan  
**Roll Number:** F23BDOCS1M01110
**Section:** F23 CS-1M
**Mentor:** Sir Omer Ajmal


---

## 🔍 Project Overview

A simple yet functional **Lost and Found web application** for campus students to report lost/found items. Built using **React**, **Bootstrap**, and **Firebase**.

---

## 🔥 Firebase Features Implemented

- **Firestore Database**: Store and fetch listings (lost/found items).
- **Authentication**:
  - Email/password signup and login.
  - Google Sign-in using Firebase Auth.
- **Image Uploading**:
  - (Optional) Cloudinary used for free-tier image hosting.
- **User-based Listing Actions**:
  - Only listing owner can delete or mark as claimed.
- **Deployment**:
  - Hosted using **Firebase Hosting**.
  - GitHub CI/CD setup supported (auto-deploy on push to `main`).

---

## 💻 Run Locally with Mock API

If you want to run the project **without Firebase**, you can use the local `db.json` file:

1. Open terminal and run:
   ```bash
   npm run server
   ```
   This will start a JSON server at `http://localhost:5000`.

2. In the code, **uncomment** the API-fetching code in helper functions that use `fetch()` instead of Firebase.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

> Make sure to configure your Firebase credentials in `firebase.js`.

---

## 🔗 Live Demo

[🌐 Visit Live Website](https://campus-lf.web.app)

---
