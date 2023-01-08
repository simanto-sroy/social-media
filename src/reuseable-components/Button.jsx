import React from "react";

const Button = ({icon, text, buttonStyle, handleClick}) => {

    return (
        <div className="d-flex">
            <span>{icon}</span>
            <button className={buttonStyle} onClick={(e) => handleClick(e.target.value)}>
                {text}
            </button>
        </div>
    )
}

export default Button