import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.component";
import Shop from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import Checkout from "./pages/checkout/Checkout.component";
import Results from "./pages/results/Results.component";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Header />
				<Switch>
					<Route
						exact
						path="https://beluas.github.io/TechGoods/"
						component={Homepage}
					/>
					<Route
						path="https://beluas.github.io/TechGoods//shop/:category/:pageNumber"
						component={Shop}
					/>
					<Route
						path="https://beluas.github.io/TechGoods//checkout"
						component={Checkout}
					/>
					<Route
						path="https://beluas.github.io/TechGoods//shop/results"
						component={Results}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
