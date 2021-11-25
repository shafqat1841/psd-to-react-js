import React from "react";

import FlexDivComp from "../components/FlexDivComp";
import BackgroundImgComp from "../components/BackgroundImgComp";
import TextComp from "../components/TextComp";

import img_05 from "../common/images/img_05.jpg";

const PageFive = () => {
	return (
		<FlexDivComp
			divWidth="100vw"
			divHeight="133vh"
			justifyContent="end"
			alignItems="center"
		>
			<BackgroundImgComp img={img_05} imgWidth="100vw" imgTop="563vh" />
			<FlexDivComp flexDirection="column" alignItems="end">
				<TextComp
					font="font1EBI"
					colour="#deb37e"
					size="6rem"
					TextMargin="0 5vw 0 0"
				>
					EXPLORE
				</TextComp>
				<TextComp
					font="font1EBI"
					colour="#54524f"
					size="6.5rem"
					TextMargin="-2vh 5vw 10vh 0"
				>
					THE WORLD
				</TextComp>
			</FlexDivComp>
		</FlexDivComp>
	);
};

export default PageFive;
