import React from 'react';
import ItemList from '../item-list';
import { withData, withChildrenFunction } from './../hoc-helpers';
import SwapiService from './../../services/swapi';

const { 
    getAllPeople,
    getAllPlanets,
    getAllStarships
 } = new SwapiService();

 const renderName = ({name}) => <span>{name}</span>;



const PersonList = withData( withChildrenFunction(ItemList, renderName) , getAllPeople);

const PlanetList = withData( withChildrenFunction(ItemList, renderName), getAllPlanets);

const StarshipList = withData( withChildrenFunction(ItemList, renderName), getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};