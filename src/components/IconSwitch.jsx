import React from 'react'
import PropTypes from 'prop-types'
import './icon-switch.css'

function IconSwitch({ icon, onSwitch}) {

    const onClick = () => {
        onSwitch();
    }

    return (
        <div className="icon-switch">
            <button onClick={onClick}>
                <i className='material-icons'>{icon}</i>
            </button>
        </div>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string,
    onSwitch: PropTypes.func
}

export default IconSwitch