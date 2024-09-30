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
				<Link
					onClick={() => setIsOpen(false)}
					to="/"
					className={styles.sideBarMenuItem}
				>
					Home
				</Link>
				<Link
					onClick={() => setIsOpen(false)}
					to="/about"
					className={styles.sideBarMenuItem}
				>
					About
				</Link>
				<Link
					onClick={() => setIsOpen(false)}
					to="/gallery"
					className={styles.sideBarMenuItem}
				>
					Past Work
				</Link>
				<Link
					onClick={() => setIsOpen(false)}
					to="/bookings"
					className={styles.sideBarMenuItem}
				>
					Book Me
				</Link>
			</div>
			<div className={styles.sideBarIconContainer}>
				<Link
					style={{
						textDecoration: "none",
						color: "#212529",
						marginRight: "2rem",
					}}
					to={"https://web.facebook.com/ibrahim.dare.16/?_rdc=1&_rdr"}
				>
					<i className="fa-brands fa-facebook"></i>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						color: "#212529",
						marginRight: "2rem",
					}}
					to={"https://www.instagram.com/im_samanja/"}
				>
					<i className="fa-brands fa-instagram"></i>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						color: "#212529",
						marginRight: "2rem",
					}}
					to={"https://x.com/Samanja419"}
				>
					<i className="fa-brands fa-x-twitter"></i>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						color: "#212529",
						// marginRight: "2rem",
					}}
					to={"https://gmail.com"}
				>
					<i className={"fa-solid fa-envelope"}></i>
				</Link>
			</div>
		</div>
	);
}

export default SideBar;
