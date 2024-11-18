import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
  
  return (
    <div className='w-screen h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center text-white bottom-12 inset-x-2'>
        <div className='shadow-lg gap-4 p-3 rounded flex flex-wrap bg-gray-400' >
        <button className='rounded shadow-lg h-10 w-15 p-2 bg-green-700' onClick={()=>setColor("green")}>green</button>
        <button className='rounded shadow-lg h-10 w-15 p-2 bg-blue-700' onClick={()=>setColor("blue")}>blue</button>
        <button className='rounded shadow-lg h-10 w-15 p-2 bg-gray-700' onClick={()=>setColor("gray")}>grey</button>
        <button className='rounded shadow-lg h-10 w-15 p-2 bg-pink-300' onClick={()=>setColor("pink")}>pink</button>
        <button className='rounded shadow-lg h-10 w-15 p-2 bg-violet-600' onClick={()=>setColor("violet")}>violet</button>
        <button className='rounded shadow-lg h-10 w-15 p-2 bg-purple-800' onClick={()=>setColor("purple")}>purple</button>
        <button className='rounded shadow-lg h-10 w-15 p-2 bg-indigo-700' onClick={()=>setColor("indigo")}>indigo</button>
        <button className='rounded shadow-lg h-10 w-15 p-2 bg-red-900' onClick={()=>setColor("red")}>red</button>
        <button className='rounded shadow-lg h-10 w-15 p-2 bg-cyan-700' onClick={()=>setColor("cyan")}>cyan</button>
        </div>
      </div>
    </div>
  )
}
export default App 
