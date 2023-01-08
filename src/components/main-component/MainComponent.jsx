import React from "react";
import LeftSidebar from "./left-sidebar/LeftSidebar";
import MiddleContent from "./middle-content/MiddleContent";
import RightSidebar from "./right-sidebar/RightSidebar";

class MainComponent extends React.Component {

    render(){
        return (
            <div className="container">
                <div className="d-flex my-2">
                    <LeftSidebar />
                    <MiddleContent />
                    <RightSidebar />
                </div>
            </div>
        )   
    }
}

export default MainComponent;