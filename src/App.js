import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.component";
import Shop from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import Checkout from "./pages/checkout/Checkout.component";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route
						path="/shop/:category/:pageNumber"
						component={Shop}
					/>
					<Route path="/checkout" component={Checkout} />
				</Switch>
			</div>
		);
	}
}

export default App;
