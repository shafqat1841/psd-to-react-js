import React from "react";

import FlexDivComp from "../components/FlexDivComp";
import MarginComp from "../components/MarginComp";
import InputComp from "../components/InputComp";
import TextComp from "../components/TextComp";
import ButtonComp from "../components/ButtonComp";

const PageSeven = () => {
	return (
		<FlexDivComp
			divWidth="100vw"
			divHeight="102vh"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
		>
			<TextComp TextMargin="25vh 0 0 0" font="font1B" size="5rem">
				Title Here
			</TextComp>
			<TextComp TextMargin="7vh 0 0 0" font="font1R" size="2rem">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
			</TextComp>
			<TextComp font="font1R" size="2rem">
				lacinia odio vitae vestibulum vestibulum.
			</TextComp>
			<MarginComp
				divWidth="50vW"
				divHeight="4rem"
				backgroundColor="#ffffff"
				marginning="15vh 0 20vh 0"
				borderRadius="2rem"
			>
				<InputComp
					font="font1R"
					size="1.3rem"
					inputWidth="35vw"
					inputHeight="4rem"
					borderRadius="2rem"
					inputPlaceholder="Your Email"
					inputPadding="0 0 0 2rem"
					placeholderColor="#54524f"
					placeholderFont="font1R"
					placeholderSize="1.3rem"
				/>
				<ButtonComp
					buttonColour="#54524f"
					buttonHeight="4rem"
					buttonWidth="13.09vw"
					borderRadius="2rem"
				>
					<TextComp font="font1B" size="1.5rem">
						SUBSCRIBE
					</TextComp>
				</ButtonComp>
			</MarginComp>
		</FlexDivComp>
	);
};

export default PageSeven;
