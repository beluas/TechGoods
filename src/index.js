import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.styles.scss";
import { Provider } from "react-redux";
import createStore from "./redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore();
const persistor = persistStore(store);

//import {Router} from 'react-router-dom'
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Router>
	</Provider>,
	document.getElementById("root")
);
