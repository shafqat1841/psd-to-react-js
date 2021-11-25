import React from "react";

import FlexDivComp from "../components/FlexDivComp";
import NavBarComp from "../features/NavBarComp";
import PageOne from "../features/PageOne";
import PageTwo from "../features/PageTwo";
import PageThree from "../features/PageThree";
import PageFour from "../features/PageFour";
import PageFive from "../features/PageFive";
import PageSix from "../features/PageSix";
import PageSeven from "../features/PageSeven";
import PageEight from "../features/PageEight";

const MainRoute = () => {
	return (
		<div>
			<FlexDivComp
				flexDirection="column"
				alignItems="center"
				divWidth="100vw"
			>
				{/* Navbar Start  */}
				<NavBarComp />
				{/* Navbar End  */}
				<PageOne />
				<PageTwo />
				<PageThree />
				<PageFour />
				<PageFive />
				<PageSix />
				<PageSeven />
				<PageEight />
			</FlexDivComp>
		</div>
	);
};

export default MainRoute;
