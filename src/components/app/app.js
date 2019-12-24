import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

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
                    <Router>
                        <Header />
                        <RandomPlanet />
                        <ErrorBoundry>
                            <Switch>
                                <Route
                                    exact
                                    path='/'
                                    render={() => <h2>Welcome to StarDB</h2>} />
                                <Route path='/people/:id?' component={PeoplePage} />
                                <Route path='/planets/' component={PlanetsPage} />
                                <Route path='/starships/' component={StarshipsPage} exact/>
                                <Route
                                    path='/starships/:id'
                                    render={({ match }) => {
                                        const { id } = match.params;
                                        return <StarshipDetails itemId={id} />
                                    }} />
                                <Route render={()=><h2>Page not found</h2>} />
                            </Switch>
                        </ErrorBoundry>
                    </Router>
                </SwapiServiceProvider>
            </div>
        );
    }
}