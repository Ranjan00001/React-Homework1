import '../css/Chat.css'
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

export default Chat