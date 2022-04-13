<script>
	import { Router, Route } from "svelte-navigator";
	import { onMount } from "svelte";
	import Notifications from "svelte-notifications";

	import PrivateRoute from "./components/privateRoute/PrivateRoute.svelte";

	import Nabvar from "./components/layout/Nabvar.svelte";

	// onMount(() => {
	// 	if (localStorage.token) {
	// 		loadUser();
	// 	}

	// 	window.addEventListener("storage", () => {
	// 		if (!localStorage.token) logout();
	// 	});
	// });
	// export let url = "";
</script>

<main class="bg-light">
	<Notifications>
		<Nabvar />
		<div class="container">
			<h1>Hello</h1>
			<!-- <Router {url}>
				<Route path="/" component={Landing} />
				<PrivateRoute path="/dashboard">
					<Dashboard />
				</PrivateRoute>
			</Router> -->
		</div>
	</Notifications>
</main>

<style>
	main {
		text-align: center;
		padding: 0;
		margin: 0 auto;
		min-height: 100vh;
	}
</style>
