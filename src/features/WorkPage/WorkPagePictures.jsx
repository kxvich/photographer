import styles from "../WorkPage/WorkPagePictures.module.scss";
import PropTypes from "prop-types";

function WorkPagePictures({ images }) {
	return (
		<>
			{images.map((image, i) => (
				<div
				
					className={styles.workPagePicturesContainer}
					key={i}
				>
					<img
						className={styles.workPagePicturesImage}
						src={image.url}
						alt={image.title}
					></img>
					<h3 className={styles.workPagePicturesBottomTitle}>{image.title}</h3>|
				</div>
			))}
		</>
	);
}

WorkPagePictures.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string,
		})
	).isRequired,
};

export default WorkPagePictures;
