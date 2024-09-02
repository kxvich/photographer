import { useContext } from "react";
import styles from "../GalleryPage/Work.module.scss";
import { galleryContext } from "../GalleryPage/Gallery";
/* eslint-disable react/prop-types */
function Work({ onHandleSelect, index, workNames }) {
    const {handleUnselect} = useContext(galleryContext)
	return (
		<div onMouseLeave={handleUnselect} onMouseEnter={onHandleSelect} className={styles.work}>
			<div className={styles.workYear}> {index}</div>
			<div className={styles.workTextContainer}>
				<span className={styles.workTextPrimary}>{workNames}</span>
				<span className={styles.workTextSecondary}>little descripttion here</span>
			</div>
		</div>
	);
}

export default Work;
