import styles from "./cssModules/WorkPage.module.scss";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import WorkTitle from "./WorkTitle";
import WorkPagePictures from "./WorkPagePictures";
import useMediaQuery from "../Hooks/useMediaQuery";
import SideBar from "./SideBar";
import { useContext } from "react";
import { AppContext } from "../App";

function WorkPage() {
	const {isOpen} = useContext(AppContext)
	const isDesktop = useMediaQuery("(min-width: 960px)");
	// const isMobile = useMediaQuery("(max-width: 500px)")
	return (
		<div className={styles.workPage}>
			{isDesktop ? <DesktopNav /> : <MobileNav />}
			{isDesktop ? <WorkTitle /> : ""}
			{isOpen && <SideBar/>}
			<WorkPagePictures />
		</div>
	);
}

export default WorkPage;
