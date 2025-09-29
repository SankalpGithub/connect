// utils/socket.ts
import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://localhost:5000";
let socket: Socket | null = null;

export const connectSocket = (userId: string): Socket => {
  if (!socket) {
    socket = io(SOCKET_URL, {
      autoConnect: true,
    });

    socket.on("connect", () => {
      console.log("⚡ Connected:", socket!.id);
      socket!.emit("registerSocket", userId);
      socket!.on("receiveMessage", (data) => {
        console.log("📨 Message received:", data);
      });

      return () => {
        socket?.off("receiveMessage");
      }
    });
  }
  return socket;
};

export const getSocket = (): Socket | null => socket;
