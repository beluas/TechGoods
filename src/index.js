import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.styles.scss";
import { Provider } from "react-redux";
import createStore from "./redux/store";

const store = createStore();

//import {Router} from 'react-router-dom'
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
