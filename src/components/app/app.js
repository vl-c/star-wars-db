import React, { Component } from 'react';
import Header from '../header';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import Record from '../record';

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
            <ItemList
                onPersonSelected={this.onPersonSelected}
                service={this.swapiService.getAllPeople}>
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}
            </ItemList>

        );

        const planetsList = (
            <ItemList
                onPersonSelected={this.onPlanetSelected}
                service={this.swapiService.getAllPlanets}>
                {(i) => (
                    `${i.name} (${i.diameter})`
                )}
            </ItemList>
        );

        const starshipsList = (
            <ItemList
                onPersonSelected={this.onStarshipSelected}
                service={this.swapiService.getAllStarships}>
                {(i) => (
                    `${i.name} (${i.model})`
                )}
            </ItemList>
        );

        const personDetails = (
            <ItemDetails
                itemId={this.state.selectedPerson}
                getData={this.swapiService.getPerson}>
                <Record label="Gender" value="gender" />
                <Record label="Birth Year" value="birthYear" />
                <Record label="Eye Color" value="eyeColor" />
                <Record label="Height" value="height" />
                <Record label="Mass" value="mass" />
            </ItemDetails>
        );

        const planetDetails = (
            <ItemDetails
                itemId={this.state.selectedPlanet}
                getData={this.swapiService.getPlanet} >
                <Record label="Population" value="population" />
                <Record label="Rotation period" value="rotationPeriod" />
                <Record label="Diameter" value="diameter" />
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={this.state.selectedStarship}
                getData={this.swapiService.getStarship} >
                <Record label="Model" value="model" />
                <Record label="Manufacturer" value="manufacturer" />
                <Record label="Cost" value="costInCredits" />
                <Record label="Length" value="length" />
                <Record label="Crew" value="crew" />
                <Record label="Passengers" value="passengers" />
                <Record label="Cargo capacity" value="cargoCapacity" />
            </ItemDetails>
        );

        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <ErrorBoundry>
                    <Row left={personList} right={personDetails} />
                </ErrorBoundry>
                <ErrorBoundry>
                    <Row left={planetsList} right={planetDetails} />
                </ErrorBoundry>
                <ErrorBoundry>
                    <Row left={starshipsList} right={starshipDetails} />
                </ErrorBoundry>
            </div>
        );
    }
}