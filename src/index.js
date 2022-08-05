import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
// eslint-disable-next-line react/jsx-key
const names = [<li>Ala</li>, <li>Ola</li>, <li>Ela</li>]
const TEXTS = ['Declarative', 'Component-Based', 'Learn Once, Write Anywhere']
const HTML = '<h1>Hello World</h1>'
const string1 = 'Hello'
const string2 = 'React'
const firstElement = (
  <div
    id={'id' + 2}
    className={'container class'}
  >
    <h1>`{string1}  {string2}`</h1>
    <ul>
      {TEXTS.map((text, index) =>
        <li key={index}>{text}</li>
      )}
    </ul>
    <label htmlFor={'checkbox-1'}>
      Checked
    </label>
    <input
      type={'checkbox'}
      name={''}
      id={'checkbox-1'}
      // Checked={true} tylko wyświetla wartość true
      defaultChecked={true}
    />
    <p
    // odpowiednik innerHTML
      dangerouslySetInnerHTML={{
        __html: HTML
      }}
    >
    </p>
    <select
      name={''}
      id={''}
      value={'2'}
    >
      <option value={'1'}>Jeden</option>
      <option value={'2'}>Dwa</option>
      <option value={'3'}>Trzy</option>
    </select>
    <div
      style={{
        backgroundColor: 'red',
        color: 'white'
      }}
    >
      <h1>Hello World</h1>
    </div>
    <input
      type={'text'}
      value={'Brak edycji'}
    />
    <input
      type={'text'}
      defaultValue={'Można edytować'}
    />
    <textarea
      name={''}
      id={''}
      cols={'30'}
      rows={'10'}
      defaultValue={'Można edytować'}
    >
    </textarea>
    <div>
      {String(true)}:{true}
    </div>
    <div>
      {['1 ', '2 ', '3 ']}
    </div>
    <div>
      {Object.entries({ a: 1, b: 2, c: 3 })}
    </div>
    {/* renderowanie tablicy za pomocą JSX */}
    <div>
      <ul>
        {names}
      </ul>
    </div>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(firstElement)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
