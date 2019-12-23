import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

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
        return (
            <div className="container">
                <SwapiServiceProvider value={this.swapiService}>
                    <Header />
                    <RandomPlanet />
                    <ErrorBoundry>
                        <PeoplePage />
                    </ErrorBoundry>
                    <ErrorBoundry>
                        <PlanetsPage />
                    </ErrorBoundry>
                    <ErrorBoundry>
                        <StarshipsPage />
                    </ErrorBoundry>
                </SwapiServiceProvider>
            </div>
        );
    }
}