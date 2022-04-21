<script>
  import { fly } from "svelte/transition";

  let userData = {
    email: "",
    firstName: "",
    lastName: "",
    known_as: "",
    id_num: "",
    address: "",
    phone: "",
  };

  const saveUserData = () => {};
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
          class={`form-control mt-2 primary-input`}
          name="email"
          id="email"
          bind:value={userData.email}
        />
      </div>

      <div class="form-group mt-3">
        <label class="cl-primary" for="firstname">Full Name</label>
        <div class="row">
          <div class="col-sm-6">
            <input
              type="text"
              class={`form-control mt-2 primary-input`}
              name="firstname"
              id="firstname"
              bind:value={userData.firstName}
            />
            <small class="text-black-50">First Name</small>
          </div>
          <div class="col-sm-6">
            <input
              type="text"
              class={`form-control mt-2 primary-input`}
              name="lastname"
              id="lastname"
              bind:value={userData.lastName}
            />
            <small class="text-black-50">Last Name</small>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-sm-6 mt-3">
            <label for="known_as" class="cl-primary">Known As</label>
            <input
              type="text"
              class={`form-control mt-2 primary-input`}
              name="known_as"
              id="known_as"
              bind:value={userData.known_as}
            />
          </div>

          <div class="col-sm-6 mt-3">
            <label for="id_num" class="cl-primary">ID Card Number</label>
            <input
              type="text"
              class={`form-control mt-2 primary-input`}
              name="id_num"
              id="id_num"
              bind:value={userData.id_num}
            />
          </div>
        </div>
      </div>

      <div class="form-group mt-3">
        <label for="address" class="cl-primary">Address</label>
        <input
          type="text"
          class={`form-control mt-2 primary-input`}
          name="address"
          id="address"
          bind:value={userData.address}
        />
      </div>

      <div class="form-group mt-3">
        <label class="cl-primary" for="areaCode">Phone Number</label>
        <div class="row">
          <div class="col-4">
            <input
              type="text"
              class={`form-control mt-2 primary-input`}
              name="areaCode"
              id="areaCode"
              bind:value={userData.areaCode}
            />
            <small class="text-black-50">Area Code</small>
          </div>
          <div class="col-8">
            <input
              type="text"
              class={`form-control mt-2 primary-input`}
              name="phone"
              id="phone"
              bind:value={userData.phone}
            />
            <small class="text-black-50">Phone Number</small>
          </div>
        </div>
      </div>

      <button type="submit" class="btn-main mt-3 full-width">Update</button>
    </form>
  </div>
</div>
