import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { getFriendsQuery } from '../queries';
import { Loader, Dimmer } from 'semantic-ui-react';
import { List, Message } from 'semantic-ui-react';
import UserCard from '../components/UserCard';

class FriendsList extends Component {

	constructor(props){
		super(props);
		this.state = {
			currentSearch: ''
		}
	}

	renderUserCards = data => {
		let users = data.map( (user, i) => {
			return <UserCard {...user} key={i} index={i} setActiveFriend={this.props.setActiveFriend} />
		})
		return users;
	}

	render(){
		
		return(
			this.props.steamid ? 
			<Query query = { getFriendsQuery } variables={{steamid:this.props.steamid}}>
			
				{({ loading, error, data}) => {
					if(loading) return <Loader active>Loading</Loader>
					if(error) return ( <Message negative>
											<Message.Header>Could not find a user with that steam ID</Message.Header>
										</Message>)

			
					
					return (
						<List selection animated verticalAlign='middle' relaxed divided>
							{ this.renderUserCards(data.friends) }
						</List>
					)
		
				}}
			</Query> :
			<div></div>
		)
	}

};

export default FriendsList;