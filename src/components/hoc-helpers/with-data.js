import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

const withData = (View) => (service) => {
    return class extends Component {
        state = {
            items: null,
            loading: true,
            error: false
        }

        componentDidMount() {
            this.update();
        }

        update() {
            this.setState({
                loading: true,
                error: false
            })
            service()
                .then((items) => {
                    this.setState({
                        items,
                        loading: false
                    });
                })
                .catch(() => {
                    this.setState({
                        loading: false,
                        error: true
                    });
                });
        }

        render() {
            const { items, loading, error } = this.state;
            if (loading) {
                return <Spinner />;
            }
            if (error) {
                return <ErrorIndicator />;
            }
            return <View {...this.props} items={items} />
        }
    };
};

export default withData;