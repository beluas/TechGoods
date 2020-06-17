import React from "react";
import { HomepageContainer } from "./homepage.styles";
import DirectoryOverview from "../../components/directoryOverview/DirectoryOverview.component";

const Homepage = (props) => {
	return (
		<HomepageContainer>
			<DirectoryOverview />
		</HomepageContainer>
	);
};

export default Homepage;
