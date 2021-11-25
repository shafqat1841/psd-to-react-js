import React from "react";
import styled from "styled-components";

const MarginComp = ({
	marginning,
	backgroundColor,
	divWidth,
	divHeight,
	borderRadius,
	...props
}) => {
	return (
		<MarginDiv
			marginning={marginning}
			backgroundColor={backgroundColor}
			divWidth={divWidth}
			divHeight={divHeight}
			borderRadius={borderRadius}
		>
			{props.children}
		</MarginDiv>
	);
};

export default MarginComp;

const MarginDiv = styled.div`
	height: ${({ divHeight }) => (divHeight ? divHeight : "auto")};
	width: ${({ divWidth }) => (divWidth ? divWidth : "auto")};
	margin: ${({ marginning }) => (marginning ? marginning : "0rem")};
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? backgroundColor : "none"};
	border-radius: ${({ borderRadius }) =>
		borderRadius ? borderRadius : "0rem"};
`;
