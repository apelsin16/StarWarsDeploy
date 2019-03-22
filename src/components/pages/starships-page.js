import React, { Component } from 'react';
// import PersonDetails from './../person-details/index';
import {StarshipDetails} from '../sw-components/details';
import { Record } from '../item-details/item-details';

import Row from './../row/row';
import { StarshipList } from '../sw-components/item-lists';
import ErrorBoundry from '../error-boundry/error-boundry';


export default class StarshipsPage extends Component {

    state = {
        selectedStarship: null
    }

    onStarshipSelected = (id) => {
        this.setState({
            selectedStarship: id
        });
      };


    render() {
        return (
            <ErrorBoundry>
    <Row 
        left={<StarshipList onItemSelected={this.onStarshipSelected}  /> } 
        right={<StarshipDetails 
                    itemId={this.state.selectedStarship}            
            >
                <Record label="Model" field="model" />
                <Record label="Manufacturer" field="manufacturer" />
               
                <Record label="Length" field="length" />
                <Record label="Crew" field="crew" />
               
            </StarshipDetails>
            }
    />
    </ErrorBoundry>
    )
}};