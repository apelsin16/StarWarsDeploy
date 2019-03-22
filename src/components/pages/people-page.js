import React, { Component } from 'react';
// import PersonDetails from './../person-details/index';
import {PersonDetails} from '../sw-components/details';
import { Record } from '../item-details/item-details';

import Row from './../row/row';
import { PersonList } from '../sw-components/item-lists';
import ErrorBoundry from '../error-boundry/error-boundry';


export default class PeoplePage extends Component {

    state = {
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({
          selectedPerson: id
        });
      };


    render() {
        return (
            <ErrorBoundry>
    <Row 
        left={<PersonList onItemSelected={this.onPersonSelected}  /> } 
        right={<PersonDetails 
                    itemId={this.state.selectedPerson}            
            >
                <Record label="Gender" field="gender" />
                <Record label="Birth Year" field="birthYear" />
                <Record label="Eye Color" field="eyeColor" />
            </PersonDetails>
            }
    />
    </ErrorBoundry>
    )
}};
