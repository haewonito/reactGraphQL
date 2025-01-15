import { gql } from '@apollo/client';

export const GET_USERS = gql`
query {
    Media(id: 1, type: ANIME) {
        id
    title {
            romaji
            english
            native
        }
    }
}`;