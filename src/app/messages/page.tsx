"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const mockConversations = [
  {
    id: 1,
    user: "Alice",
    lastMessage: "Hey, is the iPhone still available?",
    timestamp: "10:30 AM",
    unread: true,
    spam: false,
  },
  {
    id: 2,
    user: "Bob",
    lastMessage: "Thanks for the quick response!",
    timestamp: "11:00 AM",
    unread: false,
    spam: false,
  },
  {
    id: 3,
    user: "Charlie",
    lastMessage: "Can we meet tomorrow for the item?",
    timestamp: "12:15 PM",
    unread: true,
    spam: false,
  },
  {
    id: 4,
    user: "Spammer",
    lastMessage: "Win a free vacation! Click here!",
    timestamp: "9:45 AM",
    unread: false,
    spam: true,
  },
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
  const [selectedConversation, setSelectedConversation] = useState<number | null>(
    null
  );
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter logic for conversations
  const filteredConversations = mockConversations.filter((conv) => {
    if (filter === "All") return true;
    if (filter === "Unread" && !conv.unread) return false;
    if (filter === "Spam" && !conv.spam) return false;
    return (
      conv.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedConversation) return;
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-200px)]">
      {/* Conversations Sidebar (Desktop View) */}
      <div className="w-full md:w-1/3 glassmorphism p-4 overflow-y-auto mb-4 md:mb-0 md:mr-4">
        {/* Search Bar and Filter Icon */}
        <div className="mb-4 flex items-center justify-between">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search conversations..."
            className="w-full p-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
          />
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="ml-2 p-2 rounded-md bg-white/10 hover:bg-white/20 transition duration-300"
          >
            <ChevronDownIcon className="h-5 w-5 text-primary" />
          </button>
        </div>

        {/* Filter Options (Dropdown) */}
        {isFilterOpen && (
          <div className="mb-4 space-y-2">
            <button
              onClick={() => setFilter("All")}
              className={`block py-2 px-4 rounded-md ${
                filter === "All" ? "bg-primary text-background" : "hover:bg-white/10"
              }`}
            >
              All Messages
            </button>
            <button
              onClick={() => setFilter("Unread")}
              className={`block py-2 px-4 rounded-md ${
                filter === "Unread" ? "bg-primary text-background" : "hover:bg-white/10"
              }`}
            >
              Unread
            </button>
            <button
              onClick={() => setFilter("Spam")}
              className={`block py-2 px-4 rounded-md ${
                filter === "Spam" ? "bg-primary text-background" : "hover:bg-white/10"
              }`}
            >
              Spam
            </button>
          </div>
        )}

        {/* Conversation List */}
        <h2 className="text-2xl font-bold mb-4 text-primary text-glow">Conversations</h2>
        {filteredConversations.map((conv) => (
          <div
            key={conv.id}
            className={`p-3 mb-2 rounded-md cursor-pointer transition duration-300 flex justify-between items-center ${
              selectedConversation === conv.id
                ? "bg-primary text-background"
                : "hover:bg-white/10"
            }`}
            onClick={() => setSelectedConversation(conv.id)}
          >
            <div>
              <h3 className="font-bold">{conv.user}</h3>
              <p className="text-sm opacity-80">{conv.lastMessage}</p>
            </div>
            <p className="text-sm opacity-70">{conv.timestamp}</p>
          </div>
        ))}
      </div>

      {/* Message Viewer (Desktop View) */}
      <div className="flex-grow glassmorphism p-4 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Message Header */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">
                {mockConversations.find(
                  (conv) => conv.id === selectedConversation
                )?.user || ""}
              </h3>
              <p className="text-sm text-gray-500">
                {mockConversations.find(
                  (conv) => conv.id === selectedConversation
                )?.timestamp || ""}
              </p>
            </div>

            {/* Message List */}
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

            {/* Message Input Form */}
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
            <p className="text-gray-400">Select a conversation to start messaging</p>
          </div>
        )}
      </div>

      {/* Mobile View Adjustments */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-md p-4">
        <div className="flex items-center justify-between">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search conversations..."
            className="w-full p-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
          />
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="ml-2 p-2 rounded-md bg-white/10 hover:bg-white/20 transition duration-300"
          >
            <ChevronDownIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
        {isFilterOpen && (
          <div className="mt-2 space-x-2 flex">
            <button
              onClick={() => setFilter("All")}
              className={`py-2 px-4 rounded-md ${
                filter === "All" ? "bg-primary text-background" : "hover:bg-white/10"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("Unread")}
              className={`py-2 px-4 rounded-md ${
                filter === "Unread" ? "bg-primary text-background" : "hover:bg-white/10"
              }`}
            >
              Unread
            </button>
            <button
              onClick={() => setFilter("Spam")}
              className={`py-2 px-4 rounded-md ${
                filter === "Spam" ? "bg-primary text-background" : "hover:bg-white/10"
              }`}
            >
              Spam
            </button>
          </div>
        )}
      </div>
    </div>
  );
}