import { Link } from "react-router-dom";
import styles from "./cssModules/WorkPage.module.scss";
import Contact from "./Contact";

function WorkPage() {
	const images = ["/images/work1/image1", "/images/work1/image2"];

	return (
		<div className={styles.workPage}>
			<Contact decor={"contactIconWhite"} />
			<Link to={"/"} className={styles.workPageName}>
				IBRAHIM OLUWADAMILARE
			</Link>
			<h3 className={styles.workPageJob}>Creative Director & Photographer</h3>
			<h1 className={styles.workPageTitle}>
				<span className={styles.workPageIcon}>
					<i className="fa-regular fa-circle"></i>
				</span>
				SMJ X DAVIDO
			</h1>
			{images.map((val, i) => (
				<div className={styles.workPageImageContainer} key={i}>
					<img
						className={styles.workPageImage}
						src={`/images/work1/image${i + 1}.jpg`}
						alt="work image"
					/>
					<h3 className={styles.workPageBottomTitle}>SMJ X DAVIDO</h3>
					|
				</div>
			))}
			
		</div>
	);
}

export default WorkPage;
