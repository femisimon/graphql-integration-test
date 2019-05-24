## Resolvers
### In this Lesson
- What is a Resolver
- Write Query resolvers
- Write resolvers on types
- Authenticate users
- Write Mutation resolvers

### What is a Resolver
A resolver provides the instruction for transforming a GraphQL operation which can be a Query or Mutation into data.
The data returned have the primitive as the ones declared in the schema.
*Resolver function* : A resolver function contains four arguments: `sampleFunction: (parent, args, context, info) => data;`
  - **parent**: An object that contains the result returned from the resolver on the parent type
  - **args**: An object that contains the arguments passed to the field
  - **context**: An object shared by all resolvers in a GraphQL operation. We use the context to contain per-request state such as authentication information and access our data sources.
  - **info**: Information about the execution state of the operation which should only be used in advanced cases.

The `context` property of `ApolloServer` is where we will be accessing dataSources which currently - `LaunchAPI` and `UserAPI`

### Write a Query Resolver
We structure our resolvers into a map where the keys correspond to the types and fields in our schema.
So for our `/src/resolvers` we have a Query resolver for type fields: `launches`, `launch`, and `me`.
  - The first argument to our top-level resolvers, `parent`, is always blank because it refers to the root of our graph.
  - The second argument refers to any `arguments` passed into our query, which we use in our `launch` query to fetch a launch by its `id`.
  - And finally, we destructure our data sources from the third argument, `context`, in order to call them in our resolvers.
