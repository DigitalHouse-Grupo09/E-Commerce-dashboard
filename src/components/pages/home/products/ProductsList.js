import ProductItemList from './ProductItemList';

export default function ProductsList ({ products, count }) {
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Productos <small>({count})</small></h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Titulo</th>
                                <th>Precio</th>
                                <th>Editorial</th>
                                <th>Fecha de publicacion</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Titulo</th>
                                <th>Precio</th>
                                <th>Editorial</th>
                                <th>Fecha de publicacion</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {products.map((product, index) => <ProductItemList key={index} product={product} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
