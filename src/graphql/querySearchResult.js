import { gql } from "@apollo/client";

export const SEARCH_RESULT = gql`
  query($search: String!, $page: Int!, $perPage: Int!, $type: MediaType!) {
    Page(page: $page, perPage: $perPage) {
      media(search: $search, type: $type) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          large
          extraLarge
        }
      }
      pageInfo {
        currentPage
        hasNextPage
      }
    }
  }
`