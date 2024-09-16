import '../css/Chat.css'
import SideBar from './SideBar'
import Message from './Message'
import { useState } from 'react'
function Chat() {
    const [selectedBot, setSelectedBot] = useState(null)

    function handleClick(botName) {
        setSelectedBot(botName)
    }

    return (
        <>
            <div className='chat'>
                <SideBar handleClick={handleClick}/>
                <div className='message'>
                    <Message botName={selectedBot}/>
                </div>
            </div>

        </>
    )
}

export default Chat