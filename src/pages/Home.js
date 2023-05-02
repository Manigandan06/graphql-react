import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";

export const GET_COUNTRIES = gql`
  {
    countries {
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;

export default function Home() {
  const { loading, data, error } = useQuery(GET_COUNTRIES);
  return (
    <div>
      <h1>Home</h1>
      {loading && <SyncLoader color="#36d7b7" size={30} speedMultiplier={1} />}
      {data && (
        <>
          {data.countries.map((item) => (
            <div key={item.code}>
              <h1>{item.code}</h1>
              <h1>{item.name}</h1>
              <button onClick={() => alert(item.code)}>❤️</button>
              <Link to={`/${item.code}`}>Detail</Link>
            </div>
          ))}
        </>
      )}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    </div>
  );
}
