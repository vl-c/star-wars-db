import React, { Component } from 'react';
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

export default class App extends Component {

    swapiService = new SwapiService;

    state = {
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        const itemList = (
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
                onPersonSelected={this.onPersonSelected}
                service={this.swapiService.getAllPlanets}
                renderFunction={({ name, diameter }) => {
                    return `${name} (${diameter})`
                }} />
        );

        const starshipsList = (
            <ItemList
                onPersonSelected={this.onPersonSelected}
                service={this.swapiService.getAllStarships}
                renderFunction={({ name, model }) => {
                    return `${name} (${model})`
                }} />
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );

        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <ErrorBoundry>
                    <Row left={itemList} right={personDetails} />
                </ErrorBoundry>
                {/* <Row left={planetsList} right={personDetails} />
                <Row left={starshipsList} right={personDetails} /> */}
            </div>
        );
    }
}