import React, {Component} from 'react';
import Row from '../row';
import { StarshipList, StarshipDetails } from '../sw-components';

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
                <StarshipList onItemsSelected={this.onItemSelected} />
            } right={
                <StarshipDetails itemId={this.state.selectedItem} />
            } />
        );
    }
}