<script>
  import { fly } from "svelte/transition";

  import { userInfo, errors } from "../../store";
  import userInfoValidation from "../../utils/validation/userInfoValidation";

  let userData = {
    email: "",
    firstName: "",
    lastName: "",
    known_as: "",
    id_num: "",
    address: "",
    mobile: "",
  };

  userInfo.subscribe((value) => {
    userData.email = value.email;
    userData.firstName = value.first_name;
    userData.lastName = value.surname;
    userData.known_as = value.known_as;

    if (value.local_cur_id !== 0) userData.id_num = value.local_cur_id;

    userData.address = value.address;
    userData.mobile = value.mobile;
  });

  const saveUserData = async () => {
    const { errorMsgs, isValid } = await userInfoValidation(userData);

    if (!isValid) errors.set(errorMsgs);
  };
</script>

<div
  class="d-flex justify-content-center align-items-center"
  transition:fly={{ duration: 500, x: 300 }}
>
  <div class="fit-content-width text-start">
    <p class="fs-2 cl-primary fw-bold">User Account</p>

    <form on:submit|preventDefault={saveUserData} novalidate>
      <div class="form-group">
        <label for="email" class="cl-primary">Email</label>
        <input
          type="email"
          class={`form-control mt-2 primary-input ${
            $errors.email ? "is-invalid" : null
          }`}
          name="email"
          id="email"
          bind:value={userData.email}
        />
        {#if $errors.email}
          <div class="text-danger">{$errors.email}</div>
        {/if}
      </div>

      <div class="form-group mt-3">
        <label class="cl-primary" for="firstName">Full Name</label>
        <div class="row">
          <div class="col-sm-6">
            <input
              type="text"
              class={`form-control mt-2 primary-input ${
                $errors.firstName ? "is-invalid" : null
              }`}
              name="firstName"
              id="firstName"
              bind:value={userData.firstName}
            />
            <small class="text-black-50">First Name</small>
            {#if $errors.firstName}
              <div class="text-danger">{$errors.firstName}</div>
            {/if}
          </div>
          <div class="col-sm-6">
            <input
              type="text"
              class={`form-control mt-2 primary-input ${
                $errors.lastName ? "is-invalid" : null
              }`}
              name="lastName"
              id="lastName"
              bind:value={userData.lastName}
            />
            <small class="text-black-50">Last Name</small>
            {#if $errors.lastName}
              <div class="text-danger">{$errors.lastName}</div>
            {/if}
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-sm-6 mt-3">
            <label for="known_as" class="cl-primary">Known As</label>
            <input
              type="text"
              class={`form-control mt-2 primary-input ${
                $errors.known_as ? "is-invalid" : null
              }`}
              name="known_as"
              id="known_as"
              bind:value={userData.known_as}
            />
            {#if $errors.known_as}
              <div class="text-danger">{$errors.known_as}</div>
            {/if}
          </div>

          <div class="col-sm-6 mt-3">
            <label for="id_num" class="cl-primary">ID Card Number</label>
            <input
              type="text"
              class={`form-control mt-2 primary-input ${
                $errors.id_num ? "is-invalid" : null
              }`}
              name="id_num"
              id="id_num"
              bind:value={userData.id_num}
            />
            {#if $errors.id_num}
              <div class="text-danger">{$errors.id_num}</div>
            {/if}
          </div>
        </div>
      </div>

      <div class="form-group mt-3">
        <label for="address" class="cl-primary">Address</label>
        <input
          type="text"
          class={`form-control mt-2 primary-input ${
            $errors.address ? "is-invalid" : null
          }`}
          name="address"
          id="address"
          bind:value={userData.address}
        />
        {#if $errors.address}
          <div class="text-danger">{$errors.address}</div>
        {/if}
      </div>

      <div class="form-group mt-3">
        <label class="cl-primary" for="mobile">Phone Number</label>
        <input
          type="text"
          class={`form-control mt-2 primary-input ${
            $errors.mobile ? "is-invalid" : null
          }`}
          name="mobile"
          id="mobile"
          bind:value={userData.mobile}
        />
        {#if $errors.mobile}
          <div class="text-danger">{$errors.mobile}</div>
        {/if}
      </div>

      <button type="submit" class="btn-main mt-3 full-width">Update</button>
    </form>
  </div>
</div>
