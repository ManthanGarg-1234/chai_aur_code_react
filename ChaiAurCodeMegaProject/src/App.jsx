import { useState } from 'react'

import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <h1 className="text-3xl font-bold underline text-blue-600">
      A Blog App With Appwrite
    </h1>
  )
}

export default App
