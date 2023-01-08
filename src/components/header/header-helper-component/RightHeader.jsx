import React from "react";
import PropTypes from "prop-types";
import IconButton from "../../../reuseable-components/IconButton";

import { CgMenuGridO } from "react-icons/cg"
import { SiMessenger } from "react-icons/si"
import { MdNotificationsActive } from "react-icons/md"
import { RiAccountCircleLine } from "react-icons/ri"

const IconButtonStyle = {
    border: "none",
    backgroundColor: "#242526",
    cursor: "pointer",
}

const RightHeader = ({IconButtonClick}) => {

    return (
        <div style={{"display":"flex", "flex-direction":"row", "gap":"0.5rem"}}>
            <IconButton 
                title="Menu"
                IconButtonStyle={IconButtonStyle}
                IconButtonClick={IconButtonClick}
            >
                <CgMenuGridO 
                    size="2rem"
                    color="#2374E1"
                />
            </IconButton>
            <IconButton 
                title="Messenger"
                IconButtonStyle={IconButtonStyle}
                IconButtonClick={IconButtonClick}
            >
                <SiMessenger 
                    size="1.5rem"
                    color="#2374E1"
                />
            </IconButton>
            <IconButton 
                title="Notifications"
                IconButtonStyle={IconButtonStyle}
                IconButtonClick={IconButtonClick}
            >
                <MdNotificationsActive 
                    size="2rem"
                    color="#2374E1"
                />
            </IconButton>
            <IconButton 
                title="Account"
                IconButtonStyle={IconButtonStyle}
                IconButtonClick={IconButtonClick}
            >
                <RiAccountCircleLine 
                    size="2rem"
                    color="#2374E1"
                />
            </IconButton>
        </div>
    )
}

RightHeader.propTypes = {
    IconButtonClick: PropTypes.func.isRequired
}

export default RightHeader;