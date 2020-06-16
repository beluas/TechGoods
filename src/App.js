import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.component";
import Shop from "./pages/shop/Shop.component";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Router>
					<Switch>
						<Route path="/" exact component={Homepage} />
						<Route path="/shop" exact component={Shop} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
