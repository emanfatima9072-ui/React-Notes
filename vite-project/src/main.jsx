//--------------------for vite project--------------------------------//
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

//  const root =   ReactDOM.createRoot(document.getElementById('root'));
//  root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//-------------------changes for custom app-----------------------//
import React from 'react'
import ReactDOM from 'react-dom/client'

//import App from './App.jsx'
//-----------MyApp wale example-----------------------//
// function MyApp(){
//     return (
//         <div>
//             <h1>Custom App | chai</h1>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <MyApp />
// )
//------------------React.createElement() example----------------------//
const anotherElement = (
    <a href="https://google.com" target="_blank">
        Visit Google
    </a>
)

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click me to visit Google',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)

