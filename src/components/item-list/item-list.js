import React from 'react';
import './item-list.css';

const ItemList = (props) => {
    const { items, onItemsSelected, children: renderLabel } = props;
    const renderedItems = items.map((item) => {
        const { id } = item;
        const label = renderLabel(item);
        return (
            <li className="list-group-item"
                onClick={() => onItemsSelected(id)}
                key={id}>
                {label}
            </li>
        )
    });

    return (
        <ul className="item-list list-group">
            {renderedItems}
        </ul>
    );

}

export default ItemList;