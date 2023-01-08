import React from "react";
import PropTypes from "prop-types";
import IconButton from "../../../reuseable-components/IconButton";

import { AiFillHome } from "react-icons/ai"
import { MdVideoSettings } from "react-icons/md"
import { BsGift } from "react-icons/bs"
import { HiOutlineUserGroup } from "react-icons/hi"
import { RiGamepadLine } from "react-icons/ri"

const IconButtonStyle = {
    border: "none",
    backgroundColor: "#242526",
    cursor: "pointer",
}

const MiddleHeader = ({IconButtonClick}) => {

    return (
        <div style={{"display":"flex", "flex-direction":"row", "gap":"4rem"}}>
            <IconButton 
                title="Home"
                IconButtonStyle={IconButtonStyle}
                IconButtonClick={IconButtonClick}
            >
                <AiFillHome 
                    size="2rem"
                    color="#2374E1"
                />
            </IconButton>
            <IconButton 
                title="Videos"
                IconButtonStyle={IconButtonStyle}
                IconButtonClick={IconButtonClick}
            >
                <MdVideoSettings 
                    size="2rem"
                    color="#2374E1"
                />
            </IconButton>
            <IconButton 
                title="MarketPlace"
                IconButtonStyle={IconButtonStyle}
                IconButtonClick={IconButtonClick}
            >
                <BsGift 
                    size="2rem"
                    color="#2374E1"
                />
            </IconButton>
            <IconButton 
                title="Group"
                IconButtonStyle={IconButtonStyle}
                IconButtonClick={IconButtonClick}
            >
                <HiOutlineUserGroup 
                    size="2rem"
                    color="#2374E1"
                />
            </IconButton>
            <IconButton 
                title="Gaming"
                IconButtonStyle={IconButtonStyle}
                IconButtonClick={IconButtonClick}
            >
                <RiGamepadLine 
                    size="2rem"
                    color="#2374E1"
                />
            </IconButton>
        </div>
    )
}

MiddleHeader.propTypes = {
    IconButtonClick: PropTypes.func.isRequired
}


export default MiddleHeader;