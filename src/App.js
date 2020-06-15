import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.component";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Router>
					<Switch>
						<Route path="/" exact component={Homepage} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
