const { gql } = require('apollo-server');


const typeDefs = gql`

type Launch {
  flight_number: ID!
  mission_name: String
  ships: Ship
  rocket: Rocket
}

# A query is an entry point for our schema and what that means is how we access the data we requested for.
type Query {
  launches: [Launch]!
  launch(id: ID!): Launch
  me: User
}

"""
The object types below all have scalar types.
Scalar types are primitive type and in GraphQL are ID, String, Boolean, Float and Int.
More on types here => https://devhints.io/graphql#schema

Notice below as Mission has a field - missionPatch which accepts arguements.
GraphQL is so flexible that it allows that.
"""

type Rocket {
  id: ID!
  name: String
  type: String
}

type Ship {
  ship_id: String
  ship_name: String
  ship_type: String
  active: Boolean
}

type User {
  id: ID!
  email: String!
  trips: [Launch]!
}

type Mission {
  name: String
  missionPatch(size: PatchSize): String
}

enum PatchSize {
  SMALL
  LARGE
}

# Mutation type Definition

type Mutation {
# if false, booking trips failed -- check errors
  bookTrips(launchIds: [ID]!): TripUpdateResponse!
  # if false, cancellation failed -- check errors
  cancelTrip(launchId: ID!): TripUpdateResponse!

  login(email: String): String # login token
}

# Lets define the TripUpdateResponse which cannot be null

type TripUpdateResponse {
  success: Boolean!
  message: String
  launches: [Launch]
}`;


module.exports = typeDefs;
