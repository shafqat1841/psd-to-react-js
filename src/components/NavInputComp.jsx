import React from "react";
import styled from "styled-components";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import FlexDivComp from "./FlexDivComp";
import FontAwesomeComp from "./FontAwesomeComp";
import InputComp from "./InputComp";

const NavInputComp = () => {
	return (
		<InputDiv>
			<FlexDivComp
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
				divWidth="9rem"
				divHeight="2rem"
			>
				<InputComp
					colour="black"
					font="font1B"
					backgroundColour="#c3bfbc"
					inputWidth="6rem"
					inputHeight="1.5rem"
				/>
				<FontAwesomeComp fontIcon={faSearch} colour="#68635f" />
			</FlexDivComp>
		</InputDiv>
	);
};

export default NavInputComp;

const InputDiv = styled.div`
	background-color: #c3bfbc;
	width: 10rem;
	height: 2rem;
	border-radius: 1rem;
`;
