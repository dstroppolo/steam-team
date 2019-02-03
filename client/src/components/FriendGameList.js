import React, { Component } from 'react';
import '../styles/FriendsGamesLists.css';

import { List } from 'semantic-ui-react';
import UserInfo from './UserInfo';
import GameCard from './GameCard';

export default class FriendGameList extends Component {

	renderGameCards = data => {
		let users = data.map( (game, i) => {
			return <GameCard {...game} key={i} index={i} owners={this.props.checkingObject[game.appid]} numberFriends={this.props.numberFriends} />
		})
		return users;
	}

    render() {
        return(
            <div className="friendGameList">
             
                <UserInfo 
                    personaName={this.props.personaName} 
                    avatarUrl={this.props.avatarUrl}
                />
                <div style={{marginTop:"15px", overflow: "scroll", padding:"-50px"}}>
                    <List  selection animated verticalAlign='middle' relaxed divided>
                        { this.props.games && this.renderGameCards(this.props.games) }
                    </List>
                </div>


            </div>
        )
    }

}

