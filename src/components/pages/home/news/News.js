import NewProduct from './NewProduct';
import NewUser from './NewUser';

export default function News ({ products, count }) {
    return (
        <>
            <NewProduct />
            <NewUser />
        </>
    );
}
