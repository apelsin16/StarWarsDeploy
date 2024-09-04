import React, { Component } from 'react';
// import PersonDetails from './../person-details/index';
import {PlanetDetails} from '../sw-components/details';
import { Record } from '../item-details/item-details';

import Row from './../row/row';
import { PlanetList } from '../sw-components/item-lists';
import ErrorBoundry from '../error-boundry/error-boundry';


export default class PlanetsPage extends Component {

    state = {
        selectedPlanet: null
    }

    onPlanetSelected = (id) => {
        this.setState({
          selectedPlanet: id
        });
      };


    render() {
        return (
            <ErrorBoundry>
    <Row 
        left={<PlanetList onItemSelected={this.onPlanetSelected}  /> } 
        right={<PlanetDetails 
                    itemId={this.state.selectedPlanet}            
            >
                <Record label="Population" field="population" />
                <Record label="Rotation Period" field="rotationPeriod" />
                <Record label="Diameter" field="diameter" />
            </PlanetDetails>
            }
    />
    </ErrorBoundry>
    )
}};