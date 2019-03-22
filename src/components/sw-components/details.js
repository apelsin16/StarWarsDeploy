import { withDataDetails } from './../hoc-helpers';
import ItemDetails from './../item-details';
import SwapiService from './../../services/swapi';

const { 
    getPerson,
    getPersonImage,
    getPlanet,
    getPlanetImage,
    getStarship,
    getStarshipImage
 } = new SwapiService();

const PersonDetails = withDataDetails(ItemDetails, getPerson, getPersonImage);

const PlanetDetails = withDataDetails(ItemDetails, getPlanet, getPlanetImage);

const StarshipDetails = withDataDetails(ItemDetails, getStarship, getStarshipImage);



export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};