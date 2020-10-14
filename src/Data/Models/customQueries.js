export const getUpdateList = /* GraphQL */ `
  query ListUpdates(
    $filter: ModelUpdateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUpdates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        title
        content
        published
        image
        author
      }
      nextToken
    }
  }
`;

export const getLatestUpdate = `
  query ListUpdates(
    $filter: ModelUpdateFilterInput
    $limit: Int
  ){
    listUpdates(filter: $filter, limit: $limit){
      items {
        id
        createdAt
        title
        content
        published
        image
        author
      }
    }
  }
`