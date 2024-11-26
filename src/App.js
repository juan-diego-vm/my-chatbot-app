import React from 'react';
import ChatBot from 'react-chatbotify';
import './styles/style.css'; // Import your local styles
import config from './chatbot/config'; // Import your config

function App() {
  return (
    <div className="App">
      <ChatBot config={config} />
    </div>
  );
}

export default App;
