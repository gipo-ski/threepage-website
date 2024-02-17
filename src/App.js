import { DataProvider } from "./context/DataContext";

import RouterURL from "./router/RouterURL";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import "./App.css";

function App() {
	return (
		<main className='w-full max-w-[800px] h-full flex flex-col flex-start items-center border border-[#333] shadow-md shadow-slate-800'>
			<DataProvider>
				<Header title={"Header"} />
				<Nav />
				<RouterURL />
				<Footer />
			</DataProvider>
		</main>
	);
}

export default App;
