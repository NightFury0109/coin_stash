<script>
  import { fly } from "svelte/transition";

  let newPw = {
    currentPw: "",
    password: "",
    password2: "",
  };

  const changePw = () => {};
</script>

<div
  class="d-flex justify-content-center align-items-center"
  transition:fly={{ duration: 500, x: 300 }}
>
  <div class="fit-content-width text-start">
    <p class="fs-2 cl-primary fw-bold">Change Your Password</p>

    <form on:submit|preventDefault={changePw} novalidate>
      <div class="form-group">
        <label for="currentPw" class="cl-primary">Current Password</label>
        <input
          type="password"
          class={`form-control mt-2 primary-input`}
          name="currentPw"
          id="currentPw"
          bind:value={newPw.currentPw}
        />
      </div>
      <div class="form-group mt-3">
        <label for="password" class="cl-primary">New Password</label>
        <input
          type="password"
          class={`form-control mt-2 primary-input`}
          name="password"
          id="password"
          bind:value={newPw.password}
        />
      </div>
      <div class="form-group mt-3">
        <label for="password2" class="cl-primary">Confirm Password</label>
        <input
          type="password"
          class={`form-control mt-2 primary-input`}
          name="password2"
          id="password2"
          bind:value={newPw.password2}
        />
      </div>
      <button type="submit" class="btn-main mt-3 full-width"
        >Change Password</button
      >
    </form>
  </div>
</div>
