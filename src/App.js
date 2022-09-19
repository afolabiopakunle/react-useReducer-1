import React, {useReducer, useState} from "react";
import "./style.css";

export const ACTIONS = {
  ADD_TODO: 'add-todo',

}
function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, {id: Date.now(), }]
    }

}
export default function App() {
  
  function handleSubmit(e) {
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODO})

    setName('')
    console.log(name)
  }
  const [state, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('Afoo');

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
    </div> 
  )
}
