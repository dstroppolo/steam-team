import React, { Component } from 'react';
import '../styles/UserSearch.css';
import UserSearch from './UserSearch';
import { Grid, Loader, Message, Transition } from 'semantic-ui-react';
import { Query } from 'react-apollo';
import { getFriendsQuery } from '../queries';
import FriendsGamesLists from './FriendsGamesLists';

class ColumnsContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            showUserSearch: true,
            activeFriends: []
        }
    }

    setActiveFriend = newActiveFriend => {

        let activeFriends = this.state.activeFriends;

        let indexOfActiveFriend = activeFriends.map( friend => friend.steamid).indexOf(newActiveFriend.steamid);

        //if its already in the array, remove it
        if(indexOfActiveFriend >= 0){
            activeFriends.splice(indexOfActiveFriend,1);
            this.setState({activeFriends: activeFriends});
        } else {
            this.setState({ activeFriends: [...activeFriends, newActiveFriend]});
        }
    }

    setShowSearch = val => {
        this.setState({ showUserSearch: val});
        if(val){
            this.setState({ activeFriends: []})
        }
    }

    render() {


        return (

            <div className="columnsContainer" style={{width:"100%"}}>
                <Grid centered>
                    <Grid.Column width={this.state.showUserSearch ? 8 : 16} >

                        {this.state.showUserSearch ?
                            <UserSearch 
                                numberActiveFriends={this.state.activeFriends.length}
                                setActiveFriend={this.setActiveFriend} 
                                setActiveSelf={this.setActiveSelf}
                                setShowSearch={this.setShowSearch}
                            /> :
                            <FriendsGamesLists 
                                data={this.state.activeFriends} 
                                setShowSearch={this.setShowSearch}
                            />
                        }
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default ColumnsContainer;