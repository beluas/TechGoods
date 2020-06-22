import React from "react";
import {
	ImageContainer,
	DescriptionContainer,
	HeroContainer,
	TitleContainer,
} from "./hero.styles";
import CustomButton from "../customButton/CustomButton.component";

const Hero = () => {
	return (
		<HeroContainer>
			<TitleContainer>
				<h3>Beats Solo</h3>
				<h2>Wireless</h2>
				<div className="title">
					<h1>HEADPHONE</h1>
				</div>
				<CustomButton width="25%">Shop</CustomButton>
			</TitleContainer>
			<DescriptionContainer>
				<h2>Desc</h2>
				<p>
					There are many variations passages of Lorem Ipsum available.
				</p>
			</DescriptionContainer>
			<ImageContainer>
				<img src="/assets/headphone.png" alt="" />
			</ImageContainer>
		</HeroContainer>
	);
};

export default Hero;
