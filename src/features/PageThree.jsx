import React from "react";

import BackgroundImgComp from "../components/BackgroundImgComp";
import MarginComp from "../components/MarginComp";
import FlexDivComp from "../components/FlexDivComp";
import TextComp from "../components/TextComp";
import ButtonComp from "../components/ButtonComp";

import img_03_1 from "../common/images/img_03_1.jpg";
import img_03_2 from "../common/images/img_03_2.jpg";

const PageThree = () => {
	return (
		<MarginComp marginning="0vh 0vw 0vh 0vw">
			<FlexDivComp
				flexDirection="column"
				divWidth="100vw"
				alignItems="center"
			>
				<FlexDivComp
					flexDirection="row"
					divWidth="100vw"
					divHeight="99.5vh"
					justifyContent="end"
					alignItems="center"
				>
					<FlexDivComp
						flexDirection="column"
						divWidth="47.5vw"
						divHeight="99.5vh"
						alignItems="start"
						justifyContent="center"
					>
						<BackgroundImgComp
							img={img_03_1}
							imgWidth="100vw"
							imgTop="253vh"
						/>
						<TextComp font="font1B" size="4rem">
							Discount up to
						</TextComp>
						<TextComp font="font1B" size="4rem">
							50% All Excursions
						</TextComp>
						<MarginComp marginning="2.5vh 0vw 5vh 0vw">
							<FlexDivComp
								flexDirection="column"
								divWidth="47.5vw"
								alignItems="start"
								justifyContent="center"
							>
								<TextComp font="font1R" size="2rem">
									Lorem ipsum dolor sit amet,
								</TextComp>
								<TextComp font="font1R" size="2rem">
									consectetuer adipiscing elit, sed diam
								</TextComp>
								<TextComp font="font1R" size="2rem">
									nonummy nibh euismod tincidunt ut{" "}
								</TextComp>
								<TextComp font="font1R" size="2rem">
									laoreet dolore magna aliquam erat{" "}
								</TextComp>
							</FlexDivComp>
						</MarginComp>
						<ButtonComp
							buttonColour="#e2a355"
							buttonWidth="23rem"
							buttonHeight="4rem"
							borderRadius="2rem"
						>
							<TextComp font="font1B" size="2rem">
								Read More
							</TextComp>
						</ButtonComp>
					</FlexDivComp>
				</FlexDivComp>
				<FlexDivComp
					flexDirection="row"
					divWidth="100vw"
					divHeight="99.5vh"
					justifyContent="start"
					alignItems="center"
				>
					<FlexDivComp
						flexDirection="column"
						divWidth="47.5vw"
						divHeight="99.5vh"
						alignItems="end"
						justifyContent="center"
					>
						<BackgroundImgComp
							img={img_03_2}
							imgWidth="100vw"
							imgTop="352.7vh"
						/>
						<FlexDivComp
							flexDirection="column"
							divWidth="35vw"
							divHeight="99.5vh"
							alignItems="start"
							justifyContent="center"
						>
							<TextComp font="font1B" size="4rem">
								January’s Promo:
							</TextComp>
							<TextComp font="font1B" size="4rem">
								Buy 1 Get 1 Free!
							</TextComp>
							<MarginComp marginning="2.5vh 0vw 5vh 0vw">
								<FlexDivComp
									flexDirection="column"
									divWidth="47.5vw"
									alignItems="start"
									justifyContent="center"
								>
									<TextComp font="font1R" size="2rem">
										Lorem ipsum dolor sit amet,
									</TextComp>
									<TextComp font="font1R" size="2rem">
										consectetuer adipiscing elit, sed diam
									</TextComp>
									<TextComp font="font1R" size="2rem">
										nonummy nibh euismod tincidunt ut{" "}
									</TextComp>
									<TextComp font="font1R" size="2rem">
										laoreet dolore magna aliquam erat{" "}
									</TextComp>
								</FlexDivComp>
							</MarginComp>
							<ButtonComp
								buttonColour="#e2a355"
								buttonWidth="23rem"
								buttonHeight="4rem"
								borderRadius="2rem"
							>
								<TextComp font="font1B" size="2rem">
									Read More
								</TextComp>
							</ButtonComp>
						</FlexDivComp>
					</FlexDivComp>
				</FlexDivComp>
			</FlexDivComp>
		</MarginComp>
	);
};

export default PageThree;
