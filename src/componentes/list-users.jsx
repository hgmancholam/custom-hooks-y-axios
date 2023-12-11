import React from "react";
import User from "./user";
import useUsers from "./use-users";

export default function ListUsers() {
  const { listUsers, loading, error } = useUsers();

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>Error...</h1>;
  } else {
    return (
      <div className="contenedor_app">
        <h1>List Users</h1>
        <div className="contenedor-cards">
          {listUsers &&
            listUsers.map((user) => (
              <User
                key={user.id}
                user={user}
              />
            ))}
        </div>
      </div>
    );
  }
}
