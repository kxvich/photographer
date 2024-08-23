import { Link } from "react-router-dom";
import styles from "./cssModules/Header.module.scss";

import { useState } from "react";
import { useEffect } from "react";

function Header() {
	const images = [
		"/images/workbackground/image1.jpg",
		"/images/workbackground/image2.jpg",
		"/images/workbackground/image3.jpg",
		"/images/workbackground/image4.jpg",
		"/images/workbackground/image5.jpg",
		"/images/workbackground/image6.jpg",
		"/images/workbackground/image7.jpg",
		"/images/workbackground/image8.jpg",
	];
	// eslint-disable-next-line no-unused-vars
	const [bgImage1, setBgImage1] = useState(images[0]);
	// const [bgImage2, setBgImage2] = useState(images[1]);
	// const [fadeIn, setFadeIn] = useState(false);
	
	let imageIndex = 3;
	useEffect(function () {
		function changeBackground() {
			// setFadeIn(!fadeIn);
			imageIndex = (imageIndex + 1) % images.length;
			
			setBgImage1(images[imageIndex]);
			// setBgImage2(images[imageIndex + 1])
			// setFadeIn(fadeIn);
		}
		const intervalId = setInterval(changeBackground, 4000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className={styles.home}>
			<div className={styles.header}>
				<div
					style={{ backgroundImage: `url(${bgImage1})` }}
					className={styles.headerImage}
				></div>
				{/* <div
				style={{ backgroundImage: `url(${bgImage2})` }}
				className={styles.headerImage}
			></div> */}
				<div className={styles.headerTransparent}></div>
				<div className={styles.headerTextBox}>
					<h3 className={styles.headerLocation}>LAGOS, NIGERIA</h3>
					<h2 className={styles.headerName}>IBRAHIM OLUWADAMILARE</h2>
					<p className={styles.headerParagraph}>
						<span className={styles.headerParagraph1}>
							Ibrahim is a multitalented photographer that captures the essence
							of life’s most
						</span>
						<span className={styles.headerParagraph2}>
							beautiful moments, Ibrahim blends creativity and technical skill
							to create timeless
						</span>

						<span className={styles.headerParagraph3}>
							images.Specializing in portrait, landscape, and event photography,
							he offers a
						</span>
						<span className={styles.headerParagraph4}>
							unique perspective that turns ordinary scenes into extraordinary
							memories.
						</span>
						<span className={styles.headerParagraph5}>
							Explore the gallery and see the world through his lens.
						</span>
					</p>
					<Link to="/gallery" className={styles.headerButton}>
						<span className={styles.headerButtonText}>GALLERY</span>
						<span>&rarr;</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
