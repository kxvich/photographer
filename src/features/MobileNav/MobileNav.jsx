import { useContext } from "react";
import BackButton from "../BackButton/BackButton";
import styles from "../MobileNav/MobileNav.module.scss";
import { AppContext } from "../../App";
function MobileNav() {
	const { setIsOpen } = useContext(AppContext);
	return (
		<div className={styles.MobileNav}>
			<BackButton decor={"navButton"} />
			<h2 className={styles.MobileNavName}>SMJ</h2>
			<div>
				<i
					onClick={() => setIsOpen(true)}
					className={`${styles.MobileNavIcon} fa-solid fa-bars`}
				></i>
			</div>
		</div>
	);
}

export default MobileNav;
