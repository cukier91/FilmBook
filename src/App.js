import "./App.css";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Footer from "./containers/Footer";
import Recomended from "./containers/Recomended";
import Nav from "./containers/Nav";
import ShowList from "./containers/ShowList";
import About from "./containers/About";
import Contact from "./containers/Contact";

function App() {
	return (
		<Routers>
			<div className="background">
				<Nav />
				<Routes>
					<Route path="/" element={<ShowList />} />
					<Route path="recomended" element={<Recomended />}/>
					<Route path="about" element={<About />}/>
					<Route path='contact' element={<Contact/>}/>
				</Routes>
				<Footer />
			</div>
		</Routers>
	);
}

export default App;
