import React from 'react'
import styles from '../style.module.css'
import shortid from 'shortid'

const form = ({todo, setTodo, todoList, setTodoList}) => {

    const handleChange = (event) => {
        setTodo(event.target.value)
        // console.log(todo)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setTodoList([...todoList, {name:todo, id: shortid.generate()}])
        // 
        setTodo("")
    }

  return (
    <div className={styles.todoform}>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleChange} className={styles.todoinput} placeholder='Add Todo Item'></input>
        <button type='submit' className={styles.todobutton}>Add</button>
      </form>
    </div>
  )
}

export default form
