import React, { useEffect, useState } from "react";
import "./Chat.css";
import Axios from 'axios';
import socketIOClient from "socket.io-client";
import { AuthContext } from "../providers/authProvider";
import { useContext } from "react";

const ENDPOINT = "http://localhost:3001";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [chatHistories, setChatHistories] = useState({});
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const { auth, user } = useContext(AuthContext)
  // const [chatTitle, setChatTitle] = useState('')

  useEffect(() => {
    if (socket) return;

    const newSocket = socketIOClient(ENDPOINT);
    setSocket(newSocket);

    const fetchChats = async () => {
      try {
        const response = await Axios.get("/api/chats");
        setChats(response.data.chats);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchChats();

    return () => {
      newSocket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    if (!socket) return;

    socket.on("chat message", (msg) => {
      if (msg.chatId === selectedChat) {
        setChatHistories((prevHistories) => ({
          ...prevHistories,
          [selectedChat]: [...(prevHistories[selectedChat] || []), msg],
        }));
      }
    });

    return () => {
      socket.off("chat message");
    };
  }, [socket, selectedChat]);

  useEffect(() => {
    if (selectedChat) {
      fetchChatMessages(selectedChat);
    }
  }, [selectedChat]);

  const fetchChatMessages = async (chatId) => {
    try {
      const response = await Axios.get(`/api/chat/${chatId}`);
      setChatHistories((prevHistories) => ({
        ...prevHistories,
        [chatId]: response.data.chatMessages,
      }));
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleCreateChat = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/api/chats", { title });
      setChats([...chats, { id: response.data.chatId, title }]);
      setTitle("");
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSelectChat = (chatId) => {
    // add here
    // setChatTitle(chatId)
    setSelectedChat(chatId);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(`/api/chat/${selectedChat}/message`, { username: 'YourUsername', message });
      const chatMessage = response.data.chatMessage;
      socket.emit("new_message", { chatId: selectedChat, message });
      setChatHistories((prevHistories) => ({
        ...prevHistories,
        [selectedChat]: [...(prevHistories[selectedChat] || []), chatMessage],
      }));
      setMessage("");
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <div className="chat-container">
      <div className="chat-left-sidebar">
        <div className="chat-left-header"> Chats</div>
        <form onSubmit={handleCreateChat}>
          <input
            type="text"
            placeholder="Create new chat"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Create</button>
        </form>
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="old-chat"
            onClick={() => handleSelectChat(chat.id)}
          >
            {chat.title}
          </div>
        ))}
      </div>
      <div className="chat-main">
        {/* <div className="chat-left-header"> {chatTitle} </div> */}
        {selectedChat && (
          <>
            <div className="chat-history">
              {(chatHistories[selectedChat] || []).map((msg, index) => (
                <div key={index} className="message">
                  <img className='div_chat-image rounded-xl' src={msg.image} ></img>{msg.message}
                </div>
              ))}
            </div>
            <form className="chat-input" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
