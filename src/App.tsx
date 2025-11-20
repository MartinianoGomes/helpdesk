import Login from './Login'
import Register from './Register'
import { Routes, Route } from "react-router"

function App() {
  return (
    <div className="min-h-screen bg-cover bg-[url(./assets/image.png)]">
      <Routes>
        <Route path="/helpdesk" element={<Login/>}/>
        <Route path="/helpdesk/register" element={<Register/>}/>
      </Routes>
    </div>    
  )
}

export default App
