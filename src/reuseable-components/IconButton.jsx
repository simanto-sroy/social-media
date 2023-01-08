import React from "react";
import PropTypes from "prop-types";

const IconButton = ({ title, IconButtonStyle, IconButtonClick, children}) => {

    return (
        <button
            title={title}
            style={IconButtonStyle}
            type="button"
            onClick={e => IconButtonClick(e.target.value)}
        >
            {children}
        </button>
    )
}

IconButton.propTypes = {
    title: PropTypes.string.isRequired,
    IconButtonClick: PropTypes.func.isRequired,
    IconButtonStyle: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default IconButton;