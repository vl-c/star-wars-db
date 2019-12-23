import React from 'react';
import { withData, withChild, withSwapiService, compose } from '../hoc-helpers';
import ItemList from '../item-list';

const renderPerson = (i) => <span>{i.name} ({i.birthYear})</span>;
const renderPlanet = (i) => <span>{i.name} ({i.diameter})</span>;
const renderStarship = (i) => <span>{i.name} ({i.model})</span>;

const mapPeopleMethodToProps = (swapiService) => {
    return {getData: swapiService.getAllPeople};
}
const mapPlanetMethodToProps = (swapiService) => {
    return {getData: swapiService.getAllPlanets};
}
const mapStarshipMethodToProps = (swapiService) => {
    return {getData: swapiService.getAllStarships};
}

const PersonList = compose(
    withSwapiService(mapPeopleMethodToProps),
    withData,
    withChild(renderPerson),
)(ItemList);
const PlanetList = compose(
    withSwapiService(mapPlanetMethodToProps),
    withData,
    withChild(renderPlanet)
)(ItemList);
const StarshipList = compose(
    withSwapiService(mapStarshipMethodToProps),
    withData,
    withChild(renderStarship),
)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
}