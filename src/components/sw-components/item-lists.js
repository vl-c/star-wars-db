import React from 'react';
import { withData } from '../hoc-helpers';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const withChild = (Wrap, child) => {
    return (props) => {
        return (
            <Wrap {...props}>
                {child}
            </Wrap>
        );
    }
};

const renderPerson = (i) => <span>{i.name} ({i.birthYear})</span>;
const renderPlanet = (i) => <span>{i.name} ({i.diameter})</span>;
const renderStarship = (i) => <span>{i.name} ({i.model})</span>;

const PersonList = withChild(withData(ItemList, getAllPeople), renderPerson);
const PlanetList = withChild(withData(ItemList, getAllPlanets), renderPlanet);
const StarshipList = withChild(withData(ItemList, getAllStarships), renderStarship);

export {
    PersonList,
    PlanetList,
    StarshipList
}