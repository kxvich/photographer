// import BackButton from "./BackButton";
import styles from "./cssModules/About.module.scss";
import useMediaQuery from "../Hooks/useMediaQuery";
import MobileNav from "./MobileNav";
import { useContext } from "react";
import { AppContext } from "../App";
import SideBar from "./SideBar";
import DesktopNav from "./DesktopNav";
function About() {
	const isDesktop = useMediaQuery("(min-width: 960px)");
	const { isOpen } = useContext(AppContext);

	return (
		<>
			{isDesktop && <DesktopNav/>}
			{!isDesktop ? <MobileNav /> : ""}
			{isOpen && <SideBar />}
			<div className={styles.aboutContainer}>
				<div className={styles.transparentBackground}></div>
				<div className={styles.contentContainer}>
					<div className={styles.imageContainer}>
						<img
							className={styles.image}
							src="images/aboutImages/image2.jpg"
							alt="aboutImage"
						/>
					</div>
					<div className={styles.textContainer}>
						<h1 className={styles.greeting}>HI THERE</h1>
						<p className={styles.paragraph}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
							voluptatum nulla, quis rem consectetur voluptatem deleniti
						</p>
						<h3 className={styles.email}>&rarr; youremail@gmail.com</h3>

						{isDesktop && (
							<div className={styles.contact}>
								<i className="fa-brands fa-facebook"></i>
								<i className="fa-brands fa-instagram"></i>
								<i className="fa-brands fa-x-twitter"></i>
								<i className={"fa-solid fa-envelope"}></i>
							</div>
						)}
					</div>
					{!isDesktop && (
						<div className={styles.contact}>
							<i className="fa-brands fa-facebook"></i>
							<i className="fa-brands fa-instagram"></i>
							<i className="fa-brands fa-x-twitter"></i>
							<i className={"fa-solid fa-envelope"}></i>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default About;
