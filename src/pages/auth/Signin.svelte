<script>
  import { navigate } from "svelte-navigator";

  import { login } from "../../apis/auth";
  import { errors } from "../../store";

  let userData = {
    email: "",
    password: "",
  };
  let errMessages;

  errors.subscribe((value) => {
    errMessages = value;
  });

  const navigateSingup = () => {
    navigate("/signup", { replace: true });
  };

  const signin = async () => {
    await login(userData);
  };
</script>

<div class="d-flex justify-content-center align-items-center">
  <div class="fit-content-width text-start">
    <p class="fs-2 cl-primary fw-bold">Coin Stash Account Login</p>

    <form on:submit|preventDefault={signin} novalidate>
      <div class="form-group">
        <label for="email" class="cl-primary">Email</label>
        <input
          type="email"
          class={`form-control mt-2 primary-input ${
            errMessages.email ? "is-invalid" : null
          }`}
          name="email"
          id="email"
          bind:value={userData.email}
        />
      </div>
      {#if errMessages.email}
        <div class="text-danger">{errMessages.email}</div>
      {/if}

      <div class="form-group mt-3">
        <label for="password" class="cl-primary">Password</label>
        <input
          type="password"
          class={`form-control mt-2 primary-input ${
            errMessages.password ? "is-invalid" : null
          }`}
          name="password"
          id="password"
          bind:value={userData.password}
        />
      </div>
      {#if errMessages.password}
        <div class="text-danger">{errMessages.password}</div>
      {/if}
      <div class="mt-1 text-end cl-primary auth-link mb-0">
        Forgot password?
      </div>
      <button type="submit" class="btn-main mt-3 full-width">Sign In</button>
    </form>

    <hr class="mt-4" />

    <div>
      <span>Not have an account yet?</span>
      <span class="cl-primary auth-link" on:click={navigateSingup}>
        Create account
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
