import { Link } from "react-router-dom";
import styles from "../SideBar/SideBar.module.scss";
import { useContext } from "react";
import { AppContext } from "../../App";

function SideBar() {
	const { setIsOpen } = useContext(AppContext);
	return (
		<div className={styles.sideBar}>
			<div className={styles.sideBarClose}>
				<i onClick={() => setIsOpen(false)} className="fa-solid fa-xmark"></i>
			</div>
			<div className={styles.sideBarMenu}>
				<Link onClick={() => setIsOpen(false)} to="/" className={styles.sideBarMenuItem}>
					Home
				</Link>
				<Link onClick={() => setIsOpen(false)}  to="/about" className={styles.sideBarMenuItem}>
					About
				</Link>
				<Link onClick={() => setIsOpen(false)}  to="/gallery" className={styles.sideBarMenuItem}>
					Past Work
				</Link>
				<Link onClick={() => setIsOpen(false)}  to="/bookings" className={styles.sideBarMenuItem}>
					Book Me
				</Link>
			</div>
			<div className={styles.sideBarIconContainer}>
				<i className={"fa-brands fa-facebook"}></i>
				<i className={"fa-brands fa-instagram"}></i>
				<i className={"fa-brands fa-x-twitter"}></i>
				<i className={"fa-solid fa-envelope"}></i>
			</div>
		</div>
	);
}

export default SideBar;
