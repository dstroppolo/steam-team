import { gql } from 'apollo-boost';

const getFriendsQuery = gql`
    query GetFriends($steamid: String) {
        friends(steamid: $steamid) {
            steamid
            personaname
            avatar
            avatarfull
            lastlogoff
            games{
                appid
                name
                img_logo_url
                playtime_forever
            }
        }
    }
`;

const getGamesQuery = gql`
    query GetGames($steamid: String) {
        games(steamid: $steamid) {
            appid,
            name
        }
    }
`

const getUserQuery = gql`
    query GetUser($steamid: String) {
        user(steamid: $steamid) {
            personaname
            avatarfull
        }
    }
`

export { getFriendsQuery, getGamesQuery, getUserQuery };