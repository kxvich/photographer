import { useEffect, useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import WorkPage from "./components/WorkPage";
import About from "./components/About";

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
				<Routes>
					<Route path="/" element={!isLoading && <Header />} />
					<Route path="/gallery" element={!isLoading && <Gallery />} />
					<Route path="/workpage" element={!isLoading && <WorkPage />} />
					<Route path="about" element={<About/>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
