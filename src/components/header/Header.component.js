import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cart from "../cartIcon/CartIcon.component";
import { HeaderContainer } from "./header.styles";

class Header extends Component {
	render() {
		return (
			<HeaderContainer>
				<ul>
					<li className="brand">
						{" "}
						<Link to="/"> BRAND </Link>{" "}
					</li>
					<li>
						<Link to="/"> Home </Link>
					</li>
					<li>
						<Link to="/shop/all/1"> Shop </Link>
					</li>
					<li>
						<a href="https://beluas.github.io/Projects">
							{" "}
							About Us{" "}
						</a>
					</li>
					<li className="cart">
						<Cart />
					</li>
				</ul>
			</HeaderContainer>
		);
	}
}

export default Header;
