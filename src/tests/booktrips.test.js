const { GraphQLClient, request } = require('graphql-request');

it('Should successfully book a user trip for launch', async() => {
  const url = "http://localhost:4000"
      const graphqlCient = new GraphQLClient(url, {
        headers: {
          authorization: 'ZGFpc3lAYXBvbGxvZ3JhcGhxbC5jb20=',
          contentType: 'application/json'
        },
      });

      const mutation = `mutation BookTrips {
        bookTrips(launchIds: 68) {
          success
          message
          launches {
            id
          }
        }
  }`;

      const data = await graphqlCient.request(mutation);
      expect(data.bookTrips.success).toEqual(true);
      expect(data.bookTrips.message).toEqual('trips booked successfully');
    });
