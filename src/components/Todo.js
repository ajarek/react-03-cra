import React from 'react'

class Todo extends React.Component {
  state = {
    elements: [
      { id: 1, text: 'Naucz się React', completed: false },
      { id: 2, text: 'Zrób pranie', completed: true }
    ]
  }

  markClicked (id) {
    const newElements = this.state.elements
    newElements.forEach(element => {
      if (element.id === id) {
        element.completed = !element.completed
        this.setState({ elements: newElements })
      }
    }
    )
  }

  render () {
    const elements = this.state.elements.map(element =>
      <li
        className={`card ${element.completed ? 'completed' : ''}`}
        key={element.id}
      >
        <h4>{element.text}</h4>
        <button onClick={() => this.markClicked(element.id)} >Zakończone</button>
      </li>)
    return (
      <div className={'todo'}>
        <h1>Todo List</h1>
        {elements}

      </div>
    )
  }
}

export default Todo
