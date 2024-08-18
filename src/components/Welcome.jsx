import styles from "./cssModules/Loader.module.scss";

function Welcome() {
	return (
		<div className={styles.loader}>
			<h1 className={styles.loaderText}>
				<span className={styles.loaderText1}>s</span>
				<span className={styles.loaderText2}>m</span>
				<span className={styles.loaderText3}>j</span>
			</h1>
		</div>
	);
}

export default Welcome;
