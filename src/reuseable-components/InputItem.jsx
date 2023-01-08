import React from "react";
import PropTypes from "prop-types";

const InputItem = ({inputPlaceholder, inputType, inputStyle, inputHandleChange}) => (
    <input
        placeholder={inputPlaceholder}
        type={inputType}
        style={inputStyle}
        onChange={(e) => inputHandleChange(e.target.value)}
    />
)

InputItem.propTypes = {
    inputPlaceholder: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputStyle: PropTypes.object.isRequired,
    inputHandleChange: PropTypes.func.isRequired,
}

export default InputItem;