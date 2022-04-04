import { AmountDisplay, AttributeDisplay } from '../../../displays';

export default function ProductItemList ({ product }) {
    const attrs = product.attributes;

    return (
        <tr>
            <td>{product.id}</td>
            <td><AttributeDisplay attributes={attrs} description="title" /></td>
            <td className="text-right"><AmountDisplay value={product.price.amount} /></td>
            <td><AttributeDisplay attributes={attrs} description="editorial" /></td>
            <td><AttributeDisplay attributes={attrs} description="published_at" /></td>
        </tr>
    );
}
