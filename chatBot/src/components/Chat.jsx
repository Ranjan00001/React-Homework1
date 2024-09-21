import '../css/Chat.css'
import SideBar from './SideBar'
import Message from './Message'
import MessageBox from './MessageBox'
import { useState, useRef, useEffect } from 'react'

function reply(text, operation) {
    if (operation === 'Count Words') {
        return 'Word counts: ' + text.trim().split(/\s+/).length
    }
    else if (operation === 'Capitalize') {
        return 'Capitalized to: ' + text.toUpperCase()
    }
    else if (operation === 'Lower case') {
        return 'Lower Case is: ' + text.toLowerCase()
    }
    else if (operation === 'Reverse') {
        return 'Reverse is: ' + text.split(' ').reverse().join(' ')
    }
    else if (operation === 'Underscorer') {
        return 'Replaced spaces with underscore: ' + text.replace(/\s/g, '_')
    }
    else if (operation === 'Count Vowels') {
        const Vowels = ['a', 'e', 'i', 'o', 'u']
        const lower = text.toLowerCase()
        let count = 0
        for (let i = 0; i < text.length; i++) {
            if (Vowels.includes(lower.charAt(i))) {
                count++
            }
        }
        return 'Vowel count is: ' + count
    }
}

function Chat() {
    const [selectedBot, setSelectedBot] = useState('Capitalize')
    const [newMessage, setNewMessage] = useState([])
    const [answer, setAnswer] = useState([])
    const reference = useRef()

    useEffect(() => {
        reference.current.scrollIntoView({ behavior: "smooth" });
    }, [newMessage]);

    function handleClick(botName) {
        setSelectedBot(botName)
    }
    function handleSend(message) {
        if (!message.trim()) return
        setNewMessage([...newMessage, message])
        setAnswer([...answer, reply(message, selectedBot)])
        message = ''
    }

    return (
        <>
            <div className='chat'>
                <SideBar handleClick={handleClick} selectedBot={selectedBot} />
                <div>
                    <div className='header'>Prompting Bot to {selectedBot}</div>
                    <div className='messageContainer'>
                        {newMessage.map((query, index) => {
                            return (
                                <Message key={index} botName={selectedBot} newMessage={[query, answer[index]]} />
                            );
                        })}
                        <div ref={reference}></div>
                    </div>
                    <MessageBox handleSend={handleSend} />
                </div>
            </div>
        </>
    )
}

export default Chat;
