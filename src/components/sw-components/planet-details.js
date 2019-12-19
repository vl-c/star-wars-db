import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const PlanetDetails = ({ itemId, swapiService }) => {
    const {getPlanet} = swapiService;
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
export default withSwapiService(PlanetDetails);