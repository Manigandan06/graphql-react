import React from "react";
import { useQuery, gql } from "@apollo/client";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";

const GET_COUNTRIES = gql`
  {
    countries {
      code
      name
      emoji
      currency
      continent {
        name
        code
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  return (
    <div>
      <h1>Home</h1>
      {loading && <RingLoader color="#17f1c5" size={100} speedMultiplier={2} />}
      {data && (
        <div>
          {data.countries.map((item) => (
            <div key={item.code}>
              <h1>{item.name}</h1>
              <h1>{item.emoji}</h1>
              <button onClick={() => alert(item.code)}>❤️</button>
              <Link to={`/${item.code}`}>
                <button>Country</button>
              </Link>
            </div>
          ))}
        </div>
      )}
      {error && (
        <h1>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </h1>
      )}
    </div>
  );
}
