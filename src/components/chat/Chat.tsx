/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Socket } from "socket.io-client";
import io from "socket.io-client";

const Chat = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [_isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const newSocket: Socket = io("http://localhost:3000", {
      transports: ["websocket"],
    });

    newSocket.on("connect", () => {
      console.log("Socket connected");
      setIsConnected(true);
    });

    newSocket.on("disconnect", () => {
      console.log("Socket disconnected");
      setIsConnected(false);
    });

    newSocket.on("new message", (data) => {
      if (
        !messages.some(
          (msg) =>
            msg.username === data.username && msg.message === data.message
        )
      ) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [messages]); // messages 배열 변경 시에만 이펙트 재실행

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket?.emit("new message", { username: "YourUsername", message });
      setMessage("");
    }
  };

  return (
    <div>
      <h1>Real-Time Chat</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            {msg.username}: {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
