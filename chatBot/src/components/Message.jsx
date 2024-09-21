import { useState } from 'react'
import '../css/Message.css'
import MessageBox from './MessageBox'
import user from '../assets/user.png'
import bot from '../assets/bot.png'

function Message({ botName, newMessage }) {
    const time = new Date().toLocaleTimeString()

    return (
        <>
            {newMessage &&

                <div className='prevMessage'>
                    <div className='query'>
                        <div className='queryBox' >{newMessage[0]}
                            <br />
                            <small>{time}</small>
                        </div>
                        <img src={user} alt='userImage'></img>
                    </div>
                    <div className='reply'>
                        <img src={bot} alt='botImage'></img>
                        <div className='replyBox' >{newMessage[1]}
                            <br />
                            <small>{time}</small>
                        </div>
                    </div>
                </div>}

        </>
    )
}

export default Message