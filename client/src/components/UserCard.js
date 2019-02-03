import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class UserCard extends Component {

	constructor(props){
		super(props);
		this.state = {
			border: false
		}
	}
	
	render() {
		return (
			<List.Item onClick = { () => this.setState({border: !this.state.border})} style={{border: this.state.border ? "2px solid limegreen": "", background: this.props.index % 2 === 0 ? "#19435B" : "#1C4863"}}>
				<Image avatar src={this.props.avatar} />
				<List.Content >
					<List.Header  style={{color: "#f4f4f4"}}>{this.props.personaname}</List.Header>
						<List.Description  style={{color: "#f4f4f4"}}>
							Last played: {new Date(this.props.lastlogoff * 1000).toDateString()}
						</List.Description>
				</List.Content>
			</List.Item>
		);
	}
}

export default UserCard;