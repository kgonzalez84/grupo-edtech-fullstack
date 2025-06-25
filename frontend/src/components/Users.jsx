import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  return (
    <div>
      <h2>Lista de usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}. {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
