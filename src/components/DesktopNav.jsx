import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import Contact from "./Contact";
import styles from "./cssModules/DesktopNav.module.scss";

function DesktopNav() {
	return (
		<div className={styles.desktopNav}>
			<BackButton decor={"desktopNavBack"} />
			<div className={styles.desktopNavNameContainer}>
				<Link to={"/"} className={styles.desktopNavName}>
					IBRAHIM OLUWADAMILARE
				</Link>
				<h3 className={styles.desktopNavJob}>Creative Director & Photographer</h3>
			</div>
			<Contact decor={"contactIconWhite"} />
		</div>
	);
}

export default DesktopNav;
