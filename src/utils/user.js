import axios from "axios";

async function fetchUser(userName) {
  const result = await axios.get(
    `https://api.github.com/users/${userName}`
  );

  return result.data;
}

export { fetchUser };
