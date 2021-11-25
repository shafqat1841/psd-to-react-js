import React from "react";
import styled from "styled-components";
const FlexDivComp = ({
	flexDirection,
	alignItems,
	justifyContent,
	divWidth,
	divHeight,
	flexDivMargin,
	...props
}) => {
	console.log(divHeight);
	return (
		<FlexDiv
			flexDirection={flexDirection}
			alignItems={alignItems}
			justifyContent={justifyContent}
			divWidth={divWidth}
			divHeight={divHeight}
			flexDivMargin={flexDivMargin}
		>
			{props.children}
		</FlexDiv>
	);
};

export default FlexDivComp;

const FlexDiv = styled.div`
	margin: ${({ flexDivMargin }) => (flexDivMargin ? flexDivMargin : "0rem")};
	width: ${(props) => (props.divWidth ? props.divWidth : "none")};
	height: ${(props) => (props.divHeight ? props.divHeight : "auto")};
	display: flex;
	flex-direction: ${(props) =>
		props.flexDirection ? props.flexDirection : "row"};
	align-items: ${(props) =>
		props.alignItems ? props.alignItems : "baseline"};
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : "baseline"};
`;
