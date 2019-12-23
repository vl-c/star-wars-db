import React from 'react';
import PropTypes from 'prop-types';
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

ItemList.defaultProps = {
    onItemsSelected: () => {}
}

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onItemsSelected: PropTypes.func,
    children: PropTypes.func.isRequired
}

export default ItemList;