import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson }) => {
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
                }
            }
        </SwapiServiceConsumer>

    );
};
const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPlanet }) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPlanet}>
                            <Record label="Population" value="population" />
                            <Record label="Rotation period" value="rotationPeriod" />
                            <Record label="Diameter" value="diameter" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};
const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getStarship }) => {
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
                }
            }
        </SwapiServiceConsumer>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}