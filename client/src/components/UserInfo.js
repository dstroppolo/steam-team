import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class UserInfo extends Component {

	constructor(props){
		super(props);
		this.state = {
			border: false
		}
	}
	
	render() {
		return (
            <div className="userAvatar">
                <Image src={this.state.avatarUrl || unknownAvatar} fluid />
            </div>
            <div className="userName">
                <h2>{ this.state.personaName }</h2>
            </div>
		);
	}
}

export default UserInfo;