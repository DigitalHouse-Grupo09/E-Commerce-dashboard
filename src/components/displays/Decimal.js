import numeral from 'numeral';

export default function Decimal ({ value = 0, format = numeral.defaultDecimalFormat }) {
    return (<>{numeral(Number(value)).format(format)}</>);
}
