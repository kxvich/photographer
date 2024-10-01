import { createContext, useContext, useEffect } from "react";
import styles from "../GalleryPage/Gallery.module.scss";
import Work from "../GalleryPage/Works";
import WorkPreview from "../GalleryPage/WorkPreview";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import useMediaQuery from "../../Hooks/useMediaQuery";
import { AppContext } from "../../App";

const galleryContext = createContext();

function Gallery() {
	const { selectedId, setselectedId } = useContext(AppContext);

	useEffect(() => {
		setselectedId(null);
	}, [setselectedId]);
	const workNames = [
		"Smj x Davido",
		"Smj x Tiwa Savage",
		"Smj x Roddy Rich",
		"Smj x Pocolee",
		"Weddings",
		"Smj x Young Jonn",
		"Smj x Don Jazzy",
		"Smj x Adekunle Gold",
		"Smj x Rema",
		"Smj x Shallipopi",
		"Smj x Falz",
		"Smj x Victony",
		"Smj x Reminisce",
		"Smj x Timini",
		"Smj x Zlatan",
	];
	const isDesktop = useMediaQuery("(min-width: 960px)");

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
			<div className={styles.nav}>
				<h2 className={styles.navText}>PAST WORK</h2>
				{isDesktop && <Contact decor={"contactIcon"} />}
			</div>
			<div className={styles.gallery}>
				<div className={styles.galleryBackground}></div>
				<div
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/images/gallerydynamicbackground/image${selectedId}.webp)`,
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						height: "100vh",
						width: "100%",
						position: "fixed",
						top: "0",
						left: "0",
						transition: "opacity 1s",
					}}
				></div>
				<Link to={`/workpage`} className={styles.galleryText}>
					{Array.from({ length: 15 }, (_, i) => (
						<Work
							index={i < 9 ? `0${i + 1}` : i + 1}
							onHandleSelect={() => handleSelect(i + 1)}
							key={i}
							workNames={workNames[i]}
						/>
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
