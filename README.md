# 📚 Bookstore App

A simple **Bookstore Management System** built using the MERN stack that allows users to perform full **CRUD (Create, Read, Update, Delete)** operations on books.

---

## 🚀 Features

* ➕ Add new books
* 📖 View all books
* ✏️ Update book details
* ❌ Delete books
* 🔍 View single book details
* 📦 REST API backend (Node.js + Express)
* 🗄️ MongoDB database integration

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* Axios
* CSS / Tailwind (if used)

**Backend:**

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📁 Project Structure

```
bookstoreapp/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── components/
│   └── App.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/bookstoreapp.git
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm run start
```

---

### 3. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /books     | Get all books   |
| GET    | /books/:id | Get single book |
| POST   | /books     | Add new book    |
| PUT    | /books/:id | Update book     |
| DELETE | /books/:id | Delete book     |

---

## 📸 Screenshots

*(Add your app screenshots here)*
(./images/bookstoreapp1.png)

---

## 👨‍💻 Author

* Developed by: **Ravikant**
* GitHub: https://github.com/ravikant03

---

## 📌 Future Improvements

* Authentication system (Login/Register)
* Search & filter books
* Pagination
* UI improvements

---

## 📝 License

This project is open-source and free to use.
