<script>
  import { Router, Link } from "svelte-navigator";
  import { Icon } from "svelte-fontawesome";
  import {
    faBars,
    faUser,
    faSignInAlt,
    faUserTie,
    faSignOutAlt,
  } from "@fortawesome/free-solid-svg-icons";

  import { isAuth, errors } from "../../store";
  import { logout } from "../../apis/auth";

  let innerWidth;

  const eraseErrMessage = () => {
    errors.set({});
  };

  const signout = async () => {
    isAuth.set(false);
    errors.set({});
    await logout();
  };
</script>

<svelte:window bind:innerWidth />
<Router primary={false}>
  <nav
    class="navbar navbar-expand-sm py-2 px-4 justify-content-between main-header"
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
          <li
            class="nav-item header-item"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse.show"
            on:click={eraseErrMessage}
          >
            <Link class="nav-link" to="/">
              <span>Dashboard</span>
            </Link>
          </li>
          <li
            class="nav-item header-item"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse.show"
            on:click={eraseErrMessage}
          >
            <Link class="nav-link" to="/history">
              <span>History</span>
            </Link>
          </li>

          {#if $isAuth}
            {#if innerWidth > 576}
              <div class="btn-group">
                <li
                  class="nav-item header-item dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div class="nav-link">
                    <Icon icon={faUser} class="cl-primary" />
                  </div>
                </li>

                <ul class="dropdown-menu dropdown-menu-end">
                  <li on:click={eraseErrMessage}>
                    <Link class="dropdown-item cl-primary" to="/profile">
                      <Icon icon={faUserTie} class="cl-primary" />
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li on:click={signout}>
                    <Link class="dropdown-item cl-primary" to="/signin">
                      <Icon icon={faSignOutAlt} class="cl-primary" />
                      <span>Sign Out</span>
                    </Link>
                  </li>
                </ul>
              </div>
            {:else}
              <li
                class="nav-item header-item"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
                on:click={eraseErrMessage}
              >
                <Link class="nav-link" to="/profile">
                  <Icon icon={faUserTie} class="cl-primary" />
                  <span>Profile</span>
                </Link>
              </li>
              <li
                class="nav-item header-item"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
                on:click={signout}
              >
                <Link class="nav-link" to="/signin">
                  <Icon icon={faSignOutAlt} class="cl-primary" />
                  <span>Sign Out</span>
                </Link>
              </li>
            {/if}
          {:else}
            <li
              class="nav-item header-item"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              on:click={eraseErrMessage}
            >
              <Link class="nav-link" to="/signin">
                <Icon icon={faSignInAlt} class="cl-primary" />
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
    // overflow: hidden;
    position: fixed;
    width: 100vw;
    top: 0;
    z-index: 10;
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
    cursor: pointer;
    margin: 0 0.3rem;
    height: 2.5rem;
    border-bottom: 0 solid $primary-color;
    transition: border-bottom 0.2s ease-in-out;
    -webkit-transition: border-bottom 0.2s ease-in-out;
  }

  .header-item:hover {
    border-bottom: 1px solid $primary-color;
  }

  .dropdown-toggle::after {
    content: none;
  }

  .dropdown-menu {
    min-width: 9rem;
  }

  .navbar-toggler {
    color: transparent;
  }
</style>
