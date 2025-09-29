# 💬 Connect – Real-time Chat Application

Connect is a modern real-time chat application built with **Node.js, Express, Socket.IO, and React/Next.js**.  
It allows users to communicate instantly with features like one-to-one messaging, group chats, and typing indicators.  

---

## ✨ Features
- 🔐 **Authentication & User Management** – Secure login/signup
- 💬 **1-on-1 Chat** – Private conversations between users
- 👥 **Group Chat** – Create and manage group conversations
- 📡 **Real-time Messaging** – Powered by **WebSockets (Socket.IO)**
- ✍️ **Typing Indicators** – See when someone is typing
- ✅ **Message Read Receipts**
- 🖼️ **Media Sharing** – Images, files, and documents
- 🔔 **Notifications** – Get notified for new messages
- 🌐 **Responsive UI** – Works across desktop & mobile
- 📦 **Monorepo Structure** – `/client` (frontend) + `/server` (backend)

---

## 📂 Project Structure
connect/
├── client/ # Frontend (React/Next.js)
├── server/ # Backend (Node.js, Express, Socket.IO)
├── .gitignore
├── README.md
└── package.json # (Optional root package.json for monorepo)

---

## 🛠️ Tech Stack
**Frontend (client)**
- React / Next.js  
- Tailwind CSS / Material UI  
- Zustand / Redux (for state management)  

**Backend (server)**
- Node.js  
- Express.js  
- Socket.IO (real-time communication)  
- MongoDB + Mongoose (database)  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/connect.git
cd connect
```
## 2. Setup the server
```
cd server
npm install   # or pnpm install
npm run dev
```
## 3. Setup the client
```
cd ../client
npm install   # or pnpm install
npm run dev

```
## 4. Access the app

- Client (Frontend): http://localhost:3000

- Server (Backend API): http://localhost:5000

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a PR.

## 👨‍💻 Author

Sankalp Gaikwad
Building products with passion ⚡
