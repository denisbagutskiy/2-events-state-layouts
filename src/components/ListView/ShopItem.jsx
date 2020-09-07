import React from 'react'
import PropTypes from 'prop-types'
import './shop-item.css'

function ShopItem({ item }) {

    const { name, price, color, img } = item;
    
    return (
        <tr className="shop-item">
            <td>
                <img src={img} alt={name}/>
            </td>
            <td className="name">{name}</td>
            <td className="color">{color}</td>
            <td className="price">${price}</td>
            <td>
                <div className="cart">
                    <span>Add to cart</span>
                </div>
            </td>
        </tr>
    )
}

ShopItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.string,
        color: PropTypes.string,
        img: PropTypes.string
    })
}

export default ShopItem

