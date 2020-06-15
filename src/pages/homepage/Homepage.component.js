import React from "react";
import { HomepageContainer } from "./homepage.styles";
import Directory from "../../components/directory/Directory.component";

const Homepage = (props) => {
	return (
		<HomepageContainer>
			<Directory />
		</HomepageContainer>
	);
};

export default Homepage;
