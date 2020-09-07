import React from 'react'
import PropTypes from 'prop-types'
import './cards-view.css'
import ShopCard from './ShopCard'

function CardsView({ items }) {
    return (
        <div className="cards-view">
                {items.map((item,i) => 
                    <ShopCard key={i} item={item}></ShopCard>
                )}
        </div>
    )
}

CardsView.propTypes = {
    items: PropTypes.array
}

export default CardsView