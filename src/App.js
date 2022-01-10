import Nav from "./containers/Nav";
import ShowList from "./containers/ShowList";
import "./App.css";
import Footer from "./containers/Footer";


function App() {
	return (
		<div className="background">
			<Nav />
			<ShowList />
			<Footer/>
		</div>
	);
}

export default App;
