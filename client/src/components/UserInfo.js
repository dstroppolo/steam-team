import React, { Component } from 'react';
import unknownAvatar from '../styles/unknown-avatar.jpg';
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
            <div>
                <div className="userAvatar">
                    <Image src={this.props.avatarUrl || unknownAvatar} fluid centered style={{width:"184px"}} />
                </div>
                <div className="userName">
                    <h2>{ this.props.personaName }</h2>
                </div>
            </div>

		);
	}
}

export default UserInfo;