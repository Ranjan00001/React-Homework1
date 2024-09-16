import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import '../css/MessageBox.css'
import send from '../assets/send1.png'

function MessageBox({handleSend}) {
    const [message, setMessage] = useState('')

    return (
        <>
            <div className='messageBox'>
                <input  value={message} placeholder='Prompt the Bot...' onChange={(e) => setMessage(e.target.value)} />
                {/* <ReactMarkdown>{message}</ReactMarkdown> */}
                <img className='sendButton' onClick={() => handleSend(message)} src={send}></img>
            </div>
        </>
    )
}

export default MessageBox