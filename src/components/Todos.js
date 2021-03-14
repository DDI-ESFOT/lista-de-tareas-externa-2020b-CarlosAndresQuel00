import React from "react";
import "../styles/todo-list.css";

const Todos = ({ userId }) => {
  const [todos, setTodos] = React.useState([]);
  const [showMistake, setShowMistake] = React.useState(false);
  const [cotas, setCotas] = React.useState(false);

  React.useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/todos`
      );
      const tasks = await response.json();
      setTodos(tasks);
    };

    getTodos();
  }, [userId]);

  React.useEffect(() => {
    if (showMistake) {
      document.title = "ERROR!!";
    } else if (todos.length > 0) {
      document.title = `${todos.length} tareas pendientes`;
    } else {
      document.title = "No tienes tareas pendientes";
    }
  }, [todos, showMistake]);

  const handleChangeInput = (e) => {
    if (e.target.value !== "") {
      setShowMistake(false);
    } else {
      setShowMistake(true);
    }
  };

  const handleAddTask = () => {
    const task = document.querySelector("#task").value;

    if (task !== "") {
      const newTask = {
        title: task,
        completed: false,
      };
      setTodos((prevState) => [...prevState, newTask]);
      document.querySelector("#task").value = "";
    } else {
      setShowMistake(true);
    }
  };

  const handleDeleteTask = (pos) => {
    setTodos((prevState) => {
      return prevState.filter((task, i) => i !== pos);
    });
  };

  const handleCompletedTask = (pos) => {
    setCotas((prevState) => [(todos[pos].completed = true)]);
  };

  return (
    <>
      <div>
        <label htmlFor="task">Tarea</label>
        <input type="text" id="task" onChange={handleChangeInput} />
        {showMistake && <label className="mistake">Ingrese la tarea</label>}
        <button onClick={handleAddTask}>Agregar tarea</button>
      </div>
      <h1>Lista de tareas pendientes ({todos.length} en total)</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.title}</td>
              <td>
                {todo.completed ? (
                  <label className="colorGreen">Completada</label>
                ) : (
                  <button
                    className="colorYellow"
                    onClick={() => handleCompletedTask(index)}
                  >
                    Marcar como completada
                  </button>
                )}
              </td>
              <td>
                <button onClick={() => handleDeleteTask(index)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Todos;
