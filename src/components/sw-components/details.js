import React from 'react';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import Record from '../record';

const { getPerson, getPlanet, getStarship } = new SwapiService();

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}>
            <Record label="Gender" value="gender" />
            <Record label="Birth Year" value="birthYear" />
            <Record label="Eye Color" value="eyeColor" />
            <Record label="Height" value="height" />
            <Record label="Mass" value="mass" />
        </ItemDetails>
    );
};
const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}>
            <Record label="Population" value="population" />
            <Record label="Rotation period" value="rotationPeriod" />
            <Record label="Diameter" value="diameter" />
        </ItemDetails>
    );
};
const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}>
            <Record label="Model" value="model" />
            <Record label="Manufacturer" value="manufacturer" />
            <Record label="Cost" value="costInCredits" />
            <Record label="Length" value="length" />
            <Record label="Crew" value="crew" />
            <Record label="Passengers" value="passengers" />
            <Record label="Cargo capacity" value="cargoCapacity" />
        </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}