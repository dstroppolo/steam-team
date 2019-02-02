const graphql = require('graphql');
const fetch = require('node-fetch');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema } = graphql;

const baseUrl = 'http://api.steampowered.com';
const apiKey = 'BE6936D81F71B3BD84AEACB3891D902D';

const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
        appid: { type: GraphQLString },
        name: { type: GraphQLString },
        img_icon_url: { type: GraphQLString },
        img_logo_url: { type: GraphQLString }, 
        playtime_forever: { type: GraphQLInt }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        steamid: { type: GraphQLString },
        personaname: { type: GraphQLString },
        avatar: { type: GraphQLString },
        avatarmedium: { type: GraphQLString },
        avatarfull: { type: GraphQLString },
        lastlogoff: { type: GraphQLInt },
        games: { 
            type: GraphQLList(GameType),
            async resolve(parent, args){
                const games = await fetch(`${baseUrl}/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${parent.steamid}&include_appinfo=1&format=json`);
                const gamesList = await games.json();
                return gamesList.response.games;
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        games: {
            type: new GraphQLList(GameType),
            args: { steamid: {type: GraphQLString } },
            async resolve(parent, args){
                const games = await fetch(`${baseUrl}/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${args.steamid}&include_appinfo=1&format=json`)
                const gameList = await games.json();
                return gameList.response.games;
            }
        },
        friends: {
            type: new GraphQLList(UserType),
            args: { steamid: {type: GraphQLString} },
            async resolve(parent, args){
                const friends = await fetch(`${baseUrl}/ISteamUser/GetFriendList/v0001/?key=${apiKey}&steamid=${args.steamid}&relationship=friend`);
                const friendsList = await friends.json();
                const idString = friendsList.friendslist.friends.map( friend => friend.steamid).toString();

                const users = await fetch(`${baseUrl}/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${idString}`)
                const userProfiles = await users.json();
                return userProfiles.response.players;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});