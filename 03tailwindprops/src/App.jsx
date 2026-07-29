import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      {/* <div className="flex flex-col items-center rounded-2xl">
        <div>
          <img class="size-48 shadow-xl" alt="" src="https://images.pexels.com/photos/37363298/pexels-photo-37363298.jpeg" />
        </div>
        <div class="flex">
          <span>Class Warfare</span>
          <span>The Anti-Patterns</span>
          <span class="flex">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div> */}
      {/* <Card channel="chaiaurcode" someObj={myObj} someArr={myObj} /> */}
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />
    </>
  )
}

export default App
