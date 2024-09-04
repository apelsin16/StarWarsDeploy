import { withDataDetails } from './../hoc-helpers';
import ItemDetails from './../item-details';
import SwapiService from './../../services/swapi';

const { 
    getPerson,
    getPersonImage   
 } = new SwapiService();

const PersonDetails = withDataDetails(ItemDetails, getPerson, getPersonImage);

export default PersonDetails ;