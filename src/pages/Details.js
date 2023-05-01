import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";

const COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
    }
  }
`;

export default function Details() {
  const { id } = useParams();
  const { data, error, loading } = useQuery(COUNTRY, {
    variables: { code: id },
  });
  return (
    <div>
      <h1>Details</h1>

      {loading && <RingLoader color="#17f1c5" size={100} speedMultiplier={2} />}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    </div>
  );
}
