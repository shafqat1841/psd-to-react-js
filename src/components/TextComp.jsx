import React from "react";
import styled from "styled-components";

const TextComp = ({
	font,
	colour,
	size,
	TextMargin,
	TextPadding,
	letterSpacing,
	...props
}) => {
	return (
		<Text
			font={font}
			colour={colour}
			size={size}
			TextMargin={TextMargin}
			TextPadding={TextPadding}
			letterSpacing={letterSpacing}
		>
			{props.children}
		</Text>
	);
};

export default TextComp;

const Text = styled.p`
	letter-spacing: ${({ letterSpacing }) =>
		letterSpacing ? letterSpacing : "0rem"};
	display: inline;
	margin: ${({ TextMargin }) =>
		TextMargin ? TextMargin : "0px 0px 0px 0px"};
	padding: ${({ TextPadding }) =>
		TextPadding ? TextPadding : "0px 0px 0px 0px"};
	font-family: ${({ font }) => (font ? font : "font1R")};
	color: ${({ colour }) => (colour ? colour : "white")};
	font-size: ${({ size }) => (size ? size : "1rem")};
`;
