const { gql } = require('apollo-server');

const typeDefs = gql``;

type Launch {
  flight_number: ID!
  mission_name: String
  ships: Ship
  rocket: Rocket
}

module.exports = typeDefs;
