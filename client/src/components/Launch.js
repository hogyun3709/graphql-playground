import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import classNames from "classnames";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local,
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

function Launch() {
  /* Require proper implementation of Caching query results */
  let { flight_number } = this.props.match.params;
  flight_number = parseInt(flight_number);

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number }
  });
  if (loading) return "Loading..";
  if (error) console.log(error);

  console.log(data);
  return (
    <Fragment>
      <h1>test</h1>
    </Fragment>
  );
}

export default Launch;
