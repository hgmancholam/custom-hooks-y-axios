import { useState, useEffect } from "react";
import { getUsers } from "../services/service-list-users";

const UseUsers = () => {
  const [listUsers, setListUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fectchUsers = async () => {
      try {
        const tmp = await getUsers();
        setListUsers(tmp);
      } catch (error) {
        setListUsers([]);
        setError(error);
      }
      setLoading(false);
    };
    fectchUsers();
  }, []);

  return { listUsers, loading, error };
};

export default UseUsers;
