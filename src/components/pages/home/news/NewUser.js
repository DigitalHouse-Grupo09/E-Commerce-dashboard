import React, { Component } from 'react';
import { Alert, Loader } from '../../../helpers';


class NewProduct extends Component {
    constructor () {
        super();
        this.state = {
            error: false,
            loading: true
        };
    }

    componentDidMount () {
        fetch('/api/users/last')
            .then(respuesta => respuesta.json())
            .then(user => {
                this.setState({
                    error: false,
                    loading: false,
                    user
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
        const { error, loading, user } = this.state;

        return (
            <React.Fragment>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Último usuario agregado</h6>
                    </div>
                    <div className="card-body">
                        {loading ? (<Loader className="my-5" />) : (
                            <>
                                {error ? (<Alert text="Se produjo un error interno. Por favor contacte al administrador del sistema." />) : (
                                    <>
                                        <div className="row">
                                            <div className="col-12">
                                                <p><b>#</b> {user.id}</p>
                                            </div>
                                            <div className="col-12">
                                                <p><b>Nombre</b>: {user.full_name}</p>
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
