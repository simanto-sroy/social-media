import React from "react";
import PropTypes from "prop-types"

const Logo = ({url, handleLogoClick, logoAnchorStyle, children}) => (
    <a href={url} onClick={handleLogoClick} className={logoAnchorStyle}>
        {children}
    </a>
)

Logo.propTypes = {
    url: PropTypes.string.isRequired,
    handleLogoClick: PropTypes.func.isRequired,
    logoAnchorStyle: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Logo;