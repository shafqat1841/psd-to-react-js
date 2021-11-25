import React from "react";
import styled from "styled-components";

const BackgroundImgComp = ({
	img,
	imgWidth,
	imgHeight,
	imgTop,
	imgBottom,
	imgLeft,
	imgRight,
}) => {
	return (
		<Img
			src={img}
			alt="img"
			imgWidth={imgWidth}
			imgHeight={imgHeight}
			imgTop={imgTop}
			imgBottom={imgBottom}
			imgLeft={imgLeft}
			imgRight={imgRight}
		/>
	);
};

export default BackgroundImgComp;

const Img = styled.img`
	top: ${({ imgTop }) => (imgTop ? imgTop : "0rem")};
	bottom: ${({ imgBottom }) => (imgBottom ? imgBottom : "0rem")};
	left: ${({ imgLeft }) => (imgLeft ? imgLeft : "0rem")};
	right: ${({ imgRight }) => (imgRight ? imgRight : "0rem")};
	position: absolute;
	z-index: -1;
	object-fit: contain;
	width: ${({ imgWidth }) => (imgWidth ? imgWidth : "auto")};
	height: ${({ imgHeight }) => (imgHeight ? imgHeight : "auto")};
`;
