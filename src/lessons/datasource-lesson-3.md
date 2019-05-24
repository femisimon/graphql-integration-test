## Connecting to the Database
### How to hook up to your datasource
#### Connect to REST SERVICE or API
1. Install datasource resource package from Apollo
```
npm install apollo-datasource-rest --save
```
2. In the `datasources/launch.js` we have a `LaunchAPI` function that launches the API using the imported RESTDataSource.
3. The Apollo datasource rest package provides function that uses HTTP Verb to source for data as required by our queries and Mutation.
4. The function `getAllLaunches` uses the `this.get` to request all the launches as response.
  - This means that it combines the `LaunchAPI` with the request => `GET` for `https://api.spacexdata.com/v2/launches`
  - We have to transform the data returned from the response
5. In the `src/index.js` file, we add the datasources, adding the `LaunchAPI` and `UserAPI`.
  - Basically the UserAPI helps us setup our Database using  SQLite for our SQL database, and Sequelize for our ORM for this quick introduction.
  - Our database is READONLY, so we are only going to making `GET` requests.
