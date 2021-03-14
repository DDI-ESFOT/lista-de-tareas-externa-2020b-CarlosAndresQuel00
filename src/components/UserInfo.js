import React from "react";

const UserInfo = ({ user }) => {
  return (
    <>
      <h1>Información del usuario</h1>
      <ul>
        <li>
          <strong>Nombre: </strong>
          {user.name}
        </li>
        <li>
          <strong>Apellido: </strong>
          {user.username}
        </li>
        <li>
          <strong>Email: </strong>
          {user.email}
        </li>
        <li>
          <strong>Web: </strong>
          {user.website}
        </li>
        <li>
          <strong>Teléfono: </strong>
          {user.phone}
        </li>
      </ul>
    </>
  );
};

export default UserInfo;
