import React from "react";
import { BreadCrumbContainer } from "./breadcrumb.styles";
import { withRouter } from "react-router-dom";

const Breadcrumb = ({ links, history, title }) => {
	return (
		<BreadCrumbContainer>
			<div className="links">
				<span
					onClick={() => {
						history.push("/");
					}}
				>
					Home
				</span>
				{links.map((link) => (
					<span
						key={link.routeName}
						onClick={() => history.push(`/${link.routeName}`)}
					>
						{link.label}
					</span>
				))}
			</div>

			<h1>{title.toUpperCase()}</h1>
		</BreadCrumbContainer>
	);
};

export default withRouter(Breadcrumb);
