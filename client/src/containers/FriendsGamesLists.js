import React, { Component } from 'react';
import '../styles/FriendsGamesLists.css';

import FriendGameList from '../components/FriendGameList';

import { Grid, Button } from 'semantic-ui-react';
import { intersectionBy, unionBy } from 'lodash';

export default class FriendsGamesLists extends Component {

    constructor(props){
        super(props);
        this.state = {
            checkingObject: {}
        }
    }

    componentDidMount = () => {
        this.sortGames();
    }
    
    renderFriendsGamesLists = () => {
        let lists = this.props.data.map( (f,i) => {
            return (
                <Grid.Column width={4} key={i}>
                    <FriendGameList 
                        games = {f.games} 
                        personaName={f.personaname} 
                        avatarUrl={f.avatarfull} 
                        checkingObject={this.state.checkingObject} 
                        numberFriends={this.props.data.length}
                    />

                </Grid.Column>
            )
        });
        return lists;
    }

    sortGames = () => {
        let games = [];

        this.props.data.forEach( data => {
            games.push(data.games);
        });

        //list of unique games for all users
        games = unionBy(...games, 'appid');

        //then make an object like this: { appid: 123: [dan, mike, manny], 456: [mike, manny] } where 123 is appid and mike and manny are usernames
        let checkingObject = {};

        games.forEach( game => {
            this.props.data.forEach( data => {
                let gamesList = data.games.map( g => g.appid);
                if(gamesList.indexOf(game.appid) >= 0){
                    if(checkingObject[game.appid]){
                        checkingObject[game.appid] = [...checkingObject[game.appid], data.personaname];
                    } else {
                        checkingObject[game.appid] = [data.personaname]
                    }
               }
            });
        });
        this.setState({checkingObject: checkingObject});
    }


    render() {
        return(
            <Grid doubling padded columns={4} relaxed="very">
                <Grid.Row>
                    { this.renderFriendsGamesLists() }
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Button onClick={ () => this.props.setShowSearch(true)}>Go Back</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

}

