"use client";

import { useState } from "react";

const mockConversations = [
  { id: 1, user: "Alice", lastMessage: "Hey, is the iPhone still available?" },
  { id: 2, user: "Bob", lastMessage: "Thanks for the quick response!" },
  { id: 3, user: "Charlie", lastMessage: "Can we meet tomorrow for the item?" },
];

const mockMessages = [
  {
    id: 1,
    sender: "Alice",
    content: "Hey, is the iPhone still available?",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    sender: "You",
    content: "Yes, it is! Are you interested?",
    timestamp: "10:35 AM",
  },
  {
    id: 3,
    sender: "Alice",
    content: "Definitely! Can I see more photos?",
    timestamp: "10:37 AM",
  },
  {
    id: 4,
    sender: "You",
    content: "Sure, I'll send them right away.",
    timestamp: "10:40 AM",
  },
];

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<
    number | null
  >(null);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement send message logic here
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-200px)]">
      <div className="w-full md:w-1/3 glassmorphism p-4 overflow-y-auto mb-4 md:mb-0 md:mr-4">
        <h2 className="text-2xl font-bold mb-4 text-primary text-glow">
          Conversations
        </h2>
        {mockConversations.map((conv) => (
          <div
            key={conv.id}
            className={`p-3 mb-2 rounded-md cursor-pointer transition duration-300 ${
              selectedConversation === conv.id
                ? "bg-primary text-background"
                : "hover:bg-white/10"
            }`}
            onClick={() => setSelectedConversation(conv.id)}
          >
            <h3 className="font-bold">{conv.user}</h3>
            <p className="text-sm opacity-80">{conv.lastMessage}</p>
          </div>
        ))}
      </div>
      <div className="flex-grow glassmorphism p-4 flex flex-col">
        {selectedConversation ? (
          <>
            <div className="flex-grow overflow-y-auto mb-4 space-y-4">
              {mockMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "You" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`inline-block p-2 rounded-lg ${
                      msg.sender === "You"
                        ? "bg-primary text-background"
                        : "bg-white/10"
                    }`}
                  >
                    <p>{msg.content}</p>
                    <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-grow p-2 rounded-l-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Type a message..."
              />
              <button
                type="submit"
                className="bg-primary text-background font-bold py-2 px-4 rounded-r-md hover:bg-primary/80 transition duration-300"
              >
                Send
              </button>
            </form>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">
              Select a conversation to start messaging
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
