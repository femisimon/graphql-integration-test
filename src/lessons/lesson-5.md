## Testing
### In this lesson
- Jest.
- What makes Jest different
- Setting up Jest.
- Using Jest.
- Integration Test - Jest and GraphQL.
### Jest
We will be using `Jest` as the test framework to drive the testing of GraphQL.
Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

### What makes Jest different?
#### Zero config
Jest aims to work out of the box, config free, on most JavaScript projects.
#### Snapshots
Make tests which keep track of large objects with ease. Snapshots live either alongside your tests, or embedded inline.
#### Isolated
Tests are parallelized by running them in their own processes to maximize performance.
#### Great api
From it to expect - Jest has the entire toolkit in one place. Well documented, well maintained, well good.

### Setting up Jest
if you look in the `package.json` file, you'll notice that
1. We've set up jest in the `devDependencies`.
2. We also set up the `jest-cli` so we can run a single test in the `dependencies`.
3. Lastly, we set up the environment we want jest to run in, which is the node environment
as stated in the `jest{testEnvironment: 'node'}` section.

### Using Jest
From the way we set up `Jest` we can now easily use the test framework to drive our test.
1. Using the command `npm test` will run all the file with the `test.js` extension from the root folder.
  It can also be configured to run test in all `.spec.js` files as well but that is not our focus for this introduction.
2. We can also run a specific test using `jest` as a command to run that.
  `jest src/tests/booktrips.test.js` will run that test alone.
3. Jest comes with a lot of predefined features that we will usually have to set up ourselves
  - It runs in parallel already so we don't need any special configuration for that.
  - It comes with test coverage feature `--coverage` can be added to our `package.json` or used as a tag.
  - That is enough for introduction to Jest and we can pick it up from there, if requested.

### Integration tests
#### Why integration test in GraphQL
Simply put, integration testing in graphql is needed to ensure the consumption and provision of resources within the graph and other services.
And in our case - REST Service.
#### How to perform integration test for GraphQL
I believe in simplicity, easy to use, reusable resources or function, flexible and scalable when it comes to TDLC.
`TDLC` means Test Development LifeCycle.
We will be using `GraphQL Request` package, which comes integrated with `Jest` to query our test.
1. To install `npm install graphql-request` or just `npm i` to install all the packages in this lesson.
2. If you look closely in the `/src/tests/booktrips.test.js` file you'd see that:
  - We needed authorization and needed to pass that through our `headers: {authorization: 'XXXXXXXXXXXX'}`
  - Defining the variable for the query request.
  - Instantiating `GraphQLClient` with the right authorization and making a `.request(mutation);`
3. Run `npm test` in your terminal to run all the test.
