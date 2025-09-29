"use client"; // if using Next.js App Router

import React, { use, useEffect, useState } from "react";
import { connectSocket, getSocket } from "../../utils/socket";

const socket = getSocket();

const Home = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>("");
  const [user, setuser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
     if (!storedUser) return;

    const user = JSON.parse(storedUser);
     setuser(user);

    if (!socket) return;

    // 🔹 Connect socket here
    connectSocket(user._id);
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const sendMessage = () => {
    if (!input || !selectedUser) return;

    const msg = {
      senderId: user._id, // 🔹 you’ll replace this with logged-in user later
      receiverId: selectedUser._id, // 🔹 chosen user from dropdown
      conversationId: "conv1", // 🔹 replace with real conversation id
      message: input,
    };

    socket?.emit("sendMessage", msg);
    setInput("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>

      {/* User selection */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Select user to chat with:</label>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">-- Select User --</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.username} ({user.email})
            </option>
          ))}
        </select>
      </div>

      {/* Messages box */}
      <div className="border p-2 mb-2 h-64 overflow-y-scroll">
        {messages.map((msg, index) => (
          <p key={index}>
            <b>{msg.senderId}:</b> {msg.message}
          </p>
        ))}
      </div>

      {/* Input + Send */}
      <div className="flex gap-2">
        <input
          type="text"
          className="border p-2 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="bg-blue-500 text-white px-4" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Home;
