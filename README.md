
# 🏡 Havenly – Seamless Vacation & Stay Rentals

**Havenly** is a modern, full-stack web platform that connects travelers with unique places to stay. Designed with user experience, security, and reliability in mind, it allows hosts to list properties and guests to find their perfect getaway—all in one place.

---

## 🎬 Demo

🔗 [Click here to watch the full demo](https://drive.google.com/file/d/1P9lDrkK47Mefkhm01gyUL6zQCR1IPk_N/view?usp=sharing)

[![Watch Demo](https://via.placeholder.com/800x400.png?text=Watch+Havenly+Demo)](https://drive.google.com/file/d/1P9lDrkK47Mefkhm01gyUL6zQCR1IPk_N/view?usp=sharing)

---

## Key Highlights

- 🌍 **Interactive Map Search:** Browse listings visually using a dynamic map interface.
- ⭐ **5-Star Review System:** Guests can leave ratings and feedback on properties.
- 🧾 **User-Centered Listings:** Hosts can post, manage, and remove listings with full ownership control.
- 🔐 **Secure Access:** Login and signup with encrypted password storage and protected routes.
- ✅ **Verified Ownership:** Only property owners can edit or delete their listings.
- 📱 **Mobile-Friendly:** Responsive layout ensures seamless usage across all devices.

---

## 🧰 Tech Stack

### Frontend
- **React.js** – Component-based UI
- **Tailwind CSS** – Modern, utility-first styling
- **Axios** – API requests
- **Map API** – Interactive geographic map integration

### Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB + Mongoose** – NoSQL database with elegant schemas
- **JWT + Bcrypt** – Secure authentication and password hashing

---

## 🗂 Project Structure

```
Havenly/
│
├── client/                # Frontend code (React)
│   ├── components/        # Reusable UI components
│   ├── pages/             # Core pages (Home, Listing, etc.)
│   ├── App.js             # Entry point
│   └── ...
│
├── server/                # Backend code (Node/Express)
│   ├── routes/            # API routes
│   ├── controllers/       # Logic for each endpoint
│   ├── models/            # MongoDB models (User, Listing, etc.)
│   ├── middleware/        # Auth and error handling
│   └── ...
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yamini-thirumani/Havenly.git
cd Havenly

# Backend setup
cd server
npm install

# Frontend setup
cd ../client
npm install
```

### Environment Setup

Create a `.env` file inside the `server/` directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
```

### Run the App

```bash
# Start backend
cd server
npm start

# Start frontend
cd ../client
npm start
```

Visit `http://localhost:3000` in your browser.

---

## 🖼 Screenshots

> *(Add screenshots here from your UI to showcase the homepage, map interface, review system, etc.)*

---

## ✨ Upcoming Enhancements

- 📅 Booking calendar with availability filtering  
- 📧 Email verification and notifications  
- 💳 Payment integration for secure transactions  
- 🌐 Deployment to cloud with CI/CD

---

## 🙋‍♀️ About Me

👋 Hi! I’m [Yamini Thirumani](https://github.com/yamini-thirumani) — a passionate developer focused on building intuitive, secure, and performance-driven web applications.  
This project is part of my journey to create impactful solutions through technology.

---

## 🤝 Feedback & Contributions

Found a bug or have suggestions?  
Feel free to open an issue or fork this repo and contribute!

---

> Made with 💖 and clean code.
