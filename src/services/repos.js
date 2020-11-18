import axios from "axios";

async function fetchRepo() {
  const result = await axios.get(
    `https://api.github.com/users/octocat/repos`
  );
  return result.data;
}

export { fetchRepo };
