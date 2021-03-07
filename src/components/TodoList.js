import React from "react";

const TodoList = () => {
  const [todos, setTodos] = React.useState([]);
  const [cotas, setCotas] = React.useState([]);

  const handleAddTask = () => {
    const task = document.querySelector("#task").value;
    const newTask = [task];

    setTodos((prevState) => [...prevState, newTask]);

    document.querySelector("#task").value = "";
  };

  const handleDeleteTask = (pos) => {
    setTodos((prevState) => {
      return prevState.filter((task, i) => i !== pos);
    });
  };

  const handleCompletedTask = (pos) => {
    setCotas((prevState) => [...prevState, todos[pos]]);
    handleDeleteTask(pos);
  };

  return (
    <>
      <div>
        <label htmlFor="task">Tarea</label>
        <input type="text" id="task" />
        <button onClick={handleAddTask}>Agregar tarea</button>
      </div>
      <h1>Lista de tareas pendientes ({todos.length} en total)</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
            <button onClick={() => handleCompletedTask(index)}>
              Completada
            </button>
          </li>
        ))}
      </ul>
      <h1>Lista de tareas completadas ({cotas.length} en total)</h1>
      <ul>
        {cotas.map((cota, index) => (
          <li key={index}>{cota}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
