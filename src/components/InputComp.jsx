import React from "react";
import styled from "styled-components";

const InputComp = ({
	colour,
	font,
	backgroundColour,
	inputWidth,
	inputHeight,
	borderRadius,
	inputPlaceholder,
	inputPadding,
	inputMarginning,
	placeholderSize,
	placeholderColor,
	placeholderFont,
	size,
}) => {
	return (
		<Input
			colour={colour}
			font={font}
			size={size}
			backgroundColour={backgroundColour}
			inputWidth={inputWidth}
			inputHeight={inputHeight}
			borderRadius={borderRadius}
			inputPadding={inputPadding}
			type="text"
			placeholder={inputPlaceholder}
			inputMarginning={inputMarginning}
			placeholderColor={placeholderColor}
			placeholderFont={placeholderFont}
			placeholderSize={placeholderSize}
		/>
	);
};

export default InputComp;

const Input = styled.input`
	font-size: ${({ size }) => (size ? size : "1rem")};
	padding: ${({ inputPadding }) => (inputPadding ? inputPadding : "0px")};
	margin: ${({ inputMarginning }) =>
		inputMarginning ? inputMarginning : "0px"};
	color: ${({ colour }) => (colour ? colour : "black")};
	font-family: ${({ font }) => (font ? font : "font1R")};
	background-color: ${({ backgroundColour }) =>
		backgroundColour ? backgroundColour : "white"};
	width: ${({ inputWidth }) => (inputWidth ? inputWidth : "1rem")};
	height: ${({ inputHeight }) => (inputHeight ? inputHeight : "1rem")};
	border: 0px;
	border-radius: ${({ borderRadius }) =>
		borderRadius ? borderRadius : "1rem"};
	&:focus {
		outline: none;
	}
	&::placeholder {
		color: ${({ placeholderColor }) =>
			placeholderColor ? placeholderColor : "black"};
		font-family: ${({ placeholderFont }) =>
			placeholderFont ? placeholderFont : "font1R"};
		font-size: ${({ placeholderSize }) =>
			placeholderSize ? placeholderSize : "1rem"};
	}
`;
