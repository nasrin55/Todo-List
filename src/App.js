import Header from './components/header'
import Form from './components/form';
import {useState} from 'react'
import TodoList from './components/todoList';


function App() {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  return (
    <div className="App">
      <Header></Header>
      <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} ></Form>
      <TodoList setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
}

export default App;
