<script>
  import { fly } from "svelte/transition";

  let userData = {
    firstName: "",
    lastName: "",
    areaCode: "",
    phone: "",
    street: "",
    street2: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
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
          value="danildevpay@gmail.com"
          readonly
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

      <div class="form-group mt-3">
        <label for="address" class="cl-primary">Address</label>
        <div>
          <input
            type="text"
            class={`form-control mt-2 primary-input`}
            name="street"
            id="street"
            bind:value={userData.street}
          />
          <small class="text-black-50">Street Address</small>
        </div>

        <div>
          <input
            type="text"
            class={`form-control mt-2 primary-input`}
            name="street2"
            id="street2"
            bind:value={userData.street2}
          />
          <small class="text-black-50">Street Address Line 2</small>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <input
              type="text"
              class={`form-control mt-2 primary-input`}
              name="city"
              id="city"
              bind:value={userData.city}
            />
            <small class="text-black-50">City</small>
          </div>
          <div class="col-sm-6">
            <input
              type="text"
              class={`form-control mt-2 primary-input`}
              name="state"
              id="state"
              bind:value={userData.state}
            />
            <small class="text-black-50">State / Province</small>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <input
              type="text"
              class={`form-control mt-2 primary-input`}
              name="zipcode"
              id="zipcode"
              bind:value={userData.zipcode}
            />
            <small class="text-black-50">Postal / Zip Code</small>
          </div>
          <div class="col-sm-6">
            <input
              type="text"
              class={`form-control mt-2 primary-input`}
              name="country"
              id="country"
              bind:value={userData.country}
            />
            <small class="text-black-50">Country</small>
          </div>
        </div>
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
