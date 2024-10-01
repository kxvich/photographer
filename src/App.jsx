import { createContext, useEffect, useState } from "react";
import Header from "./features/Homepage/Header";
import Welcome from "./features/Loading/Welcome";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Gallery } from "./features/GalleryPage/Gallery";
import WorkPage from "./features/WorkPage/WorkPage";
import About from "./features/About/About";
import ScrollToTop from "./Hooks/ScrollToTop";
import Bookings from "./features/Bookings/Bookings";
const AppContext = createContext();

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedId, setselectedId] = useState(() => {
		const savedId = localStorage.getItem("selectedId");
		return savedId ? JSON.parse(savedId) : null;
	});

	useEffect(() => {
		if (selectedId !== null) {
			localStorage.setItem("selectedId", JSON.stringify(selectedId));
		}
	}, [selectedId]);

	useEffect(function () {
		function welcome() {
			setIsLoading(false);
		}
		const timeoutId = setTimeout(welcome, 3000);

		return function () {
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<>
			{isLoading && <Welcome />}
			<AppContext.Provider
				value={{ isOpen, setIsOpen, setselectedId, selectedId }}
			>
				<Router>
					<ScrollToTop />
					<Routes>
						<Route path="/" element={!isLoading && <Header />} />
						<Route path="/gallery" element={!isLoading && <Gallery />} />
						<Route
							path="/workpage"
							element={!isLoading && <WorkPage />}
						></Route>
						<Route path="/about" element={!isLoading && <About />} />
						<Route path="/bookings" element={!isLoading && <Bookings />} />
					</Routes>
				</Router>
			</AppContext.Provider>

			{/* <About/> */}
		</>
	);
}

export { App, AppContext };
