import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from './ShopItem'

function ListView({ items }) {
    return (
        <table className="list-view">
            <tbody>
                {items.map((item,i) => 
                    <ShopItem key={i} item={item}></ShopItem>
                )}
            </tbody>
        </table>
    )
}

ListView.propTypes = {
    items: PropTypes.array
}

export default ListView

