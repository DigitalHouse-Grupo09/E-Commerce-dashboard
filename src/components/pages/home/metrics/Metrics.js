import React, { Component } from 'react';
import MetricCard from './MetricCard';
import { Loader } from '../../../helpers';

class Metrics extends Component {
    constructor () {
        super();
        this.state = {
            metrics: {
                users: {
                    error: false,
                    loading: true
                },
                products: {
                    error: false,
                    loading: true
                },
                categories: {
                    error: false,
                    loading: true
                }
            }
        };
    }

    componentDidMount () {
        this.fetchMetricsFor('categories');
        this.fetchMetricsFor('products');
        this.fetchMetricsFor('users');
    }

    fetchMetricsFor (type) {
        fetch(`/api/${type}/count`)
            .then(respuesta => respuesta.json())
            .then(results => {
                const { metrics } = this.state;

                this.setState({
                    metrics: {
                        ...metrics,
                        [type]: {
                            error: false,
                            loading: false,
                            count: results.count
                        }
                    }
                });
            })
            .catch(error => {
                const { metrics } = this.state;

                console.log(error);

                this.setState({
                    metrics: {
                        ...metrics,
                        [type]: {
                            error: true,
                            loading: false
                        }
                    }
                });
            });
    }

    render () {
        const { metrics } = this.state;
        const { categories, products, users } = metrics;

        return (
            <React.Fragment>
                <div className="row">
                    <MetricCard color={products.error ? 'danger' : 'primary'} title="Productos" value={products.loading ? <Loader align="start" /> : (products.error ? 'Error intentando calcular' : products.count)} />
                    <MetricCard color={products.error ? 'danger' : 'success'} title="Usuarios" value={users.loading ? <Loader align="start" /> : (users.error ? 'Error intentando calcular' : users.count)} />
                    <MetricCard color={products.error ? 'danger' : 'warning'} title="Categorias" value={categories.loading ? <Loader align="start" /> : (categories.error ? 'Error intentando calcular' : categories.count)} />
                </div>
            </React.Fragment>
        );
    }
}

export default Metrics;

