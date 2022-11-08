import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      title
      description
      image
      link
    }
  }
`;
