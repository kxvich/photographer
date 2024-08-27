import BackButton from "./BackButton";
import styles from "./cssModules/About.module.scss";
function About() {
	return (
		<div className={styles.aboutContainer}>
			<div className={styles.transparentBackground}></div>
			<BackButton />
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
						blanditiis nihil impedit, fugiat ea ratione rerum nemo placeat
						deserunt magnam esse qui. Commodi nobis obcaecati facilis! Magni,
						laboriosam quae quidem at sapiente atque suscipit saepe expedita
						eligendi, quisquam ipsa! Placeat asperiores tempora blanditiis.
					</p>
					<h3 className={styles.email}>&rarr; youremail@gmail.com</h3>

					<div className={styles.contact}>
						<i className="fa-brands fa-facebook"></i>
						<i className="fa-brands fa-instagram"></i>
						<i className="fa-brands fa-x-twitter"></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
