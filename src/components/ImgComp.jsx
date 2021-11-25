import React from "react";
import styled from "styled-components";

const ImgComp = ({ img, imgWidth, imgHeight, objectFit }) => {
	return (
		<Img
			src={img}
			alt="img"
			imgWidth={imgWidth}
			imgHeight={imgHeight}
			objectFit={objectFit}
		/>
	);
};

export default ImgComp;

const Img = styled.img`
	object-fit: ${({ objectFit }) => (objectFit ? objectFit : "contain")};
	width: ${({ imgWidth }) => (imgWidth ? imgWidth : "auto")};
	height: ${({ imgHeight }) => (imgHeight ? imgHeight : "auto")};
`;
