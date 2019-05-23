## Schema Note
In the schema we are importing `gql` from the `ApolloServer` and assign it to variable `typeDefs`
`typeDefs` for short means `Type Definition` which makes sense because all graphql functions are in type.

### Defining a Schema
#### Tools
- Repository - https://github.com/r-spacex/SpaceX-API
- https://api.spacexdata.com/v3/launches
 - For our REST SpaceX-API we need to understand that the `v3/launches` endpoint returns past launches and a lot of fields,
  that we probably don't need when building our application
### Scalar and Object types
The object types below all have scalar types.
Scalar types are primitive type and in GraphQL are ID, String, Boolean, Float and Int.
More on types here => https://devhints.io/graphql#schema

Notice below as Mission has a field - missionPatch which accepts arguments.
GraphQL is so flexible that it allows that.
### Query
A query is an entry point for our schema and what that means is how we access the data we requested for.
