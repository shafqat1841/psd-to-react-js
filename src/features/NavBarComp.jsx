import React from "react";

//Components
import FlexDivComp from "../components/FlexDivComp";
import ImgComp from "../components/ImgComp";
import TextComp from "../components/TextComp";
import NavInputComp from "../components/NavInputComp";

//Image
import logo from "../common/images/logo.jpg";

const NavBarComp = () => {
	return (
		<FlexDivComp
			flexDivMargin="1vw 0vw 0vw 0vw"
			alignItems="center"
			justifyContent="space-between"
			divWidth="90vw"
		>
			<ImgComp img={logo} />
			<FlexDivComp
				alignItems="center"
				justifyContent="space-around"
				divWidth="40vw"
			>
				<TextComp font="font1B" colour="#7f7770">
					HOME
				</TextComp>
				<TextComp font="font1B" colour="#7f7770">
					MENU
				</TextComp>
				<TextComp font="font1B" colour="#7f7770">
					OUR STORY
				</TextComp>
				<TextComp font="font1B" colour="#7f7770">
					CONTACT US
				</TextComp>
				<NavInputComp />
			</FlexDivComp>
		</FlexDivComp>
	);
};

export default NavBarComp;
