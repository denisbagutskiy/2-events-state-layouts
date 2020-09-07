import React from 'react'
import PropTypes from 'prop-types'

function ShopCard({ item }) {

    const { name, price, color, img } = item;

    return (
        <div className="shop-card" style={{backgroundImage:'url('+img+')'}}>
            <div className="name">{name}</div>
            <div className="color">{color}</div>
            <div className="shop-card__footer">
                <div className="price">${price}</div>
                <div className="cart">
                    <span>Add to cart</span>
                </div>
            </div>
        </div>
    )
}

ShopCard.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.string,
        color: PropTypes.string,
        img: PropTypes.string
    })
}

export default ShopCard

