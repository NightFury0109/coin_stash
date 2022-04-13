<script>
  import { Router, Link } from "svelte-navigator";
</script>

<Router>
  <nav
    class="navbar navbar-expand-sm bg-dark navbar-dark py-2 px-4 justify-content-between"
  >
    <Link class="navbar-brand " to="/">
      <img src="vendor/image/logo/nav_logo.png" alt="nav-logo" />
    </Link>

    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/dashboard">Dashboard</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">Login</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/register">Sign Up</Link>
      </li>
    </ul>
  </nav>
</Router>

<style>
  .logout-btn {
    cursor: pointer;
  }

  .navbar {
    overflow: hidden;
    position: fixed;
    width: 100vw;
    top: 0;
    z-index: 1;
  }
</style>
