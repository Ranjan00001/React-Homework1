import '../css/NavBar.css'
import { useNavigate } from 'react-router-dom';


function NavBar() {
    const navigate = useNavigate()

    const goChat = () => {
        navigate('/chat')
    }
    
    return (
        <nav className="navbar">
            <div className='brand'>iiInsener</div>
            <div><button className='chat-button' onClick={goChat}>Start Chat</button></div>
        </nav>
    );
}

export default NavBar;