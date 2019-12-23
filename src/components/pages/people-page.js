import React, {Component} from 'react';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {
        return(
            <Row left={
                <PersonList onItemsSelected={this.onItemSelected} />
            } right={
                <PersonDetails itemId={this.state.selectedItem} />
            } />
        );
    }
}