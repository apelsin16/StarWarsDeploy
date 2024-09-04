import { withDataDetails } from './../hoc-helpers';
import ItemDetails from './../item-details';
import SwapiService from './../../services/swapi';

const {
    getStarship,
    getStarshipImage
 } = new SwapiService();

 const StarshipDetails = withDataDetails(ItemDetails, getStarship, getStarshipImage);

 export default StarshipDetails;