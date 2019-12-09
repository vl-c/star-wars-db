import React, {Component} from 'react';
import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        loading: false
    }

    componentDidMount() {
        this.itemUpdate();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.itemUpdate();
        }
    }

    itemUpdate() {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }
        this.setState({loading: true});
        getData(itemId)
            .then((item) => {
                this.setState({ item, loading: false });
            });
    }

    render() {
        const {item, loading} = this.state;
        if (!item) {
            return <span>Select a item from a list</span>
        }
        if (loading) {
            return <Spinner />;
        }
        const {imgSrc, name} = item;
        return(
            <div className="item-details card">
                <img className="item-image"
                src={imgSrc} alt={name}/>
    
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
          </div>
        );
    }
}