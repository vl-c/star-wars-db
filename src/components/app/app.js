import React, {Component} from 'react';
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi-service';

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
        return(
            <div className="container">
                <Header />
                <RandomPlanet />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onPersonSelected={this.onPersonSelected}
                            service={this.swapiService.getAllPeople}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }
}