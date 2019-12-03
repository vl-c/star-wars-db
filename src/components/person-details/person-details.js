import React, {Component} from 'react';
import './person-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        loading: false
    }

    componentDidMount() {
        this.personUpdate();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.personUpdate();
        }
    }

    personUpdate() {
        const {personId} = this.props;
        if (!personId) {
            return;
        }
        this.setState({loading: true});
        this.swapiService.getPerson(personId)
            .then((person) => {
                this.setState({ person, loading: false });
            });
    }

    render() {
        const {person, loading} = this.state;
        if (!person) {
            return <span>Select a person from a list</span>
        }
        if (loading) {
            return <Spinner />;
        }
        const {id, name, birthYear, eyeColor, gender, height, mass} = person;
        return(
            <div className="person-details card">
                <img className="person-image"
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="person"/>
    
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Height</span>
                            <span>{height}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Mass</span>
                            <span>{mass}</span>
                        </li>
                    </ul>
                </div>
          </div>
        );
    }
}