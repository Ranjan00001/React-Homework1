import './App.css'
import Home from './components/Home.jsx'
import NavBar from './components/NavBar.jsx'
import Chat from './components/Chat.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/chat' element={<Chat />}></Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
