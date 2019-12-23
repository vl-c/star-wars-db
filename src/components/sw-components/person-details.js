import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record label="Gender" value="gender" />
            <Record label="Birth Year" value="birthYear" />
            <Record label="Eye Color" value="eyeColor" />
            <Record label="Height" value="height" />
            <Record label="Mass" value="mass" />
        </ItemDetails>
    );
};
const mapMethodsToProps = (swapiService) => {
    return {getData: swapiService.getPerson};
};
export default withSwapiService(mapMethodsToProps)(PersonDetails);