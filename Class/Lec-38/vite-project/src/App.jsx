// import React, { useState } from 'react';
// import './App.css';

// function App() {
  
//   const [todos, setTodos] = useState([]);

//   const [task, setTask] = useState('');

  
//   const addTodo = () => {
//     if (task) {
//       setTodos([...todos, { text: task, completed: false }]);
//       setTask('');
//     }
//   };


//   const toggleComplete = (index) => {
//     const newTodos = [...todos];
//     newTodos[index].completed = !newTodos[index].completed;
//     setTodos(newTodos);
//   };


//   const removeTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <div className="app">
//       <h1>Classic To-Do List</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="Enter a task..."
//         />
//         <button onClick={addTodo}>Add Task</button>
//       </div>

//       <ul className="todo-list">
//         {todos.map((todo, index) => (
//           <li key={index} className={todo.completed ? 'completed' : ''}>
//             <span onClick={() => toggleComplete(index)}>{todo.text}</span>
//             <button onClick={() => removeTodo(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
import Student from "./Student";
function App() {
  return (
    <>
      <Student name="SHREYA" age={18} isStudent={true}></Student>
      <Student name="ANEET" age="14" isStudent={false}></Student>
      <Student name="MANNAT" age={28} isStudent={true}></Student>
      <Student></Student>
    </>
  );
}
export default App;