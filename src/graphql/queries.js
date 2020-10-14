/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUpdate = /* GraphQL */ `
  query GetUpdate($id: ID!) {
    getUpdate(id: $id) {
      id
      title
      createdAt
      content
      published
      image
      author
    }
  }
`;
export const listUpdates = /* GraphQL */ `
  query ListUpdates(
    $filter: ModelUpdateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUpdates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        content
        published
        image
        author
      }
      nextToken
    }
  }
`;
export const dateCreated = /* GraphQL */ `
  query DateCreated(
    $createdAt: AWSDateTime
    $sortDirection: ModelSortDirection
    $filter: ModelUpdateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dateCreated(
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        createdAt
        content
        published
        image
        author
      }
      nextToken
    }
  }
`;
