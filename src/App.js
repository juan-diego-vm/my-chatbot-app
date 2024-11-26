import ChatBot from "react-chatbotify";

const MyChatBot = () => {
	let hasError = false;

	// example openai conversation
	// you can replace with other LLMs such as Google Gemini
	const call_amalia = async (params) => {
    try {
        const response = await fetch('https://chats.mytrip.ai/amalia-assistant/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: params.userInput, // dynamically use the user's input
                client_id: 'testing_261120241143', // replace with a relevant client_id if needed
                flag: 1,
            }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        // Assuming the response has a field called `reply` for the chatbot's response
        if (data.response) {
            await params.injectMessage(data.response);
        } else {
            throw new Error("Response did not include a reply field");
        }
    } catch (error) {
        console.error(error);
        await params.injectMessage("Unable to connect to the chat service. Please try again.");
        hasError = true;
    }
};
	const flow={
		start: {
			message: "Hello! My name is Amalia, how can I help you today?",
			path: (params) => {
			hasError = false; 
			return "loop";
			},
			// isSensitive: true,
		},

		loop: {
			message: async (params) => {
				await call_amalia(params);
			},
			path: () => {
				if (hasError) {
					return "start"
				}
				return "loop"
			}
		}
	}
	return (
		// <ChatBot settings={{general: {embedded: true}, chatHistory: {storageKey: "example_llm_conversation"}}} flow={flow}/>
		<ChatBot flow={flow}/>
	);
};

// render(<MyChatBot/>)/
export default MyChatBot;