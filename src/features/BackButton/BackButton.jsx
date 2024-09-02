import { useNavigate } from "react-router-dom";
// import styles from "./cssModules/BackButton.module.scss";
// eslint-disable-next-line react/prop-types
function BackButton({ decor }) {
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate(-1)} className={decor}>
			<i className={" backIcon fa-solid fa-chevron-left"}></i>
		</div>
	);
}

export default BackButton;
