import React, { Component } from 'react';
import '../styles/UserSearch.css';
import UserSearch from './UserSearch';
import { Grid, Loader, Message } from 'semantic-ui-react';
import { Query } from 'react-apollo';
import { getFriendsQuery } from '../queries';

class ColumnsContainer extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {


        return (

            <div className="columnsContainer" style={{width:"100%"}}>
                <Grid centered>
                    <Grid.Column width={8} >
                        <UserSearch />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default ColumnsContainer;