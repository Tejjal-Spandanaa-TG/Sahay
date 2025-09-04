import React, { useState } from "react";

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    setMessages([...messages, { user: "me", text: input }, { user: "ai", text: "Sab theek ho jayega!" }]);
    setInput("");
  };

  return (
    <div className="p-4">
      {messages.map((msg, i) => (
        <p key={i} className={msg.user === "me" ? "text-blue-600" : "text-green-600"}>
          {msg.text}
        </p>
      ))}
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Sahay - AI Wellness Companion</h1>
      <ChatWindow />
    </div>
  );
}
