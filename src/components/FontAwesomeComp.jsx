import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FontAwesomeComp = ({ fontIcon, colour, fontSize }) => {
	const element = (
		<FontAwesomeIcon icon={fontIcon} size={fontSize ? fontSize : ""} />
	);

	return <FontDiv colour={colour}>{element}</FontDiv>;
};

export default FontAwesomeComp;

const FontDiv = styled.div`
	color: ${({ colour }) => (colour ? colour : "#ffffff")};
`;
