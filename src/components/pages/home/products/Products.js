import React, { Component } from 'react';
import ProductsList from './ProductsList';
import { Alert, Loader } from '../../../helpers';

class Products extends Component {
    constructor () {
        super();
        this.state = {
            error: false,
            loading: true,
            count: 0,
            products: []
        };
    }

    componentDidMount () {
        fetch('/api/products')
            .then(respuesta => respuesta.json())
            .then(products => {
                this.setState({
                    error: false,
                    loading: false,
                    count: products.count,
                    products: products.products
                });
            })
            .catch(error => {
                console.log(error);

                this.setState({
                    error: true,
                    loading: false,
                });
            });
    }

    render () {
        const { error, loading, count, products } = this.state;

        return (
            <React.Fragment>
                {loading ? (<Loader className="my-5" />) : (
                    <>
                        {error ? (<Alert text="Se produjo un error interno. Por favor contacte al administrador del sistema." />) : (
                            <ProductsList products={products} count={count} />
                        )}
                    </>
                )}
            </React.Fragment>
        );
    }
}

export default Products;
