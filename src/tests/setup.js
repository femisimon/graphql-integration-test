const { GraphQLClient, request } = require('graphql-request');

    const url = "http://localhost:4000/"
    const graphqlCient = new GraphQLClient(url, {
      headers: {
        authorization: 'ZGFpc3lAYXBvbGxvZ3JhcGhxbC5jb20=',
        contentType: 'application/json'
      },
    });

module.exports = graphqlCient
