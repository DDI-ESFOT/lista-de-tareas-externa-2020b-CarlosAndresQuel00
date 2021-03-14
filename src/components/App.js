import React from "react";
//import UserList from "./UserList";
import UserInfo from "./UserInfo";
//import TodoList from "./TodoList";
import Loading from "./Loading";
import "../styles/App.css";
import Todos from "./Todos";

const App = () => {
  const [show, setShow] = React.useState(true);
  const [userId, setUserId] = React.useState(1);
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      setUserData(data);
    };

    getData();
  }, [userId]);

  const handleUnmoOrMounComponent = () => {
    setShow(!show);
  };

  const handlePrevUser = () => {
    if (userId > 1) {
      setUserId((prevState) => prevState - 1);
    }
  };

  const handleNextUser = () => {
    if (userId < 10) {
      setUserId((prevState) => prevState + 1);
    }
  };

  return (
    <>
      <div className="user-wrapper">
        {userData ? (
          <>
            <button onClick={handlePrevUser} disabled={userId <= 1}>
              Anterior usuario
            </button>
            <button onClick={handleNextUser} disabled={userId >= 10}>
              Siguiente usuario
            </button>
            <UserInfo user={userData} />
          </>
        ) : (
          <Loading />
        )}
      </div>
      {/*<UserList />*/}
      <button onClick={handleUnmoOrMounComponent}>
        {show ? "Desmontar" : "Montar"} TodoList
      </button>
      {show && <Todos userId={userId} />}
      {/*show && <TodoList />*/}
    </>
  );
};

export default App;
