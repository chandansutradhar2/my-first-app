import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Login";
import { useState } from "react";
// import Login from "./Login";
function App() {
	var welcomeMsg = "Welcome";
	return (
		<div className="App">
			<Login />
		</div>
	);
}

export default App;
