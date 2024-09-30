// import BackButton from "./BackButton";
import styles from "../About/About.module.scss";
import useMediaQuery from "../../Hooks/useMediaQuery";
import MobileNav from "../../features/MobileNav/MobileNav";
import { useContext } from "react";
import { AppContext } from "../../App";
import SideBar from "../SideBar/SideBar";
import BackButton from "../BackButton/BackButton";
import { Link } from "react-router-dom";
function About() {
	const isDesktop = useMediaQuery("(min-width: 960px)");
	const { isOpen } = useContext(AppContext);

	return (
		<>
			{!isDesktop ? <MobileNav /> : ""}
			{isOpen && <SideBar />}
			<div className={styles.aboutContainer}>
				<div className={styles.transparentBackground}></div>
				<div className={styles.contentContainer}>
					{isDesktop ? <BackButton /> : ""}
					<div className={styles.imageContainer}>
						<img
							className={styles.image}
							src="images/aboutImages/image1.jpg"
							alt="aboutImage"
						/>
					</div>
					<div className={styles.textContainer}>
						<h1 className={styles.greeting}>HI THERE</h1>
						<p className={styles.paragraph}>
							Ibrahim is a multitalented photographer that captures the essence
							of life’s most beautiful moments, Ibrahim blends creativity and
							technical skill to create timeless images. Explore the gallery and
							see the world through his lens.
						</p>
						{/* <h3 className={styles.email}>&rarr; youremail@gmail.com</h3> */}

						{isDesktop && (
							<div className={styles.contact}>
								<Link
									style={{
										textDecoration: "none",
										color: "#fff",
										marginRight: "2rem",
									}}
									to={"https://web.facebook.com/ibrahim.dare.16/?_rdc=1&_rdr"}
								>
									<i className="fa-brands fa-facebook"></i>
								</Link>
								<Link
									style={{
										textDecoration: "none",
										color: "#fff",
										marginRight: "2rem",
									}}
									to={"https://www.instagram.com/im_samanja/"}
								>
									<i className="fa-brands fa-instagram"></i>
								</Link>
								<Link
									style={{
										textDecoration: "none",
										color: "#fff",
										marginRight: "2rem",
									}}
									to={"https://x.com/Samanja419"}
								>
									<i className="fa-brands fa-x-twitter"></i>
								</Link>
								<Link
									style={{
										textDecoration: "none",
										color: "#fff",
									}}
									to={"						gmail.com"}
								>
									<i className={"fa-solid fa-envelope"}></i>
								</Link>
							</div>
						)}
					</div>
					{/* {!isDesktop && (
						<div className={styles.contact}>
							<Link
								style={{
									textDecoration: "none",
									color: "#fff",
									
								}}
								to={"https://web.facebook.com/ibrahim.dare.16/?_rdc=1&_rdr"}
							>
								<i className="fa-brands fa-facebook"></i>
							</Link>
							<Link
								style={{
									textDecoration: "none",
									color: "#fff",
									
								}}
								to={"https://www.instagram.com/im_samanja/"}
							>
								<i className="fa-brands fa-instagram"></i>
							</Link>
							<Link
								style={{
									textDecoration: "none",
									color: "#fff",
								}}
								to={"https://x.com/Samanja419"}
							>
								<i className="fa-brands fa-x-twitter"></i>
							</Link>
							<Link
								style={{
									textDecoration: "none",
									color: "#fff",
								}}
								to={"							Ibrahimoluwadamilare586@gmail.com"}
							>
								<i className={"fa-solid fa-envelope"}></i>
							</Link>
						</div>
					)} */}
				</div>
			</div>
		</>
	);
}

export default About;
