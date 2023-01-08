import React from "react"
import LeftHeader from "./header-helper-component/LeftHeader";
import MiddleHeader from "./header-helper-component/MiddleHeader";
import RightHeader from "./header-helper-component/RightHeader";

class Header extends React.Component {

    render() {
        return (
            <div className="bg-dark-light py-1">
                <div className="container">
                    <div className="d-flex">
                        <LeftHeader />
                        <MiddleHeader />
                        <RightHeader />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;