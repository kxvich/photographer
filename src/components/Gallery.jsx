import { createContext, useState } from "react";
import styles from "./cssModules/Gallery.module.scss";
import Work from "./Works";
import WorkPreview from "./WorkPreview";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const galleryContext = createContext();

function Gallery() {
	const [selectedId, setselectedId] = useState(null);

	function handleSelect(id) {
		setselectedId((selectedId) => (selectedId === id ? null : id));
	}
	function handleUnselect() {
		setselectedId(null);
	}
	return (
		<galleryContext.Provider
			value={{ selectedId, handleSelect, handleUnselect }}
		>
			<div className={styles.gallery}>
				
				<div className={styles.galleryBackground}></div>
				<h2 className={styles.galleryHeading}>PAST WORK</h2>
				<Contact decor={"contactIcon"} />
				<div
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/images/workbackground/image${selectedId}.jpg)`,
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						height: "100vh",
						width: "100%",
						position: "fixed",
						top: "0",
						left: "0",
						transition: "opacity 1s"
					}}
				></div>
				<Link to="/workpage" className={styles.galleryText}>
					{Array.from({ length: 8 }, (_, i) => (
						<Work onHandleSelect={() => handleSelect(i + 1)} key={i} />
					))}
				</Link>
				<div className={styles.galleryImagePreview}>
					{selectedId !== null && <WorkPreview />}
				</div>
			</div>
		</galleryContext.Provider>
	);
}

export { Gallery, galleryContext };
