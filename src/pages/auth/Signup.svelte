<script>
  import { navigate } from "svelte-navigator";

  import { createAccount } from "../../apis/auth";
  import { errors } from "../../store";

  let userData = {
    email: "",
    password: "",
  };

  let errMessages;

  errors.subscribe((value) => {
    errMessages = value;
  });

  const navigateSingin = () => {
    navigate("/signin", { replace: true });
  };

  const signup = async () => {
    await createAccount(userData);
  };
</script>

<div class="d-flex justify-content-center align-items-center">
  <div class="fit-content-width text-start">
    <p class="fs-2 cl-primary fw-bold">Create Your Coin Stash Account</p>

    <form on:submit|preventDefault={signup} novalidate>
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
      <button type="submit" class="btn-main mt-4 full-width"
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
