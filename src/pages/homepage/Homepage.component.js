import React from "react";
import { HomepageContainer } from "./homepage.styles";
import DirectoryOverview from "../../components/directoryOverview/DirectoryOverview.component";
import ServicesWrapper from "../../components/servicesWrapper/ServicesWrapper.component";

const Homepage = () => {
	return (
		<HomepageContainer>
			<DirectoryOverview />
			<ServicesWrapper />
		</HomepageContainer>
	);
};

export default Homepage;
