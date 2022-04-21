<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-navigator";

  import { profilePage } from "../store";

  import SideMenu from "../components/profile/SideMenu.svelte";
  import Account from "../components/profile/Account.svelte";
  import ChangePassword from "../components/profile/ChangePassword.svelte";
  import Setting from "../components/profile/Setting.svelte";
  import Security from "../components/profile/Security.svelte";

  onMount(() => {
    navigate("#account");
    profilePage.set("Account");
  });
</script>

<SideMenu />

<div class="left-padding">
  {#if $profilePage === "Account"}
    <Account />
  {/if}
  {#if $profilePage === "Password"}
    <ChangePassword />
  {/if}
  {#if $profilePage === "Setting"}
    <Setting />
  {/if}
  {#if $profilePage === "Security"}
    <Security />
  {/if}
</div>

<style lang="scss">
  .left-padding {
    padding-left: 2rem;
  }
</style>
