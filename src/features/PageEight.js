import React from "react";

import FlexDivComp from "../components/FlexDivComp";
import MarginComp from "../components/MarginComp";
// import InputComp from "../components/InputComp";
import TextComp from "../components/TextComp";
// import ButtonComp from "../components/ButtonComp";
import BackgroundImageComp from "../components/BackgroundImgComp";
import FontAwesomeComp from "../components/FontAwesomeComp";

import { fab } from "@fortawesome/free-brands-svg-icons";
import {
	faInstagram,
	faFacebookF,
	faTwitter,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import img_08 from "../common/images/img_08.jpg";

const PageEight = () => {
	return (
		<MarginComp marginning="10vh 0 0 0">
			<FlexDivComp
				alignItems="center"
				justifyContent="baseline"
				divWidth="100vw"
				divHeight="97vh"
			>
				<BackgroundImageComp
					img={img_08}
					imgWidth="100vw"
					imgTop="900vh"
				/>
				<MarginComp marginning="0 10vw 0 5vw">
					<FlexDivComp
						divHeight="40vh"
						flexDirection="column"
						alignItems="start"
						justifyContent="center"
					>
						<TextComp font="font1R" size="2.5rem">
							Title Here
						</TextComp>
						<TextComp
							TextMargin="5vh 0 0 0"
							font="font1R"
							size="1.8rem"
						>
							Lorem ipsum dolor sit amet, consecte-
						</TextComp>
						<TextComp font="font1R" size="1.8rem">
							tur adipiscing elit. Aliquam at dignis-
						</TextComp>
						<TextComp font="font1R" size="1.8rem">
							sim nunc, id maximus ex. Etiam nec
						</TextComp>
						<TextComp font="font1R" size="1.8rem">
							dignissim elit, at dignissim enim.
						</TextComp>
						<FlexDivComp justifyContent="start" alignItems="center">
							<MarginComp
								marginning="4vh 1vw 0 0"
								backgroundColor="white"
								divWidth="3rem"
								divHeight="3rem"
								borderRadius="2.5rem"
							>
								<FlexDivComp
									alignItems="center"
									justifyContent="center"
									divWidth="3rem"
									divHeight="3rem"
								>
									<FontAwesomeComp
										fontIcon={(fab, faInstagram)}
										fontSize="2x"
										colour="#7f7770"
									/>
								</FlexDivComp>
							</MarginComp>
							<MarginComp
								marginning="4vh 1vw 0 0"
								backgroundColor="white"
								divWidth="3rem"
								divHeight="3rem"
								borderRadius="2.5rem"
							>
								<FlexDivComp
									alignItems="center"
									justifyContent="center"
									divWidth="3rem"
									divHeight="3rem"
								>
									<FontAwesomeComp
										fontIcon={(fab, faFacebookF)}
										fontSize="2x"
										colour="#7f7770"
									/>
								</FlexDivComp>
							</MarginComp>
							<MarginComp
								marginning="4vh 1vw 0 0"
								backgroundColor="white"
								divWidth="3rem"
								divHeight="3rem"
								borderRadius="2.5rem"
							>
								<FlexDivComp
									alignItems="center"
									justifyContent="center"
									divWidth="3rem"
									divHeight="3rem"
								>
									<FontAwesomeComp
										fontIcon={(fab, faTwitter)}
										fontSize="2x"
										colour="#7f7770"
									/>
								</FlexDivComp>
							</MarginComp>
							<MarginComp
								marginning="4vh 1vw 0 0"
								backgroundColor="white"
								divWidth="3rem"
								divHeight="3rem"
								borderRadius="2.5rem"
							>
								<FlexDivComp
									alignItems="center"
									justifyContent="center"
									divWidth="3rem"
									divHeight="3rem"
								>
									<FontAwesomeComp
										fontIcon={(fab, faWhatsapp)}
										fontSize="2x"
										colour="#7f7770"
									/>
								</FlexDivComp>
							</MarginComp>
						</FlexDivComp>
					</FlexDivComp>
				</MarginComp>
				<MarginComp marginning="0 2vw 0 2vw">
					<FlexDivComp
						divHeight="40vh"
						flexDirection="column"
						alignItems="start"
						justifyContent="center"
					>
						<TextComp font="font1R" size="2.5rem">
							About
						</TextComp>
						<TextComp
							TextMargin="5vh 0 0 0"
							font="font1R"
							size="1.8rem"
						>
							History
						</TextComp>
						<TextComp
							font="font1R"
							size="1.8rem"
							TextMargin="2vh 0 0 0"
						>
							Our Team
						</TextComp>
						<TextComp
							font="font1R"
							size="1.8rem"
							TextMargin="2vh 0 0 0"
						>
							Brand Guidelines
						</TextComp>
						<TextComp
							font="font1R"
							size="1.8rem"
							TextMargin="2vh 0 0 0"
						>
							Terms & Condition
						</TextComp>
						<TextComp
							font="font1R"
							size="1.8rem"
							TextMargin="2vh 0 0 0"
						>
							Privacy Policy
						</TextComp>
					</FlexDivComp>
				</MarginComp>
				<MarginComp marginning="0 2vw 0 2vw">
					<FlexDivComp
						divHeight="40vh"
						flexDirection="column"
						alignItems="start"
						justifyContent="center"
					>
						<TextComp font="font1R" size="2.5rem">
							Services
						</TextComp>
						<TextComp
							TextMargin="5vh 0 0 0"
							font="font1R"
							size="1.8rem"
						>
							How to Order
						</TextComp>
						<TextComp
							font="font1R"
							size="1.8rem"
							TextMargin="2vh 0 0 0"
						>
							Our Product
						</TextComp>
						<TextComp
							font="font1R"
							size="1.8rem"
							TextMargin="2vh 0 0 0"
						>
							Order Status
						</TextComp>
						<TextComp
							font="font1R"
							size="1.8rem"
							TextMargin="2vh 0 0 0"
						>
							Promo
						</TextComp>
						<TextComp
							font="font1R"
							size="1.8rem"
							TextMargin="2vh 0 0 0"
						>
							Payment Method
						</TextComp>
					</FlexDivComp>
				</MarginComp>
				<MarginComp marginning="0 2vw 0 2vw">
					<FlexDivComp
						divHeight="40vh"
						flexDirection="column"
						alignItems="start"
						justifyContent="start"
					>
						<TextComp font="font1R" size="2.5rem">
							Other
						</TextComp>
						<TextComp
							TextMargin="5vh 0 0 0"
							font="font1R"
							size="1.8rem"
						>
							Contact Us
						</TextComp>
						<TextComp
							font="font1R"
							size="1.8rem"
							TextMargin="2vh 0 0 0"
						>
							Help
						</TextComp>
						<TextComp
							font="font1R"
							size="1.8rem"
							TextMargin="2vh 0 0 0"
						>
							Privacy
						</TextComp>
					</FlexDivComp>
				</MarginComp>
			</FlexDivComp>
		</MarginComp>
	);
};

export default PageEight;
