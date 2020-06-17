import React from "react";
import { DirectoryContainer, CategoriesContainer } from "./directory.styles";
import { directories } from "../../data/directories";
import Hero from "../hero/Hero.component";

import DirectoryCategory from "../directoryItem/DirectoryItem.component";

const Directory = (props) => {
	return (
		<DirectoryContainer>
			<Hero />
			<CategoriesContainer>
				{directories.map((directory) => (
					<DirectoryCategory key={directory.title} {...directory} />
				))}
			</CategoriesContainer>
		</DirectoryContainer>
	);
};

export default Directory;
