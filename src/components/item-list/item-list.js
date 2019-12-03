import React, {Component} from 'react';
import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        personsList: null
    }

    componentDidMount() {
        this.swapiService.getAllPeople()
            .then((personsList) => {
                this.setState({
                    personsList
                })
            });
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    onClick={() => this.props.onPersonSelected(id)}
                    key={id}>
                    {name}
                </li>
            )
        });
    }

    render() {
        const {personsList} = this.state;
        if (!personsList) {
            return <Spinner />;
        }
        const persons = this.renderItems(personsList);
        return(
            <ul className="item-list list-group">
                {persons}
          </ul>
        );
    }
}