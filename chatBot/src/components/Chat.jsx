import Uppercase from './Uppercase';
import Lowercase from './Lowercase';
import ReverseText from './ReverseText';
import CountCharacters from './CountCharacters';
import CountWords from './CountWords';
import MostFrequentLetter from './MostFrequentLetter';
import CapitalizeWords from './CapitalizeWords';
import RemoveVowels from './RemoveVowels';
import RemoveConsonants from './RemoveConsonants';
import RepeatWords from './RepeatWords';
import ReplaceSpaces from './ReplaceSpaces';
import ShuffleWords from './ShuffleWords';
import JumbleWords from './JumbleWords';
import CountVowelsConsonants from './CountVowelsConsonants';  // Added this one
import SideBar from './SideBar'
import Message from './Message'
import MessageBox from './MessageBox'
import { useState, useRef, useEffect } from 'react'

function Chat() {
    const [selectedBot, setSelectedBot] = useState(null)
    const [newMessage, setNewMessage] = useState([])
    const reference = useRef()

    useEffect(() => {
        reference.current.scrollIntoView({ behavior: "smooth" });
    }, [newMessage]);

    function handleClick(botName) {
        setSelectedBot(botName)
    }
    function handleSend(message) {
        setNewMessage((newMessage) => [...newMessage, message])
        message = ''
    }
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const transformations = [
    <Uppercase text={userInput} />,
    <Lowercase text={userInput} />,
    <ReverseText text={userInput} />,
    <CountCharacters text={userInput} />,
    <CountWords text={userInput} />,
    <MostFrequentLetter text={userInput} />,
    <CapitalizeWords text={userInput} />,
    <RemoveVowels text={userInput} />,
    <RemoveConsonants text={userInput} />,
    <RepeatWords text={userInput} />,
    <ReplaceSpaces text={userInput} />,
    <ShuffleWords text={userInput} />,
    <JumbleWords text={userInput} />,
    <CountVowelsConsonants text={userInput} />,  // Added here
  ];

  const handleSendMessage = () => {
    const randomTransformation = transformations[Math.floor(Math.random() * transformations.length)];
    setMessages([...messages, { user: userInput }, { bot: randomTransformation }]);
    setUserInput('');
  };

    return (
        <>
            <div className='chat'>
                <SideBar handleClick={handleClick} />
                <div>
                    <div className='messageContainer'>
                        {newMessage.map((msg, index) => (
                            <Message key={index} botName={selectedBot} newMessage={msg} />

                        ))}
                        <div ref={reference}></div>
                    </div>
                    <MessageBox handleSend={handleSend} />
                </div>
            </div>
        </>
    )
}

export default Chat;
