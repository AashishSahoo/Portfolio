import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'
import WorkForm from './components/WorkForm'
import Certificates from './components/Certificates'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full bg-black text-white'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/certificates" element={<Certificates/>}/>
          <Route path="/thoughts" element={<WorkForm/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
