import React from "react";
import PropTypes from "prop-types";

const Button = ({children, text, buttonStyle, handleButtonClick}) => {

    return (
        <div className="my-2" style={{"display":"flex","gap":"0.3rem", "cursor":"pointer"}}>
            <span>{children}</span>
            <button style={buttonStyle} onClick={(e) => handleButtonClick(e.target.value)}>
                {text}
            </button>
        </div>
    )
}

Button.propTypes = {
    text:  PropTypes.string.isRequired,
    buttonStyle: PropTypes.object.isRequired,
    handleButtonClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Button;