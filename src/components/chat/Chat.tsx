/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Socket } from "socket.io-client";
import io from "socket.io-client";
import { useDarkMode } from "../../context/Dark-mode";
import EmojiBtn from "../emojiBtn/EmojiBtn";

const Chat = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const newSocket: Socket = io("http://localhost:3000", {
      transports: ["websocket"],
    });

    newSocket.on("connect", () => {
      console.log("Socket connected");
    });

    newSocket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    newSocket.on("new message", (data) => {
      setMessages((prevMessages) => {
        if (
          !prevMessages.some(
            (msg) =>
              msg.username === data.username && msg.message === data.message
          )
        ) {
          return [...prevMessages, data];
        }
        return prevMessages;
      });
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket?.emit("new message", { username: "YourUsername", message });
      setMessage("");
    }
  };

  const isEmojiSelect = (emoji: any) => {
    setMessage((prevText) => prevText + emoji);
  };

  const isKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.repeat) {
      sendMessage();
    }
  };

  return (
    <section
      className={`relative flex flex-col my-[0] mx-auto w-[100%] h-[800px] group border-1 border-solid z-0 border-slate-300 rounded-lg shadow-md ${
        darkMode ? "shadow-white" : "shadow-slate-500"
      }`}
    >
      <div className="bg-slate-60 h-[90%] bottom-0 overflow-scroll overflow-x-hidden mb-[5%]">
        {messages.map((msg, index) => (
          <div key={index}>
            {msg.username}: {msg.message}
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 h-[60px] group cursor-pointer flex-1 flex items-center justify-center w-full rounded-lg border-2 border-solid border-grey-200 transition-opacity duration-500 group-hover:border-blue-300 group-focus-within:border-blue-300 opacity-100">
        <input
          placeholder="할 얘기가 있으신가요?"
          className="mx-[2%] w-[85%] h-[90%] text-lg placeholder:text-slate-300 outline-none bg-transparent"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={isKeyDown}
        />
        <div className="z-410 flex-1 mx-[1%] h-[90%]">
          <EmojiBtn onEmojiSelect={isEmojiSelect} />
        </div>
      </div>
    </section>
  );
};

export default Chat;
