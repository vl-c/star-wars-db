import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import { PersonList, PlanetList, StarshipList } from '../sw-components';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
        selectedPlanet: null,
        selectedStarship: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet: id
        });
    }

    onStarshipSelected = (id) => {
        this.setState({
            selectedStarship: id
        });
    }

    render() {
        const personList = (
            <PersonList
                onItemsSelected={this.onPersonSelected}>
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}
            </PersonList>

        );

        const planetsList = (
            <PlanetList
                onItemsSelected={this.onPlanetSelected}>
                {(i) => (
                    `${i.name} (${i.diameter})`
                )}
            </PlanetList>
        );

        const starshipsList = (
            <StarshipList
                onItemsSelected={this.onStarshipSelected}>
                {(i) => (
                    `${i.name} (${i.model})`
                )}
            </StarshipList>
        );

        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <ErrorBoundry>
                    <Row left={personList} right={
                        <PersonDetails itemId={this.state.selectedPerson} />
                    } />
                </ErrorBoundry>
                <ErrorBoundry>
                    <Row left={planetsList} right={
                        <PlanetDetails itemId={this.state.selectedPlanet} />
                    } />
                </ErrorBoundry>
                <ErrorBoundry>
                    <Row left={starshipsList} right={
                        <StarshipDetails itemId={this.state.selectedStarship} />
                    } />
                </ErrorBoundry>
            </div>
        );
    }
}