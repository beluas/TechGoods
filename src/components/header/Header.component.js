import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cart from "../cartIcon/CartIcon.component";
import { HeaderContainer } from "./header.styles";

class Header extends Component {
	render() {
		return (
			<HeaderContainer>
				<li className="brand">
					{" "}
					<Link to="/"> BRAND </Link>{" "}
				</li>
				<li>
					<Link to="/"> Home </Link>
				</li>
				<li>
					<Link to="/shop"> Home </Link>
				</li>
				<li>
					<Link to="/shop"> About Us </Link>
				</li>
				<li className="cart">
					<Cart />
				</li>
			</HeaderContainer>
		);
	}
}

export default Header;
