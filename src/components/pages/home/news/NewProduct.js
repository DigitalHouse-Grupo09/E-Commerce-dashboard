import React, { Component } from 'react';
import { Alert, Loader } from '../../../helpers';
import { AmountDisplay, AttributeDisplay } from '../../../displays';

const baseImageUrl = 'http://bookify-commerce.herokuapp.com/';

class NewProduct extends Component {
    constructor () {
        super();
        this.state = {
            error: false,
            loading: true
        };
    }

    componentDidMount () {
        fetch('/api/products/last')
            .then(respuesta => respuesta.json())
            .then(product => {
                if (product) {
                    // Prepare images
                    product.image = (product.images && product.images.length && product.images[0]) || {};

                    // Prepare author
                    product.author = product.authors[0];
                }

                this.setState({
                    error: !product,
                    loading: false,
                    product
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
        const { error, loading, product } = this.state;

        return (
            <React.Fragment>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Último producto agregado</h6>
                    </div>
                    <div className="card-body">
                        {loading ? (<Loader className="my-5" />) : (
                            <>
                                {error ? (<Alert text="Se produjo un error interno. Por favor contacte al administrador del sistema." />) : (
                                    <>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <img src={`${baseImageUrl}${product.image.src || '/assets/img/placeholder.png'}`} alt="Imagen" width="100%" />
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p><b>#</b> {product.id}</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p><b>Título</b>: <AttributeDisplay attributes={product.attributes} description="title" /></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p><b>Precio</b>: <AmountDisplay value={product.price.amount} /></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p><b>Categoría</b>: {product.category.description}</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p><b>Autor</b>: {product.author.full_name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewProduct;
