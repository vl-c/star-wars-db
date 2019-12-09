import React, {Component} from 'react';
import Spinner from '../spinner';

const withData = (View, service) => {
    return class extends Component {
        state = {
            items: null
        }

        componentDidMount() {
            service()
                .then((items) => {
                    this.setState({
                        items
                    })
                });
        }

        render() {
            const { items } = this.state;
            if (!items) {
                return <Spinner />;
            }
            return <View {...this.props} items={items} />
        }
    };
};

export default withData;