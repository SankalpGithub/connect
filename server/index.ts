import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/user";
import connectDB from "./config/db";

const app = express();
app.use(cors());
app.use(express.json());

connectDB()
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// User routes
app.use("/users", userRoutes);

// Create HTTP server
const server = http.createServer(app);

// Socket.IO server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const userSockets: { [userId: string]: string[] } = {};

io.on("connection", (socket) => {
  console.log("⚡ User connected:", socket.id);

 socket.on("registerSocket", (userId) => {
  if (!userSockets[userId]) {
    userSockets[userId] = [];
  }
  userSockets[userId].push(socket.id);
  console.log("userSocket: ",userSockets)
});

  socket.emit("receiveMessage", { message: "Welcome to the chat!" });

  socket.on("joinRoom", (conversationId) => {
    socket.join(conversationId);
    console.log(`User ${socket.id} joined room ${conversationId}`);
  });

  socket.on("sendMessage", (data) => {
    console.log("📩 New Message:", data);
    io.to(data.conversationId).emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
  for (const [userId, socketIds] of Object.entries(userSockets)) {
    userSockets[userId] = socketIds.filter((id) => id !== socket.id);
    if (userSockets[userId].length === 0) {
      delete userSockets[userId];
    }
  }
  console.log("userSocket after disconnect: ",userSockets)
});
;
});

// Start server
server.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
