import { useEffect, useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

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
	console.log(isLoading);
	return (
		<>
			{isLoading && <Welcome />}
			{!isLoading && <Header />}
		</>
	);
}

export default App;
