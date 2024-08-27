import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import WorkPage from "./components/WorkPage";
import About from "./components/About";
import ScrollToTop from "./Hooks/ScrollToTop";
const AppContext = createContext();

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

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
			<AppContext.Provider value={{ isOpen, setIsOpen }}>
				<BrowserRouter>
					<ScrollToTop />
					<Routes>
						<Route path="/" element={!isLoading && <Header />} />
						<Route path="/gallery" element={!isLoading && <Gallery />} />
						<Route
							path="/workpage"
							element={!isLoading && <WorkPage />}
						></Route>
						<Route path="/about" element={!isLoading && <About />} />
					</Routes>
				</BrowserRouter>
			</AppContext.Provider>

			{/* <About/> */}
		</>
	);
}

export { App, AppContext};
