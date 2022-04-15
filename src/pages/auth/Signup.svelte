<script>
  import { navigate } from "svelte-navigator";

  let userData = {
    email: "",
    password: "",
  };

  const navigateSingin = () => {
    navigate("/signin", { replace: true });
  };

  const signin = () => {};
</script>

<div class="d-flex justify-content-center align-items-center">
  <div class="fit-content-width text-start">
    <p class="fs-2 cl-primary fw-bold">Create Your Coin Stash Account</p>

    <form on:submit|preventDefault={signin} novalidate>
      <div class="form-group">
        <label for="email" class="cl-primary">Email</label>
        <input
          type="email"
          class="form-control mt-2 primary-input"
          name="email"
          id="email"
          bind:value={userData.email}
        />
      </div>
      <div class="form-group mt-3">
        <label for="password" class="cl-primary">Password</label>
        <input
          type="password"
          class="form-control mt-2 primary-input"
          name="password"
          id="password"
          bind:value={userData.password}
        />
      </div>
      <button type="button" class="btn-main mt-4 full-width"
        >Create Account</button
      >
    </form>
    <hr class="mt-4" />
    <div>
      <span>Already have an account?</span>
      <span class="cl-primary auth-link" on:click={navigateSingin}>
        Sign In
      </span>
    </div>
  </div>
</div>

<style lang="scss">
  .auth-link {
    text-decoration: none !important;
    color: #964f90 !important;
  }

  .auth-link:hover {
    color: #964f90 !important;
    text-decoration: underline !important;
    cursor: pointer;
  }
</style>
