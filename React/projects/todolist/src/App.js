import React, {useState} from 'react';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    // Check length of new todo
    if(newTodo.length === 0) return;

    const todoItem = {
      text: newTodo,
      completed: false
    }

    setTodos(previousState => [...previousState, todoItem]);
    // Clear newTodo
    setNewTodo('');
  }

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter( (todo, i) => {
      return i !== delIdx;
    } );
    setTodos(filteredTodos);
  }

  const handleTodoComplete = (event, idx) => {
    const changedTodos = todos.map( (todo, i) => {
      if(i === idx) todo.completed = !todo.completed;

      return todo;
    } );

    setTodos(changedTodos);
  }

  return (
    <div style={ {textAlign: "center"} }>

      <form onSubmit={ (event) => { handleNewTodoSubmit(event) } }>

        <label></label>
        <input onChange={ event => { setNewTodo( event.target.value ) } } type="text" value={ newTodo }></input>
        <div>
          <button>Add</button>
        </div>

      </form>

      {
        todos.map( (todo, idx) => {
          return(
            <div key={idx}>
              <span style={ todo.completed ? {textDecoration: "line-through"} : {textDecoration: "none"} } >{ todo.text }</span>
              <input onChange={ event => handleTodoComplete(event, idx) } checked={ todo.completed } type="checkbox"></input>
              <button onClick={ event => handleTodoDelete(idx) } style={ {marginLeft: "10px"} }>Delete</button>
            </div>
          ) 
        })
      }

    </div>
  );
}

export default App;
