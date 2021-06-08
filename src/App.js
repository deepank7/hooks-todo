import React, { useState } from 'react'
import data from './data.json';
import FilterToDo from './FilterToDo';
import Header from './Header';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList'

function App() {
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList]
    copy.push({ id: toDoList.length + 1, task: userInput, complete: false });
    setToDoList(copy);
  }

  const filterList = (term) => {
    return function (x) {
      return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
    }
  }

  const [toDoList, setToDoList] = useState(data);
  return (
    <>
      <Header />
      <FilterToDo filterList={filterList} />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <ToDoForm addTask={addTask} />
    </>
  );
}

export default App;
