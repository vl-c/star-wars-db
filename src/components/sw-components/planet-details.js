import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record label="Population" value="population" />
            <Record label="Rotation period" value="rotationPeriod" />
            <Record label="Diameter" value="diameter" />
        </ItemDetails>
    );
};
const mapMethodsToProps = (swapiService) => {
    return {getData: swapiService.getPlanet};
};
export default withSwapiService(PlanetDetails, mapMethodsToProps);