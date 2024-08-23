import { useContext } from "react";
import styles from "./cssModules/WorkPreview.module.scss";
import { galleryContext } from "./Gallery";

function WorkPreview() {
	const { selectedId } = useContext(galleryContext);
	return (
		<div className={styles.workPreview}>
			<img
				className={styles.workPreviewImage}
				src={`/images/image${selectedId}.jpg`}
				alt="workpreview"
			/>
		</div>
	);
}

export default WorkPreview;
