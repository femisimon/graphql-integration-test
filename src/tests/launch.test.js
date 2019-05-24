const { GraphQLClient, request } = require('graphql-request');

it('Should successfully get the launch name', async() => {
  const url = "http://localhost:4000/"
      const graphqlCient = new GraphQLClient(url, {
        headers: {
          authorization: 'ZGFpc3lAYXBvbGxvZ3JhcGhxbC5jb20=',
          contentType: 'application/json'
        },
      });

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
