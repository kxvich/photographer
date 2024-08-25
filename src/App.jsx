import { useEffect, useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import WorkPage from "./components/WorkPage";
import About from "./components/About";
import ScrollToTop from "./Hooks/ScrollToTop";

function App() {
	const [isLoading, setIsLoading] = useState(true);

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
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={!isLoading && <Header />} />
					<Route path="/gallery" element={!isLoading && <Gallery />} />
					<Route path="/workpage" element={!isLoading && <WorkPage />}></Route>
					<Route path="/about" element={!isLoading && <About />} />
				</Routes>
			</BrowserRouter>
			{/* <About/> */}
		</>
	);
}

export default App;
