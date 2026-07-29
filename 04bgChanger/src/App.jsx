import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >Red</button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >Green</button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >Blue</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App


/*
Because React state is temporary.
When you write:

const [color, setColor] = useState("olive")

useState("olive") means:

When the component is created, the initial state is "olive".
Clicking a button changes the state only in memory.

For example:

onClick={() => setColor("red")}

Now color becomes "red".

However, when you refresh the page:

The browser reloads the entire application.
React destroys the old component.
A new App component is created.
useState("olive") runs again.
So color is initialized to "olive".

How do websites remember the color after refresh?

They store it somewhere permanent, such as:

localStorage (most common)
sessionStorage
Cookies
A database (after login)


Key concept

useState does not persist data. It only keeps values while the React application is running.

Storage	      Survives Refresh?	Survives Browser Close?
useState	       ❌ No	               ❌ No
sessionStorage	 ✅ Yes	             ❌ No
localStorage	   ✅ Yes	             ✅ Yes
Database	       ✅ Yes	             ✅ Yes
*/