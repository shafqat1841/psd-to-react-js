import React from "react";

import FlexDivComp from "../components/FlexDivComp";
import BackgroundImgComp from "../components/BackgroundImgComp";
import TextComp from "../components/TextComp";
import MarginComp from "../components/MarginComp";
import ButtonComp from "../components/ButtonComp";

import img_01 from "../common/images/img_01.jpg";

const PageOne = () => {
	return (
		<FlexDivComp
			flexDirection="column"
			divWidth="100vw"
			divHeight="100vh"
			alignItems="baseline"
		>
			<BackgroundImgComp img={img_01} imgWidth="100vw" imgTop="-5vh" />
			<MarginComp marginning="25vh 0vw 0vh 6vw">
				<FlexDivComp
					flexDirection="column"
					divWidth="45vw"
					divHeight="80vh"
					alignItems="baseline"
				>
					<TextComp font="font1EB" colour="#deb37e" size="6.5rem">
						IT'S TIME
					</TextComp>
					<TextComp font="font1EB" colour="#deb37e" size="6.5rem">
						FOR HIKING
					</TextComp>
					<TextComp
						font="font1BI"
						colour="#54524f"
						size="2rem"
						letterSpacing="0.25rem"
					>
						LOREMIPSUM DOLORS
					</TextComp>
					<MarginComp marginning="7vh 0vw 0vh 0vw">
						<ButtonComp
							colour="white"
							buttonWidth="16rem"
							buttonHeight="3.5rem"
							borderRadius="2rem"
						>
							<TextComp
								font="font1EB"
								colour="#776c64"
								size="2rem"
							>
								READ MORE
							</TextComp>
						</ButtonComp>
					</MarginComp>
					<MarginComp marginning="3vh 0vw 0vh 0vw">
						<FlexDivComp flexDirection="column">
							<TextComp
								font="font1I"
								colour="#54524f"
								size="1.6rem"
							>
								Lorem ipsum dolor sit amet, consectetur adipi-
							</TextComp>
							<TextComp
								font="font1I"
								colour="#54524f"
								size="1.6rem"
							>
								scing elit, sed do iusmod tempor incididunt ut
							</TextComp>
							<TextComp
								font="font1I"
								colour="#54524f"
								size="1.6rem"
							>
								labore et dolore magna.
							</TextComp>
						</FlexDivComp>
					</MarginComp>
				</FlexDivComp>
			</MarginComp>
		</FlexDivComp>
	);
};

export default PageOne;
