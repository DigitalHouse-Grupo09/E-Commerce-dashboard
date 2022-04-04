import React, { Component } from 'react';
import CategoriesList from './CategoriesList';
import { Alert, Loader } from '../../../helpers';

class Categories extends Component {
    constructor () {
        super();
        this.state = {
            error: false,
            loading: true,
            categories: []
        };
    }

    componentDidMount () {
        fetch('/api/products/count-by-categories')
            .then(respuesta => respuesta.json())
            .then(categories => {
                this.setState({
                    error: false,
                    loading: false,
                    categories
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
        const { error, loading, categories } = this.state;

        return (
            <React.Fragment>
                {loading ? (<Loader className="my-5" />) : (
                    <>
                        {error ? (<Alert text="Se produjo un error interno. Por favor contacte al administrador del sistema." />) : (
                            <CategoriesList categories={categories} />
                        )}
                    </>
                )}
            </React.Fragment>
        );
    }
}

export default Categories;
