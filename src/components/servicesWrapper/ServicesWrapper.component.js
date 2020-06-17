import React from "react";
import { ServicesWrapperContainer } from "./servicesWrapper.styles";
import ServiceItem from "../serviceItem/ServiceItem.component";

const serviceItems = [
	{
		title: "Free Shipping",
		desc: "Free shipping on all orders",
		icon: "/assets/servicesItems/shipping.svg",
	},
	{
		title: "Money Guarantee Shipping",
		desc: "30 days money back",
		icon: "/assets/servicesItems/guarantee.svg",
	},
	{
		title: "Online Support 24/7",
		desc: "Technical support 24/7",
		icon: "/assets/servicesItems/support.svg",
	},
	{
		title: "Secure Payments",
		desc: "All cards accepted",
		icon: "/assets/servicesItems/wallet.svg",
	},
];

const ServicesWrapper = () => {
	return (
		<ServicesWrapperContainer>
			{serviceItems.map((service) => (
				<ServiceItem {...service} />
			))}
		</ServicesWrapperContainer>
	);
};

export default ServicesWrapper;
