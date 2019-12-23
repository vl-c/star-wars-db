import React, {Component} from 'react';
import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components';

export default class PlanetsPage extends Component {

    state = {
        selectedPerson: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {
        return(
            <Row left={
                <PlanetList onItemsSelected={this.onItemSelected} />
            } right={
                <PlanetDetails itemId={this.state.selectedItem} />
            } />
        );
    }
}