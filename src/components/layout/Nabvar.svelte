<script>
  import { Router, Link } from "svelte-navigator";
  import { Icon } from "svelte-fontawesome";
  import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

  import { isAuth, errors } from "../../store";
  import { logout } from "../../apis/auth";

  let innerHeight;
  let innerWidth;

  const eraseErrMessage = () => {
    errors.set({});
  };

  const signout = async () => {
    await logout();
  };
</script>

<svelte:window bind:innerHeight bind:innerWidth />
<Router primary={false}>
  <nav
    class="navbar navbar-expand-md py-2 px-4 justify-content-between main-header"
  >
    <Link class="navbar-brand " to="/">
      <img src="vendor/image/nav_logo.png" alt="nav-logo" class="nav-logo" />
    </Link>

    <div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <Icon icon={faBars} class="cl-primary" />
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item header-item">
            <Link class="nav-link" to="/">
              <span>Dashboard</span>
            </Link>
          </li>
          <li class="nav-item header-item">
            <Link class="nav-link" to="/history">
              <span>History</span>
            </Link>
          </li>
          <li class="nav-item header-item">
            <Link class="nav-link" to="/profile">
              <span>Profile</span>
            </Link>
          </li>
          {#if $isAuth}
            <li class="nav-item header-item" on:click={signout}>
              <Link class="nav-link" to="/signin">
                <Icon icon={faUser} class="cl-primary" />
                <span>Sign Out</span>
              </Link>
            </li>
          {:else}
            <li class="nav-item header-item" on:click={eraseErrMessage}>
              <Link class="nav-link" to="/signin">
                <Icon icon={faUser} class="cl-primary" />
                <span>Sign in</span>
              </Link>
            </li>
          {/if}
        </ul>
      </div>
    </div>
  </nav>
</Router>

<style lang="scss">
  $primary-color: #a758a0;

  .main-header {
    overflow: hidden;
    position: fixed;
    width: 100vw;
    top: 0;
    z-index: 10;
    // background-image: linear-gradient(
    //   160deg,
    //   rgba(237, 215, 120, 0.7),
    //   rgba(224, 189, 31, 0.7)
    // );
    background-color: rgba(19, 181, 236, 0.6);
    box-shadow: 0 4px 8px 0 rgba(11, 109, 142, 0.2),
      0 6px 18px 0 rgba(11, 109, 142, 0.19);
  }

  .nav-logo {
    height: 3rem;
    @media screen and (max-width: 576px) {
      height: 2.2rem;
    }
  }

  .nav-item .nav-link span {
    color: $primary-color;
  }

  .nav-item:hover .nav-link span {
    color: $primary-color;
  }

  .header-item {
    margin: 0 0.3rem;
    height: 2.5rem;
    border-bottom: 0 solid $primary-color;
    transition: border-bottom 0.2s ease-in-out;
    -webkit-transition: border-bottom 0.2s ease-in-out;
  }

  .header-item:hover {
    border-bottom: 1px solid $primary-color;
  }
</style>
