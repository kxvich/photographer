import styles from "../WorkPage/WorkPage.module.scss";
import MobileNav from "../MobileNav/MobileNav";
import DesktopNav from "../DesktopNav/DesktopNav";
import WorkTitle from "./WorkTitle";
import WorkPagePictures from "./WorkPagePictures";
import useMediaQuery from "../../Hooks/useMediaQuery";
import SideBar from "../SideBar/SideBar";
import { useContext } from "react";
import { AppContext } from "../../App";

const work1Images = [
	{ url: "images/work1/image1.webp", title: "SMJ X DAVIDO" },
	{ url: "images/work1/image2.webp", title: "SMJ X DAVIDO" },
	{ url: "images/work1/image3.webp", title: "SMJ X DAVIDO" },
	{ url: "images/work1/image4.webp", title: "SMJ X DAVIDO" },
	{ url: "images/work1/image5.webp", title: "SMJ X DAVIDO" },
];

const work2Images = [
	{ url: "images/work2/image1.webp", title: "SMJ X TIWA SAVAGE" },
	{ url: "images/work2/image2.webp", title: "SMJ X TIWA SAVAGE" },
	{ url: "images/work2/image3.webp", title: "SMJ X TIWA SAVAGE" },
	{ url: "images/work2/image4.webp", title: "SMJ X TIWA SAVAGE" },
	{ url: "images/work2/image5.webp", title: "SMJ X TIWA SAVAGE" },
];

const work3Images = [
	{ url: "images/work3/image1.webp", title: "SMJ X RODDY RICH" },
	{ url: "images/work3/image2.webp", title: "SMJ X RODDY RICH" },
	{ url: "images/work3/image3.webp", title: "SMJ X RODDY RICH" },
	{ url: "images/work3/image4.webp", title: "SMJ X RODDY RICH" },
	{ url: "images/work3/image5.webp", title: "SMJ X RODDY RICH" },
];

const work4Images = [
	{ url: "images/work4/image1.webp", title: "SMJ X POCOLEE" },
	{ url: "images/work4/image2.webp", title: "SMJ X POCOLEE" },
	{ url: "images/work4/image3.webp", title: "SMJ X POCOLEE" },
	{ url: "images/work4/image4.webp", title: "SMJ X POCOLEE" },
];

const work5Images = [
	{ url: "images/work5/image1.webp", title: "SMJ X ZLATAN " },
	{ url: "images/work5/image2.webp", title: "SMJ X ZLATAN " },
	{ url: "images/work5/image3.webp", title: "SMJ X ZLATAN " },
	{ url: "images/work5/image4.webp", title: "SMJ X ZLATAN " },
	{ url: "images/work5/image5.webp", title: "SMJ X ZLATAN " },
];

const work6Images = [
	{ url: "images/work6/image1.webp", title: "SMJ X YOUNG JONN " },
	{ url: "images/work6/image2.webp", title: "SMJ X YOUNG JONN " },
	{ url: "images/work6/image3.webp", title: "SMJ X YOUNG JONN " },
	{ url: "images/work6/image4.webp", title: "SMJ X YOUNG JONN " },
	{ url: "images/work6/image5.webp", title: "SMJ X YOUNG JONN " },
	
];

const work7Images = [
	{ url: "images/work3/image1.jpg", title: "SMJ X DON JAZZY " },
	{ url: "images/work3/image2.jpg", title: "SMJ X DON JAZZY " },
];

const work8Images = [
	{ url: "images/work3/image1.jpg", title: "SMJ X VICTONY " },
	{ url: "images/work3/image2.jpg", title: "SMJ X VICTONY " },
];

const imagesGroup = [
	work1Images,
	work2Images,
	work3Images,
	work4Images,
	work5Images,
	work6Images,
	work7Images,
	work8Images,
];

function WorkPage() {
	const { isOpen, selectedId } = useContext(AppContext);
	const isDesktop = useMediaQuery("(min-width: 960px)");
	// const isMobile = useMediaQuery("(max-width: 500px)")
	return (
		<div className={styles.workPage}>
			{isDesktop ? <DesktopNav /> : <MobileNav />}
			{isDesktop ? (
				<WorkTitle title={imagesGroup.at(selectedId - 1).at(0).title} />
			) : (
				""
			)}
			{isOpen && <SideBar />}
			<WorkPagePictures images={imagesGroup.at(selectedId - 1)} />
		</div>
	);
}

export default WorkPage;
