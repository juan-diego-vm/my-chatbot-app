import React from 'react';
import ChatBot from 'react-chatbotify';
// import 'react-chatbotify/dist/style.css'; // Include the styling
import './styles/style.css';

// Basic configuration
const config = {
  initialMessages: [{ type: "text", content: "Hello! How can I help you today?" }]
};

// Basic message parser
const MessageParser = ({ children }) => {
  const parse = (message) => {
    console.log(message);
  };

  return <div>{children}</div>;
};

// Basic action provider
const ActionProvider = ({ createChatBotMessage }) => {
  const handleHello = () => {
    const message = createChatBotMessage("Hi there! How can I assist?");
    console.log(message);
  };

  return { handleHello };
};

function App() {
  return (
    <div className="App">
      <ChatBot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div>
  );
}

export default App;
