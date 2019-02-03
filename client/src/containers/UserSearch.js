import React, { Component } from 'react';
import '../styles/UserSearch.css';
import { Query } from 'react-apollo';
import { getFriendsQuery, getGamesQuery } from '../queries';

import unknownAvatar from '../styles/unknown-avatar.jpg';

import { Input, Image, Button, Form } from 'semantic-ui-react';

import FriendsList from './FriendsList';

class UserSearch extends Component {

    constructor(props){
        super(props);
        this.state = {
            personaName: '---',
            avatarUrl: '',
            searchInput: '',
            search: '',
            showFriendsList: false
        }
    }

    onSearch = async () => {
        await this.setState({search: ''});
        await this.setState({search: this.state.searchInput, showFriendsList: true});
    }

    setName = personaName => {
        this.setState({personaName:personaName})
    }

    render() {
        return (
    
            <div className="userBox">

                <Query query = { getFriendsQuery } variables={{steamid:this.state.search}}>
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

                </Query>
                <div className="searchBox">
                    <Form>
                        <Form.Input 
                            action={{ icon: 'search', onClick: () => this.onSearch() }} 
                            value = {this.state.searchInput} 
                            placeholder='Search...' 
                            onChange={ e => this.setState({searchInput:e.target.value}) } 
                            onSubmit={() => this.onSearch() }
                        />
                    </Form>
                </div>
                <div className="description">
                    <p>Enter your Steam ID to find games owned by you and your friends.</p>
                </div>
                
                {this.state.showFriendsList &&
                    <div className="friendsList">
                        <FriendsList steamid = {this.state.search} setName={this.setName} />
                    </div>
                }

                {this.state.showFriendsList &&
                    <div style={{paddingTop: '15px'}}>
                        <Button disabled on>Find Games</Button>
                    </div>
                }

            </div>
        );
    }
}

export default UserSearch;

