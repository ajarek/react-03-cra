import React from 'react'

class Todo extends React.Component {
  state = {
    elements: [
      { id: 1, text: 'Naucz się React', completed: false },
      { id: 2, text: 'Zrób pranie', completed: true }
    ],
    inputValue: ''

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

  InputHandler (event) {
    this.setState({ inputValue: event.target.value })
  }

  addItem = () => {
    const item = { id: this.state.elements.length + 1, text: this.state.inputValue, completed: false }
    const newElements = [item, ...this.state.elements]
    this.setState({ elements: newElements })
    this.setState({ inputValue: '' })
  }

  render () {
    const elements = this.state.elements.map(element =>
      <li
        className={`card ${element.completed ? 'completed' : ''}`}
        key={element.id}
      >
        <h4>{element.text}</h4>
        <button
          className={'btn'}
          onClick={() => this.markClicked(element.id)}
        >Zakończone
        </button>
      </li>)
    return (
      <div className={'todo'}>
        <h1>Todo List</h1>
        <div className={'wrapper'}>
          <input
            className={'input'}
            type={'text'}
            onChange={(event) => this.InputHandler(event)}
            value={this.state.inputValue}
          />

          <button
            className={'btn'}
            onClick={this.addItem}
          >Dodaj
          </button>
        </div>
        {elements}

      </div>
    )
  }
}

export default Todo
