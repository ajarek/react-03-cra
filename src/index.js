import React from 'react'
import ReactDOM from 'react-dom/client'
import Todo from './components/Todo'
import './index.css'
import reportWebVitals from './reportWebVitals'

function todo () {
  return (<Todo/>)
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(todo())

reportWebVitals()
