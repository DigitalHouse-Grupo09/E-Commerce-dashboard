import Decimal from './Decimal';

export default function Amount ({ value = 0, format }) {
    return (<>$ <Decimal value={value} format={format} /></>);
}
