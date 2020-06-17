import React from "react";
import { ServiceItemContainer } from "./serviceItem.styles";

const ServiceItem = ({ title, desc, icon }) => {
	return (
		<ServiceItemContainer>
			<img src={icon} alt="" />
			<div className="desc">
				<h3>{title}</h3>
				<p>{desc}</p>
			</div>
		</ServiceItemContainer>
	);
};

export default ServiceItem;
