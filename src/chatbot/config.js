import ActionProvider from './ActionProvider';

const config = {
  botName: "MyChatBot",
  initialMessages: [
    { type: "text", content: "Hello! How can I assist you today?" },
  ],
  actionProvider: ActionProvider,
};

export default config;
