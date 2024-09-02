import styles from "../Contact/Contact.module.scss";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Contact({ decor }) {
	return (
		<div className={styles.Contact}>
			<i className={` ${decor} fa-brands fa-facebook`}></i>
			<i className={` ${decor} fa-brands fa-instagram`}></i>
			<i className={` ${decor} fa-brands fa-x-twitter`}></i>
			<Link to="/about">
				<button className={styles.ContactAbout}>About</button>
			</Link>
		</div>
	);
}

export default Contact;
