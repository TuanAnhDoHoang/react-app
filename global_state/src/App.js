import './App.css';
import { useStore, actions } from './store';
import {useRef} from 'react'
function App() {
  const [state, dispatch] =  useStore();
  const {todos, todoInput} = state;
  const inputRef = useRef();
  const handleAdd = () => {
    if(state.todoInput !== '') dispatch(actions.addToDo());
    inputRef.current.focus();
  }
  const handleKeyDown = (event) => {
    if(event.key === "Enter") handleAdd();
  }
  const handleClear = () => {
    dispatch(actions.clearToDo());
  }

  const handleRemove = (id) => {
    dispatch(actions.removeToDo(id));
  }
  return (
    <div>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder='Enter todo...'
        onChange={(e) => {
          dispatch(actions.setToDoInput(e.target.value));
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul style={{listStyle:'none'}}>
        {state.todos.map((todo,indexToDo) => (
          <div key={indexToDo} style={{display:'flex'}}> 
            <button onClick={() => handleRemove(indexToDo)}>&times;</button>
            <li style={{paddingLeft:5}}>{todo}</li>
          </div>
        ))}
      </ul>
      <button 
        onClick={handleClear}
        >Clear</button>
    </div>
  );
}

export default App;
