import React from "react";
import PropTypes from "prop-types";

import InputItem from "../../../reuseable-components/InputItem";
import Logo from "../../../reuseable-components/Logo";

import {FaFacebook} from "react-icons/fa";

const logoStyle = {
    border: "none"
}

const inputStyle = {
    width: "15rem",
    borderRadius: "1.5rem",
    backgroundColor: "#3A3B3C",
    border: "none",
    padding: ".8rem",
    fontSize: ".9rem",
    color: "#FFF",
}

const LeftHeader = ({handleLogoClick, inputHandleChange}) => {

    return (
        <div className="d-flex" style={{"gap":"0.5rem"}}>
            <Logo 
                url="/"
                handleLogoClick={handleLogoClick}
                logoAnchorStyle={logoStyle}
            >
                <FaFacebook 
                    size="2.5rem"
                    color="#2374E1"
                />
            </Logo>
            <InputItem 
                inputPlaceholder="🔍 Search Facebook"
                inputType="search"
                inputHandleChange={inputHandleChange}
                inputStyle={inputStyle}
            />
        </div>
    )
}

LeftHeader.propTypes = {
    handleLogoClick: PropTypes.func.isRequired,
    inputHandleChange: PropTypes.func.isRequired
}

export default LeftHeader;