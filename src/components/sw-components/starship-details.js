import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const StarshipDetails = ({ itemId, swapiService }) => {
    const {getStarship} = swapiService;
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
export default withSwapiService(StarshipDetails);