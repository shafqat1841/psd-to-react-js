import React from "react";
import styled from "styled-components";

const ButtonComp = ({
	buttonColour,
	buttonWidth,
	buttonHeight,
	borderRadius,
	...props
}) => {
	return (
		<Button
			buttonColour={buttonColour}
			buttonWidth={buttonWidth}
			buttonHeight={buttonHeight}
			borderRadius={borderRadius}
		>
			{props.children}
		</Button>
	);
};

export default ButtonComp;

const Button = styled.button`
	background-color: ${({ buttonColour }) =>
		buttonColour ? buttonColour : "white"};
	border: 0px;
	width: ${({ buttonWidth }) => (buttonWidth ? buttonWidth : "8rem")};
	height: ${({ buttonHeight }) => (buttonHeight ? buttonHeight : "2rem")};
	border-radius: ${({ borderRadius }) =>
		borderRadius ? borderRadius : "1rem"};
`;
