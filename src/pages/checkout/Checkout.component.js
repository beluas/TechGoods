import React from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb.component";
import { CheckoutContainer, BodyCheckoutContainer } from "./checkout.styles";
import CheckoutItems from "../../components/checkoutItems/CheckoutItems.component";

const Checkout = () => {
	return (
		<CheckoutContainer>
			<Breadcrumb
				links={[{ label: "Checkout", routeName: "checkout" }]}
				title={"Checkout"}
			/>
			<BodyCheckoutContainer>
				<CheckoutItems />
			</BodyCheckoutContainer>
		</CheckoutContainer>
	);
};

export default Checkout;
