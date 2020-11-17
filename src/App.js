import React from "react";
import useSWR from "swr";
import { convert } from "./utils/currency";
import { fetchUser } from "./utils/user";

export default function App() {
  const [base, dest] = ["USD", "CAD"];
  const username = 'brunoBrian';
  const { data: rate, error } = useSWR([base, dest], convert);
  const { data, error: err } = useSWR(username, fetchUser);

  if (err) return <span>{err.response.data.message}</span>;
  if (error) return <span>{error.response.data.error}</span>;
  if (!rate) return <span>Loading!</span>;
  if (!data) return <span>Loading!</span>;

  return (
    <div>
      {base} to {dest} = {rate}

      <div>
        <img src={data.avatar_url} style={{width: 200, height: 200}} alt={data.name} />
        <h2>{data.name} - {data.login}</h2>
      </div>
    </div>
  );
}
