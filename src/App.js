import { DataProvider } from "./context/DataContext";

import RouterURL from "./router/RouterURL";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
	return (
		<main className='App'>
			<DataProvider>
				<Header title={"Header"} />
				<RouterURL />
				<Footer />
			</DataProvider>
		</main>
	);
}

export default App;
