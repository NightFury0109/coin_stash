<script>
	import { Router, Route } from "svelte-navigator";
	import { onMount } from "svelte";
	import Notifications from "svelte-notifications";

	import { isAuth } from "./store";
	import { logout } from "./apis/auth";

	import PrivateRoute from "./components/privateRoute/PrivateRoute.svelte";

	import Nabvar from "./components/layout/Nabvar.svelte";
	import Dashboard from "./pages/Dashboard.svelte";
	import Signin from "./pages/auth/Signin.svelte";
	import Signup from "./pages/auth/Signup.svelte";

	onMount(() => {
		if (localStorage.token) {
			isAuth.set(true);
		}

		window.addEventListener("storage", () => {
			if (!localStorage.token) logout();
		});
	});
	export let url = "";
</script>

<main class="bg-light">
	<Notifications>
		<Nabvar />
		<div class="container pages">
			<Router {url}>
				<Route path="/signin" component={Signin} />
				<Route path="/signup" component={Signup} />
				<PrivateRoute path="/">
					<Dashboard />
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
		background-image: url("./image/dashboard_bg.png");
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
