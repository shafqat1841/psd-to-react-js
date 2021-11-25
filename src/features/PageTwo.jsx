import React from "react";

import FlexDivComp from "../components/FlexDivComp";
import BackgroundImgComp from "../components/BackgroundImgComp";
import ImgComp from "../components/ImgComp";
import TextComp from "../components/TextComp";
import MarginComp from "../components/MarginComp";
import ButtonComp from "../components/ButtonComp";

import img_02 from "../common/images/img_02.png";
import img_02_1 from "../common/images/img_02_1.jpg";
import img_02_2 from "../common/images/img_02_2.jpg";
import img_02_3 from "../common/images/img_02_3.jpg";

const PageTwo = () => {
	return (
		<MarginComp marginning="3vh 0vw 0vh 0vw">
			<FlexDivComp
				flexDirection="column"
				divWidth="100vw"
				divHeight="138vh"
				alignItems="baseline"
			>
				<BackgroundImgComp
					img={img_02}
					imgWidth="100vw"
					imgTop="115vh"
				/>

				<MarginComp marginning="15vh 0vw 0vh 0vw">
					<FlexDivComp
						flexDirection="column"
						divWidth="100vw"
						divHeight="100vh"
						alignItems="center"
					>
						{/* Second Page Heading */}
						<TextComp
							font="font1EB"
							colour="#e2a355"
							size="5rem"
							letterSpacing="0.2rem"
						>
							LET'S GO
						</TextComp>
						{/* Second Page Headings Below Lines  */}
						<MarginComp marginning="3vh 0vw 0vh 0vw">
							<FlexDivComp
								flexDirection="column"
								divWidth="100vw"
								divHeight="10vh"
								alignItems="center"
							>
								<TextComp
									font="font1R"
									colour="#7f7770"
									size="2.1rem"
								>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</TextComp>
								<TextComp
									font="font1R"
									colour="#7f7770"
									size="2.1rem"
								>
									Vivamus lacinia odio vitae vestibulum
									vestibulum.
								</TextComp>
							</FlexDivComp>
						</MarginComp>

						{/* Second Page Three Images  */}
						<MarginComp marginning="7vh 0vw 0vh 0vw">
							<FlexDivComp
								flexDirection="row"
								divWidth="80vw"
								divHeight="53vh"
								alignItems="baseline"
								justifyContent="space-between"
							>
								<FlexDivComp
									flexDirection="column"
									divWidth="20vw"
									divHeight="53vh"
									alignItems="center"
								>
									<ImgComp img={img_02_1} />
									<MarginComp backgroundColor="#7f7770">
										<FlexDivComp
											flexDirection="column"
											divWidth="20.2vw"
											divHeight="20vh"
											alignItems="baseline"
											justifyContent="start"
										>
											<MarginComp marginning="4vh 0vw 0vh 1vw">
												<TextComp
													font="font1B"
													size="1.8rem"
												>
													Lorem ipsum
												</TextComp>
											</MarginComp>
											<MarginComp marginning="1.5vh 0vw 0vh 1vw">
												<TextComp>
													Lorem ipsum dolor sit amet,
												</TextComp>
											</MarginComp>
											<MarginComp marginning="0vh 0vw 0vh 1vw">
												<TextComp>
													consectetur adipisicing
												</TextComp>
											</MarginComp>
										</FlexDivComp>
									</MarginComp>
								</FlexDivComp>
								<FlexDivComp
									flexDirection="column"
									divWidth="20vw"
									divHeight="53vh"
									alignItems="center"
								>
									<ImgComp img={img_02_2} />
									<MarginComp backgroundColor="#7f7770">
										<FlexDivComp
											flexDirection="column"
											divWidth="20.2vw"
											divHeight="20vh"
											alignItems="baseline"
											justifyContent="start"
										>
											<MarginComp marginning="4vh 0vw 0vh 1vw">
												<TextComp
													font="font1B"
													size="1.8rem"
												>
													Lorem ipsum
												</TextComp>
											</MarginComp>
											<MarginComp marginning="1.5vh 0vw 0vh 1vw">
												<TextComp>
													Lorem ipsum dolor sit amet,
												</TextComp>
											</MarginComp>
											<MarginComp marginning="0vh 0vw 0vh 1vw">
												<TextComp>
													consectetur adipisicing
												</TextComp>
											</MarginComp>
										</FlexDivComp>
									</MarginComp>
								</FlexDivComp>
								<FlexDivComp
									flexDirection="column"
									divWidth="20vw"
									divHeight="53vh"
									alignItems="center"
								>
									<ImgComp img={img_02_3} />
									<MarginComp backgroundColor="#7f7770">
										<FlexDivComp
											flexDirection="column"
											divWidth="20.2vw"
											divHeight="20vh"
											alignItems="baseline"
											justifyContent="start"
										>
											<MarginComp marginning="4vh 0vw 0vh 1vw">
												<TextComp
													font="font1B"
													size="1.8rem"
												>
													Lorem ipsum
												</TextComp>
											</MarginComp>
											<MarginComp marginning="1.5vh 0vw 0vh 1vw">
												<TextComp>
													Lorem ipsum dolor sit amet,
												</TextComp>
											</MarginComp>
											<MarginComp marginning="0vh 0vw 0vh 1vw">
												<TextComp>
													consectetur adipisicing
												</TextComp>
											</MarginComp>
										</FlexDivComp>
									</MarginComp>
								</FlexDivComp>
							</FlexDivComp>
						</MarginComp>

						{/* Second Page Button  */}
						<MarginComp marginning="6vh 0vw 0vh 0vw">
							<FlexDivComp
								divWidth="100vw"
								justifyContent="center"
							>
								<ButtonComp
									buttonColour="#7f7770"
									buttonWidth="20rem"
									buttonHeight="4rem"
									borderRadius="2rem"
								>
									<TextComp font="font1EB" size="2rem">
										SHOW MORE
									</TextComp>
								</ButtonComp>
							</FlexDivComp>
						</MarginComp>
					</FlexDivComp>
				</MarginComp>
			</FlexDivComp>
		</MarginComp>
	);
};

export default PageTwo;
