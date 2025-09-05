"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    { text: "Hi, I'm spider season. I bend language to signal new forms in poem and verse.", isUser: false }
  ]);
  const [input, setInput] = useState("");

  // Generate stars for night sky
  useEffect(() => {
    const starsContainer = document.getElementById("stars");
    if (starsContainer && starsContainer.childNodes.length === 0) {
      for (let i = 0; i < 120; i++) {
        const star = document.createElement("div");
        star.className = "star";
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const delay = Math.random() * 4;
        star.style.top = `${top}%`;
        star.style.left = `${left}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        starsContainer.appendChild(star);
      }
    }
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    const message = input.trim();
    if (message) {
      setMessages((msgs) => [...msgs, { text: message, isUser: true }]);
      setInput("");
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          { text: "I'm a poetry chatbot with a spider constellation in the night sky. Can I spin you a verse or 8?", isUser: false }
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <style jsx global>{`
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow-x: hidden;
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        .night-sky {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #050a1c;
          overflow: hidden;
          z-index: -1;
        }
        .pixelation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0.7;
          animation: twinkle 4s infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .constellation-star {
          position: absolute;
          background-color: #fff;
          border-radius: 50%;
          box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.4);
          animation: pulse 3s infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 5px 2px rgba(255,255,255,0.2);}
          50% { box-shadow: 0 0 15px 6px rgba(255,255,255,0.6);}
        }
        .constellation-line {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.2);
          transform-origin: 0 0;
        }
        .content {
          position: relative;
          z-index: 1;
          color: white;
          min-height: 100vh;
        }
        .chat-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          max-height: 60vh;
          overflow-y: auto;
        }
        .message {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          padding: 15px;
          border-radius: 10px;
        }
        .user-message {
          background-color: rgba(0, 0, 0, 0.6);
          margin-left: 50px;
        }
        .bot-message {
          background-color: rgba(50, 50, 100, 0.6);
          margin-right: 50px;
        }
        .input-container {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 20px;
          background: linear-gradient(to top, rgba(5, 10, 28, 0.9), rgba(5, 10, 28, 0.5), transparent);
        }
        .input-form {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          position: relative;
        }
        .input-area {
          width: 100%;
          padding: 12px 50px 12px 15px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 25px;
          background: rgba(5, 10, 28, 0.7);
          color: white;
          resize: none;
        }
        .send-button {
          position: absolute;
          right: 10px;
          top: 8px;
          padding: 8px 20px;
          border: none;
          border-radius: 20px;
          background-color: #2f8fdf;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
      {/* NIGHT SKY BACKGROUND */}
      <div className="night-sky">
        <div className="pixelation"></div>
        <div className="stars" id="stars"></div>
        {/* Constellation */}
        <div className="constellation">
          {/* Spider body */}
          <div className="constellation-star" style={{ width: 12, height: 12, left: 100, top: 100 }} />
          {/* Spider head */}
          <div className="constellation-star" style={{ width: 8, height: 8, left: 100, top: 70 }} />
          <div className="constellation-line" style={{ width: 30, height: 2, left: 100, top: 100, transform: "rotate(-90deg)" }} />
          {/* Legs pairs */}
          {/* Front legs */}
          <div className="constellation-star" style={{ width: 6, height: 6, left: 130, top: 60 }} />
          <div className="constellation-line" style={{ width: 40, height: 1, left: 100, top: 70, transform: "rotate(-20deg)" }} />
          <div className="constellation-star" style={{ width: 6, height: 6, left: 70, top: 60 }} />
          <div className="constellation-line" style={{ width: 40, height: 1, left: 100, top: 70, transform: "rotate(200deg)" }} />
          {/* Middle front legs */}
          <div className="constellation-star" style={{ width: 6, height: 6, left: 140, top: 90 }} />
          <div className="constellation-line" style={{ width: 45, height: 1, left: 100, top: 100, transform: "rotate(-15deg)" }} />
          <div className="constellation-line" style={{ width: 45, height: 1, left: 100, top: 100, transform: "rotate(155deg)" }} />
          {/* Back legs */}
          <div className="constellation-star" style={{ width: 6, height: 6, left: 130, top: 150 }} />
          <div className="constellation-line" style={{ width: 40, height: 1, left: 100, top: 100, transform: "rotate(40deg)" }} />
          <div className="constellation-star" style={{ width: 6, height: 6, left: 70, top: 150 }} />
          <div className="constellation-line" style={{ width: 40, height: 1, left: 100, top: 100, transform: "rotate(140deg)" }} />
        </div>
      </div>
      {/* CHAT UI */}
      <div className="content">
        <div className="chat-container" ref={chatContainerRef}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message ${msg.isUser ? "user-message" : "bot-message"}`}
            >
              <div>{msg.text}</div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <form
            className="input-form"
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
          >
            <textarea
              className="input-area"
              placeholder="Send a message..."
              rows={1}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="send-button"
              type="button"
              onClick={handleSend}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
