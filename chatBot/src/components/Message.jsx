import { useState } from 'react'
import '../css/Message.css'
import MessageBox from './MessageBox'
import user from '../assets/user.png'
import bot from '../assets/bot.png'

function Message({ botName, newMessage }) {

    return (
        <>
            {newMessage &&

                <div className='prevMessage'>
                    <div className='query'>
                        <div className='queryBox' >{newMessage[0]}</div>
                        <img src={user} alt='userImage'></img>
                    </div>
                    <div className='reply'>
                        <img src={bot} alt='botImage'></img>
                        {/* {Response(newMessage)} */}
                        <div className='replyBox' >{newMessage[1]}</div>
                    </div>
                </div>}
            
        </>
    )
}

export default Message