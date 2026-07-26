import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <>
    <h1>Custom App !</h1>
    </>
  )
}


// const reactElement = {
//     type: 'a',  
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = (
  <a href="https://google.com" target="_blank">
    Click me to visit google
  </a>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MyApp /> */}
    {reactElement}
  </StrictMode>
)
