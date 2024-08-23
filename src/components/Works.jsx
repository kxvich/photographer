import { useContext } from "react";
import styles from "./cssModules/Work.module.scss";
import { galleryContext } from "./Gallery";
/* eslint-disable react/prop-types */
function Work({ onHandleSelect }) {
    const {handleUnselect} = useContext(galleryContext)
	return (
		<div onMouseLeave={handleUnselect} onMouseEnter={onHandleSelect} className={styles.work}>
			<div className={styles.workYear}> 2024</div>
			<div>
				<span className={styles.workTextPrimary}>Decathlon WLKR 76</span>
				<span className={styles.workTextSecondary}>Sportswear - Editorial</span>
			</div>
		</div>
	);
}

export default Work;
