export default class SwapiService {

    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    _getPersonImgUrl = (id) => {
        return `${this._imageBase}/characters/${id}.jpg`;
    }

    _getPlanetImgUrl = (id) => {
        return `${this._imageBase}/planets/${id}.jpg`;
    }

    _getStarshipImgUrl = (id) => {
        return `${this._imageBase}/starships/${id}.jpg`;
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        const id = this._extractId(planet);
        return {
            id: id,
            imgSrc: this._getPlanetImgUrl(id),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson = (person) => {
        const id = this._extractId(person);
        return {
            id: id,
            imgSrc: this._getPersonImgUrl(id),
            name: person.name,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            gender: person.gender,
            height: person.height,
            mass: person.mass
        }
    }

    _transformStarship = (starship) => {
        const id = this._extractId(starship);
        return {
            id: id,
            imgSrc: this._getStarshipImgUrl(id),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }

    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllPeople = async () => {
        const res = await this.getResourse(`/people/`);
        return res.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResourse(`/people/${id}`);
        return this._transformPerson(person);
    }

    getAllPlanets = async () => {
        const res = await this.getResourse(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResourse(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getResourse(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResourse(`/starships/${id}`);
        return this._transformStarship(starship);
    }
}