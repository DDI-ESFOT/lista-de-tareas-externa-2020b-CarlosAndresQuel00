import React from "react";

function formatFullName(userData) {
  return `${userData.name} ${userData.lastName}`;
}

const UserList = (data) => {
  const initialUsers = () => {
    console.log("Inicializando estado");
    return [
      {
        name: "Carlos",
        lastName: "Quel",
      },
      {
        name: "Manuel",
        lastName: "Benalcazar",
      },
      {
        name: "Patricio",
        lastName: "Mejia",
      },
    ];
  };

  const [users, setUser] = React.useState(initialUsers);

  const handleAddUser = () => {
    const name = document.querySelector("#name").value;
    const lastName = document.querySelector("#lastName").value;
    const newUser = {
      name,
      lastName,
    };

    setUser((prevState) => [...prevState, newUser]);

    document.querySelector("#name").value = "";
    document.querySelector("#lastName").value = "";
  };

  return (
    <>
      <div>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" />
        <label htmlFor="lastName">Apellido</label>
        <input type="text" id="lastName" />
        <button onClick={handleAddUser}>Agregar usuario</button>
      </div>
      <h1>Lista de usuarios ({users.length} en total)</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{formatFullName(user)}</li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
