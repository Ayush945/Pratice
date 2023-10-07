import React, { useState, useRef, useEffect } from 'react';

function ChatRoom() {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);
    const chatContainerRef = useRef(null);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputText.trim() !== '') {
            try {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${inputText.toLowerCase()}`
                );
                if (response.ok) {
                    const data = await response.json();

                    const pokemonTypes = data.types.map((typeData) => typeData.type.name);

                    setMessages((prevMessages) => [
                        ...prevMessages,
                        {
                            text: inputText,
                            types: pokemonTypes.join(', '),
                            sender: 'user',
                            timestamp: new Date().toLocaleTimeString(),
                        },
                        {
                            text: `Type - ${pokemonTypes.join(', ')}`,
                            sender: 'bot',
                            timestamp: new Date().toLocaleTimeString(),
                        },
                    ]);
                } else {
                    console.error('Pokemon not found');
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        {
                            text: inputText,
                            sender: 'user',
                            timestamp: new Date().toLocaleTimeString(),
                        },
                        {
                            text: 'No such Pokemon',
                            sender: 'bot',
                            timestamp: new Date().toLocaleTimeString(),
                        },
                    ]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setInputText('');
        }
    };

    useEffect(() => {

        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            console.log('Scroll Top is :', chatContainerRef.current.scrollTop);
            console.log('Current is: ', chatContainerRef.current);
            console.log('Scroll Height is: ', chatContainerRef.current.scrollHeight);
        }
    }, [messages]);

    return (
        <>
            <div className="w-7/12 h-[600px] bg-pink-400 rounded-3xl flex flex-col justify-between mx-auto mt-20 p-4 relative">
                <div className="bg-white rounded-t-3xl py-2 px-4 text-center text-blue-500">
                    Chat Bot
                </div>
                <div
                    className="bg-white rounded-lg p-4 flex-grow overflow-y-scroll"
                    ref={chatContainerRef}
                    style={{ scrollbarWidth: 'none', overflowX: 'hidden' }}
                >
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`p-2 mb-2 rounded-md ${message.sender === 'user'
                                ? 'bg-blue-100 ml-auto' // User's messages on the right
                                : 'bg-green-100' // Bot's messages on the left
                                }`}
                            style={{ width: 'fit-content' }}
                        >
                            <div className="text-sm text-gray-500">
                                {message.sender === 'user' ? 'You' : 'Bot'} - {message.timestamp}
                            </div>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="mt-2 p-2">
                    <form onSubmit={handleSubmit} className="flex">
                        <input
                            type="text"
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Pokemon Name"
                            value={inputText}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ChatRoom;
