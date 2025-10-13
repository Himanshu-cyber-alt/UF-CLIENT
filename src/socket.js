    import { io } from "socket.io-client";
    export const socket = io("https://uf-server.onrender.com",{
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

    // // socket.js



