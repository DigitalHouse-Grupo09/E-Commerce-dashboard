export default function Attribute ({ attributes = [], description, defaultValue = '' }) {
    const value = (attributes.find(attr => attr.attribute && attr.attribute.description === description) || {}).value;
    const render = value == null ? defaultValue : value;

    return (<>{render}</>);
}
