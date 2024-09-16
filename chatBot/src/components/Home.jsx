import '../css/Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()

    const goChat = () => {
        navigate('/chat')
    }

    return (
        <>
            <div className='center' id='container'>
                <div className="welcome">Hey! Did you check our cool Innovative bot</div>
                <h1>Bot's Functionality</h1>
                <ul>
                    <li>
                        <h3> Interactive Chat interface.</h3>
                    </li>
                    <li>
                        <h3>Bot Transformations: applies text transformations like counting characters, reversing text, capitalizing words</h3>
                    </li>
                    <li>
                        <h3>Sleek Design: Interface with clear distinction between user and bot messages.</h3>
                    </li>
                    <li>
                        <h3>Real-Time Responses.</h3>
                    </li>
                </ul>
                <div><button className='chat-button' onClick={goChat}>Start Chat</button></div>

            </div>
            <div className='container'>

            </div>
        </>
    )
}

export default Home