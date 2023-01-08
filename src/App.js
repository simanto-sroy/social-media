import React from "react";

import "./assets/styles/_reset.css";
import "./assets/styles/_classes.css";
import "./assets/styles/_utils.css";

import Header from './components/header/Header';
import MainComponent from "./components/main-component/MainComponent";

class App extends React.Component {

	render(){

		return (
			<div className="app">
				<Header />
				<MainComponent />
			</div>
		)
	}

}

export default App;