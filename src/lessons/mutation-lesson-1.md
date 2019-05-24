# Lesson 2
## In this Lesson
- Write your graph's schema
- Set up Apollo Server
- Run your server

## Mutation
### What is Mutation
The Mutation type is the entry point into our graph for modifying data.
The Mutation type is a special object type, just like the Query type.
The response of a Mutation depends on the project and should be an interface but this introduction,
We will define the response to just something simple.

## ApolloServer
### Starting ApolloServer
- Lets go back to the /src/index.js file and see what we did to start the ApolloServer
  - We go the type definition from the schema that we defined which has the Query, Mutation, Scalar and object types.
  - We imported the `gql` function from `apollo-server` and define all the needed type definitions.
  - We imported the `ApolloServer` function from `apollo-server` and created a new instance of the server.
    - Started the server with the type definition from our schema.
    - Start your GraphQLPlaybook and start the server with `npm start` or `npm i && npm start` if you have not installed packages yet.
    - Type the code below in your GraphQLPlaybook, you should return data with null object
    ```
    {
      launch(id: 1){
        mission_name
      }
      }
      ```
