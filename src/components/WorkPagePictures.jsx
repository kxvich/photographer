import styles from "./cssModules/WorkPagePictures.module.scss";

function WorkPagePictures() {
	return (
		<>
			{Array.from({ length: 2 }, (val, i) => (
				<div className={styles.workPagePicturesContainer} key={i}>
					<img
						className={styles.workPagePicturesImage}
						src={`images/work1/image${i + 1}.jpg`}
					></img>
                    <h3 className={styles.workPagePicturesBottomTitle}>SMJ X DAVIDO</h3>|
				</div>
			))}
		</>
	);
}

export default WorkPagePictures;
