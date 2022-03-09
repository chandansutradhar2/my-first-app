import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Login";
// import Login from "./Login";
function App() {
	var paraWelcomeMsg =
		"Welcome to this site and this message is coming from server";

	const eventHandler = () => {
		alert("image clicked event");
	};
	return (
		<div className="App">
			<Login />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{paraWelcomeMsg}</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React With Typescript
				</a>
				<button onClick={eventHandler} className="button">
					Click Me
				</button>
			</header>
		</div>
	);
}

export default App;
