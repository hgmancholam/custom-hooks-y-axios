import axios from "axios";
const getUsers = async () => {
  let returnValue = [];
  await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      returnValue = response.data;
    })
    .catch((error) => {
      console.error("Error: ", error);
      returnValue = [];
    });
  return returnValue;
};

export { getUsers };
