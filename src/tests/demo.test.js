const { GraphQLClient, request } = require('graphql-request');
const graphqlCient = require('./setup')
//  use verbose to see all the test in the file
it('Should get graphqlCient from set up', async() => {

      const query = `query{
        launch(id: 77){
          site
          isBooked
        }
      }`;

      const data = await graphqlCient.request(query);
      expect(data.launch.site).toEqual('KSC LC 39A');
      expect(data.launch.isBooked).toEqual(false);
    });
