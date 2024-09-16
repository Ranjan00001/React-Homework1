import { useState } from 'react'
import '../css/Message.css'
import MessageBox from './MessageBox'

function Message({ botName }) {
    const [newMessage, setNewMessage] = useState(null)

    function handleSend(message) {
        setNewMessage(message)
        message = ''
    }

    return (
        <>
            <div className='header'>
                <h1>Prompt {botName}</h1>

            </div>
            <div className='messageContainer'>
                <div className='prevMessage'>
                    <div className='query'>
                        {newMessage}
                    </div>
                    <div className='reply'>
                        {/* {newMessage && reply(newMessage, operation)} */}
                    </div>
                </div>
                <div>
                    <MessageBox handleSend={handleSend} />
                </div>
            </div>
        </>
    )
}

export default Message