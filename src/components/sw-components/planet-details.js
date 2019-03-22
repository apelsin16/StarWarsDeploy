import { withDataDetails } from './../hoc-helpers';
import ItemDetails from './../item-details';
import SwapiService from './../../services/swapi';

const { 
    getPlanet,
    getPlanetImage   
 } = new SwapiService();

 const PlanetDetails = withDataDetails(ItemDetails, getPlanet, getPlanetImage);

 export default PlanetDetails;