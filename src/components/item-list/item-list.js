import React, {Component} from 'react';
import './item-list.css';
import Spinner from '../spinner';

export default class ItemList extends Component {

    state = {
        items: null
    }

    componentDidMount() {
        const {service} = this.props;
        service()
            .then((items) => {
                this.setState({
                    items
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
        const {items} = this.state;
        if (!items) {
            return <Spinner />;
        }
        const renderedItems = this.renderItems(items);
        return(
            <ul className="item-list list-group">
                {renderedItems}
          </ul>
        );
    }
}