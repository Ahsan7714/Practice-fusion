import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import "./App.css"
import Register from './Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
