import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const PersonDetails = ({ itemId, swapiService }) => {
    const {getPerson} = swapiService;
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
export default withSwapiService(PersonDetails);