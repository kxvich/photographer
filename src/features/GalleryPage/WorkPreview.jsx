import { useContext } from "react";
import styles from "../GalleryPage/WorkPreview.module.scss";
import { galleryContext } from "../GalleryPage/Gallery";

function WorkPreview() {
	const { selectedId } = useContext(galleryContext);
	return (
		<div className={styles.workPreview}>
			<img
				className={styles.workPreviewImage}
				src={`/images/gallerypreviewimages/image${selectedId}.webp`}
				alt="workpreview"
			/>
		</div>
	);
}

export default WorkPreview;
