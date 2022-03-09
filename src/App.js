import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Login";
import { useState } from "react";
// import Login from "./Login";
function App() {
	const [welcomeMsg, setWelcomeMsg] = useState(
		"Welcome to this site and this message is coming from server",
	);

	setInterval(() => {
		setWelcomeMsg("Last Loggedin at" + Date.now().toString());
	}, 3000);

	return (
		<div className="App">
			<Login />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{welcomeMsg}</p>
			</header>
		</div>
	);
}

export default App;
