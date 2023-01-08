import React from "react";
import Button from "../../../reuseable-components/Button";

import { FaUserFriends, FaSave, FaClock, FaVideoSlash } from "react-icons/fa";
import { MdRecentActors, MdGroups, MdBloodtype, MdOutlineHealthAndSafety, MdOutlineGames } from "react-icons/md";
import { AiTwotoneHome, AiFillFlag, AiFillSound, AiFillStar } from "react-icons/ai";
import { CgLoadbarSound } from "react-icons/cg";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { ImPaypal } from "react-icons/im";
import { DiCssTricks } from "react-icons/di";
import { GiFireSpellCast } from "react-icons/gi";

import ProfileImg from "../../../assets/images/profile.jpg";

const buttonStyle = {
    backgroundColor: "#111",
    border: "none",
    fontSize: "1rem",
    color: "#F2F2F2",
    textShadow: "0.8px 0.3px #f1f1f1",
    cursor: "pointer"
}

class LeftSidebar extends React.Component {

    handleButtonClick = (e) => {
    
    }

    render(){
        return (
            <div style={{"overflowY":"scroll"}}>
                <Button
                    text="Simanto Roy"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    <img 
                        src={ProfileImg} 
                        alt="ProfileImage" 
                        style={{"width":"2rem", "height":"2rem", "borderRadius":"50%", "objectFit":"cover"}}
                    />
                </Button>
                <Button
                    text="Friends"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<FaUserFriends size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Saved"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<FaSave size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Memories"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<FaClock size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Most Recent"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<MdRecentActors size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Group"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<MdGroups size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Marketplace"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<AiTwotoneHome size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Watch"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<FaVideoSlash size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Pages"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<AiFillFlag size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Add Center"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<AiFillSound size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Add Manager"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<CgLoadbarSound size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Blood Donation"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<MdBloodtype size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Event"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<BsFillCalendarCheckFill size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Emotional Health"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<MdOutlineHealthAndSafety size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Facebook Pay"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<ImPaypal size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Favorites"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<AiFillStar size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Fundraisers"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<DiCssTricks size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Gaming Video"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<MdOutlineGames size="1.5rem" color="#359EF9"/>}
                </Button>
                <Button
                    text="Crisis Response"
                    buttonStyle={buttonStyle}
                    handleButtonClick={this.handleButtonClick}
                >
                    {<GiFireSpellCast size="1.5rem" color="#359EF9"/>}
                </Button>
            </div>
        )
    }
}

export default LeftSidebar