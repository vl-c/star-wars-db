import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PropTypes from 'prop-types';
import './random-planet.css';

export default class RandomPlanet extends Component {

    static defaultProps = {
        interval: 5000
    }

    static propTypes = {
        interval: PropTypes.number
    }

    state = {
        planet: {},
        loading: true,
        error: false
    }

    swapiService = new SwapiService();

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*17) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const {planet, loading, error} = this.state;
        const showContent = !(loading || error);
        const spinner = loading ? <Spinner /> : null;
        const errorHandler = error ? <ErrorIndicator /> : null;
        const content = showContent ? <PlanetView planet={planet}/> : null;
        return(
            <div className="random-planet jumbotron rounded">
                {spinner}
                {errorHandler}
                {content}
            </div>
        );
    }
}

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;
    return (
        <React.Fragment>
            <img className="planet-image"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}