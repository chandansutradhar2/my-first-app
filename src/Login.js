export function Login() {
	let email = "chandan@gmail.com";
	let password = "abc";

	const doLogin = () => {
		alert(email);
	};

	function doLogout() {
		alert(email);
	}

	function navigateToSignUp() {}

	return (
		<div style={{ height: "300px", width: "auto", backgroundColor: "red" }}>
			<h2>Login Component</h2>
			<div>
				<input type="text" placeholder="enter email" value={email} />
				<input type="password" placeholder="enter password" value={password} />
				<button onClick={doLogin}>Login</button>
			</div>
		</div>
	);
}
