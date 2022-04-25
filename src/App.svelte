<script>
	import { Router, Route } from "svelte-navigator";
	import { onMount } from "svelte";
	import Notifications from "svelte-notifications";

	import { isAuth } from "./store";
	import { logout, getUserData } from "./apis/auth";
	import StartWebSocket from "./socket";

	import PrivateRoute from "./components/privateRoute/PrivateRoute.svelte";

	import Nabvar from "./components/layout/Nabvar.svelte";
	import Dashboard from "./pages/Dashboard.svelte";
	import Signin from "./pages/auth/Signin.svelte";
	import Signup from "./pages/auth/Signup.svelte";
	import Profile from "./pages/Profile.svelte";
	import History from "./pages/History.svelte";

	export let url = "";

	onMount(async () => {
		await StartWebSocket();
		if (localStorage.token) {
			isAuth.set(true);
			await getUserData();
		}

		window.addEventListener("storage", async () => {
			if (!localStorage.token) {
				isAuth.set(false);
				await logout();
			}
		});
	});
</script>

<main class="bg-light">
	<Notifications>
		<Nabvar />
		<div class="container pages">
			<Router {url}>
				<Route path="/signin">
					<Signin />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
				<PrivateRoute path="/">
					<Dashboard />
				</PrivateRoute>
				<PrivateRoute path="/profile">
					<Profile />
				</PrivateRoute>
				<PrivateRoute path="/history">
					<History />
				</PrivateRoute>
			</Router>
		</div>
	</Notifications>
</main>

<style>
	main {
		text-align: center;
		padding: 0;
		margin: 0 auto;
		min-height: 100vh;
		background-image: url("../vendor/image/dashboard_bg.png");
		background-position: right;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.pages {
		padding-top: 100px;
		padding-bottom: 1.5rem;
		min-height: 100vh;
	}
</style>
