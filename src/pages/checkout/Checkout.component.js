import React from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb.component";
import { CheckoutContainer } from "./checkout.styles";

const Checkout = () => {
	return (
		<CheckoutContainer>
			<Breadcrumb
				links={[{ label: "Checkout", routeName: "checkout" }]}
				title={"Checkout"}
			/>
			<h2>Shopping Cart</h2>
		</CheckoutContainer>
	);
};

export default Checkout;
