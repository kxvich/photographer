import styles from "../Contact/Contact.module.scss";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Contact({ decor }) {
	return (
		<div className={styles.Contact}>
			<Link
				to={"https://web.facebook.com/ibrahim.dare.16/?_rdc=1&_rdr"}
				style={{ color: "#fff" }}
			>
				<i className={` ${decor} fa-brands fa-facebook`}></i>
			</Link>
			<Link
				to={"https://www.instagram.com/im_samanja/"}
				style={{ color: "#fff" }}
			>
				<i className={` ${decor} fa-brands fa-instagram`}></i>
			</Link>
			<Link to={"https://x.com/Samanja419"} style={{ color: "#fff" }}>
				<i className={` ${decor} fa-brands fa-x-twitter`}></i>
			</Link>
			<Link to="/about">
				<button className={styles.ContactAbout}>About</button>
			</Link>
		</div>
	);
}

export default Contact;
