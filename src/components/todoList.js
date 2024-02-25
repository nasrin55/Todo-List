import React from 'react'
import Todo from './todo'

const TodoList = ({todoList, setTodoList}) => {
  return (
    <div>
      {todoList.map((todoItem) => (
        <Todo 
            setTodoList = {setTodoList}
            key={todoItem.id} 
            todoItem={todoItem} 
            todoList={todoList} 
        />
      ))}
    </div>
  )
}

export default TodoList
