import { useNavigate } from "react-router-dom";
import styles from "./cssModules/BackButton.module.scss";
function BackButton() {
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate(-1)} className={styles.button}>
			<i className="fa-solid fa-chevron-left"></i>
		</div>
	);
}

export default BackButton;
