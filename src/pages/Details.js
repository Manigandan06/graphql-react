import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { SyncLoader } from "react-spinners";

export const COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      capital
      currency
      phone
      states {
        name
      }
    }
  }
`;
export default function Details() {
  const { code } = useParams();
  const { loading, data, error } = useQuery(COUNTRY, { variables: { code } });

  return (
    <div>
      <h1>Details</h1>
      {loading && <SyncLoader color="#36d7b7" size={30} speedMultiplier={1} />}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    </div>
  );
}
