import React from "react";

import FlexDivComp from "../components/FlexDivComp";
import BackgroundImgComp from "../components/BackgroundImgComp";
import TextComp from "../components/TextComp";
import MarginComp from "../components/MarginComp";

import img_06 from "../common/images/img_06.jpg";

const PageSix = () => {
	return (
		<FlexDivComp
			flexDirection="column"
			divWidth="100vw"
			divHeight="100vh"
			alignItems="center"
		>
			<BackgroundImgComp img={img_06} imgWidth="100vw" imgTop="700vh" />
			<FlexDivComp
				divWidth="90vw"
				justifyContent="space-evenly"
				alignItems="center"
			>
				<FlexDivComp
					flexDirection="column"
					divWidth="25vw"
					alignItems="baseline"
					justifyContent="center"
				>
					<TextComp font="font1B" colour="#deb37e" size="2.75rem">
						lorem ipsum
					</TextComp>
					<TextComp font="font1R" colour="#333d42" size="1.2rem">
						lorem Lorem ipsum dolor sit amet, consecte
					</TextComp>
					<TextComp
						font="font1R"
						colour="#333d42"
						size="1.2rem"
						letterSpacing="0.08rem"
					>
						sectetur adipisicing elit, tation omne
					</TextComp>
					<TextComp
						font="font1R"
						colour="#333d42"
						size="1.2rem"
						letterSpacing="0.08rem"
					>
						ullamco laboris nisi ut aliqolore.
					</TextComp>
				</FlexDivComp>
				<FlexDivComp
					flexDirection="column"
					divWidth="25vw"
					alignItems="baseline"
					justifyContent="center"
				>
					<TextComp font="font1B" colour="#deb37e" size="2.75rem">
						lorem ipsum
					</TextComp>
					<TextComp font="font1R" colour="#333d42" size="1.2rem">
						lorem Lorem ipsum dolor sit amet, consecte
					</TextComp>
					<TextComp
						font="font1R"
						colour="#333d42"
						size="1.2rem"
						letterSpacing="0.08rem"
					>
						sectetur adipisicing elit, tation omne
					</TextComp>
					<TextComp
						font="font1R"
						colour="#333d42"
						size="1.2rem"
						letterSpacing="0.08rem"
					>
						ullamco laboris nisi ut aliqolore.
					</TextComp>
				</FlexDivComp>
				<FlexDivComp
					flexDirection="column"
					divWidth="25vw"
					alignItems="baseline"
					justifyContent="center"
				>
					<TextComp font="font1B" colour="#deb37e" size="2.75rem">
						lorem ipsum
					</TextComp>
					<TextComp font="font1R" colour="#333d42" size="1.2rem">
						lorem Lorem ipsum dolor sit amet, consecte
					</TextComp>
					<TextComp
						font="font1R"
						colour="#333d42"
						size="1.2rem"
						letterSpacing="0.08rem"
					>
						sectetur adipisicing elit, tation omne
					</TextComp>
					<TextComp
						font="font1R"
						colour="#333d42"
						size="1.2rem"
						letterSpacing="0.08rem"
					>
						ullamco laboris nisi ut aliqolore.
					</TextComp>
				</FlexDivComp>
			</FlexDivComp>
			<MarginComp divHeight="8rem" marginning="30vh 0 0 0">
				<TextComp font="font1B" colour="#3f3f3f" size="12rem">
					“
				</TextComp>
			</MarginComp>
			<TextComp
				font="font1SB"
				colour="#3f3f3f"
				size="1.6rem"
				TextMargin="5vh 0 0 0"
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
				ei-
			</TextComp>
			<TextComp font="font1SB" colour="#3f3f3f" size="1.6rem">
				usmod tempor incididunt ut labore et dolore magna aliqua. Ut
			</TextComp>
			<TextComp font="font1SB" colour="#3f3f3f" size="1.6rem">
				enim ad minim veniam, quis
			</TextComp>
			<TextComp
				font="font1B"
				colour="#3f3f3f"
				size="1.3rem"
				TextMargin="6vh 0 0 0"
			>
				Lorem Ipsum
			</TextComp>
		</FlexDivComp>
	);
};

export default PageSix;
