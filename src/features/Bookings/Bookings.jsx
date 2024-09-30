import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Bookings.module.scss";
import BackButton from "../BackButton/BackButton";
import { useNavigate } from "react-router-dom";

function Bookings() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		number: "",
		booking: "",
		enquiries: "",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_punqz0t",
				"template_87oicqv",
				e.target,
				"5m5-nx2XSQ7Fwc-jD"
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("Booking email sent successfully!");
					navigate("/");
				},
				(error) => {
					console.log(error.text);
					alert("Failed to send booking email.");
				}
			);

		// Reset form after submission
		setFormData({
			name: "",
			email: "",
			number: "",
			booking: "",
			enquiries: "",
		});
	};

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={sendEmail}>
				<BackButton />

				<div className={styles.formItem}>
					<label className={styles.formLabel} htmlFor="name">
						Name:
					</label>
					<input
						className={styles.formInput}
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.formItem}>
					<label className={styles.formLabel} htmlFor="email">
						Email:
					</label>
					<input
						className={styles.formInput}
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.formItem}>
					<label className={styles.formLabel} htmlFor="number">
						Phone Number:
					</label>
					<input
						className={styles.formInput}
						type="text"
						name="number"
						value={formData.number}
						onChange={handleChange}
						required
						pattern="[0-9]{11}"
						title="Please enter a valid 11 digits phone number"
					/>
				</div>
				<div className={styles.formItem}>
					<label className={styles.formLabel} htmlFor="booking">
						Booking Date:
					</label>
					<input
						className={styles.formInput}
						type="text"
						name="booking"
						value={formData.booking}
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.formItem}>
					<label className={styles.formLabel} htmlFor="enquiries">
						Enquiries:
					</label>
					<textarea
						rows="4"
						cols="50"
						className={styles.formInput}
						name="enquiries"
						value={formData.enquiries}
						onChange={handleChange}
						required
					/>
				</div>

				<button className={styles.formButton} type="submit">
					BOOK ME
				</button>
			</form>
		</div>
	);
}

export default Bookings;
