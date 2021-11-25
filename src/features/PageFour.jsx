import React from "react";

import FlexDivComp from "../components/FlexDivComp";
import BackgroundImgComp from "../components/BackgroundImgComp";
import TextComp from "../components/TextComp";

import img_04 from "../common/images/img_04.jpg";

const PageFour = () => {
	return (
		<FlexDivComp
			flexDirection="column"
			divWidth="100vw"
			divHeight="112vh"
			alignItems="center"
			justifyContent="center"
		>
			<BackgroundImgComp img={img_04} imgWidth="100vw" imgTop="452vh" />
			<TextComp
				font="font1SB"
				size="4rem"
				TextMargin="4rem 0rem 0rem 0rem"
			>
				Hiking in the mountains
			</TextComp>
			<TextComp
				font="font1R"
				size="2rem"
				TextMargin="2rem 0rem 0rem 0rem"
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
				ei-
			</TextComp>
			<TextComp font="font1R" size="2rem">
				usmod tempor incididunt ut labore et dolore magna aliqua. Ut
			</TextComp>
			<TextComp font="font1R" size="2rem">
				enim ad minim veniam quis
			</TextComp>
		</FlexDivComp>
	);
};

export default PageFour;
