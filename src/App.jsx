import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import Home from './componenets/Home'
import Paste from './componenets/Paste'
import ViewPaste from './componenets/ViewPaste'
const router =createBrowserRouter(
  [
    {path:"/",
      element:
      <div>
      <Navbar/>
      <Home/>
      </div>
    },
     {path:"/pastes",
      element:
      <div>
        <Navbar/>
        <Paste/>
      </div>
    },
     {path:"/pastes/:id",
      element:
      <div>
        <Navbar/>
        <ViewPaste/>
      </div>
    }
  ]
)
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
