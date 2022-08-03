import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

const TEXTS = ['Declarative', 'Component-Based', 'Learn Once, Write Anywhere']

const firstElement = (
    <div>
        <h1>Hello React</h1>
        <ul>
          {TEXTS.map((text, index) =>
             <li key={index}>{text}</li>
          )}
        </ul>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(firstElement)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
