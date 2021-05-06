export default class SwapiService {

    _apiBase = 'https://swapi.dev';
    _imgBase = 'https://starwars-visualguide.com/assets/img';

    getData = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return await res.json()
    };

    getPersonImage = ({id}) => {
        return `${this._imgBase}/characters/${id}.jpg`
    };

    getStarshipImage = ({id}) => {
        return `${this._imgBase}/starships/${id}.jpg`
    };

    getPlanetImage = ({id}) => {
        return `${this._imgBase}/planets/${id}.jpg`
    };

    getAllPeople = async () => {
        const res = await this.getData(`/people`);
        return res.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getData(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getAllPlanets = async () => {
        const res = await this.getData(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getData(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getData(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getData(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity,
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}
