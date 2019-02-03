import React, { Component } from 'react';
import { List, Image, Button } from 'semantic-ui-react';
import ReactTooltip from 'react-tooltip'

class GameCard extends Component {

    calculateBackground = () => {

        let { owners, numberFriends, index } = this.props;
        let bgColor = "";
        if(index % 2 === 0){
            bgColor =  "#19435B"
        } else {
            bgColor =  "#1C4863"
        }

        if(owners){
            if(owners.length > 1 && owners.length < numberFriends){
                bgColor = "#756449"
            }

            if(owners.length === numberFriends){
                bgColor = "#87BE46"
            }
        }
        return bgColor;
    }

	render() {
		return (
            <List.Item style={{ background: this.calculateBackground() }}>   
                <Image avatar src={`http://media.steampowered.com/steamcommunity/public/images/apps/${this.props.appid}/${this.props.img_logo_url}.jpg` } fluid/>
                <List.Content >

                    <List.Header  style={{color: "#f4f4f4"}}>{this.props.name}</List.Header>
                    <List.Description  style={{color: "#c4c4c4"}}>
                        Time played: {Math.floor(this.props.playtime_forever / 60)} hours
                    </List.Description>
                </List.Content>
			</List.Item>
		);
	}
}

export default GameCard;