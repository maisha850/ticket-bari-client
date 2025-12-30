# 🎟️TicketBari


## Project Overview

This is a full-featured online ticket booking platform with a dynamic homepage, hero slider, admin-controlled ads, and the latest ticket listings. Only admin-verified tickets are visible, and the platform offers a secure booking flow with quantity validation, countdown timers, and real-time status. It integrates Stripe payments for safe transactions with automatic ticket updates. Dedicated User, Vendor, and Admin Dashboards allow booking management, ticket addition, revenue tracking, approvals, role management, and fraud detection. Role-based access control ensures a safe, organized experience for all users.


### Live Link: https://ticket-bari-client12.netlify.app/

## Key Features of TicketBari

- 🏠 Dynamic Homepage – Hero slider, admin-controlled ads (max 6), and latest ticket listings

- ✅ Admin-Verified Tickets – Only approved tickets are visible to users

- 🔒 Secure Booking Flow – Quantity validation, countdown timer, and booking status tracking

- 💳 Stripe Payment Integration – Real-time price calculation and automatic ticket updates

- 👤 User Dashboard – Manage bookings, payments, and transaction history

- 🛠️ Vendor Dashboard – Add tickets, handle booking requests, and view revenue analytics

- 🏢 Admin Dashboard – Ticket approval, user role management, fraud detection, and ticket advertising

- 🔐 Role-Based Access Control – Protected routes for Users, Vendors, and Admins


## Tech Stack

- react router

- tailwindcss

- daisyui

- react-icons 

- swiper 

- aos 

- firebase 

- axios 

- @tanstack/react-query 

- @stripe/stripe-js 

-  react-fast-marquee

- recharts

  ## 🧑‍💻 How to Run Locally

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/maisha850/ticket-bari-client.git
cd ticket-bari-client
npm install
```
### **2️⃣ Create environment variables**

*Create a `.env.local` file in the root directory and add your Firebase configuration:*
```bash
VITE_apiKey=your_api_key  
VITE_authDomain=your_auth_domain  
VITE_projectId=your_project_id  
VITE_storageBucket=your_storage_bucket  
VITE_messagingSenderId=your_sender_id  
VITE_appId=your_app_id
```

### **3️⃣ Start the development server**
```bash
npm run dev
