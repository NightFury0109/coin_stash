<script>
  import {
    faUser,
    faFingerprint,
    faSliders,
    faUnlock,
  } from "@fortawesome/free-solid-svg-icons";
  import { navigate } from "svelte-navigator";
  import { fly } from "svelte/transition";

  import SideMenuItem from "./SideMenuItem.svelte";
  import { profilePage } from "../../store";

  const switchPages = (title) => {
    profilePage.set(title);
    navigate(`#${title.toLowerCase()}`);
  };
</script>

<div class="sidebar" transition:fly={{ duration: 500, x: -300 }}>
  <SideMenuItem title="Account" icon={faUser} {switchPages} />
  <SideMenuItem title="Password" icon={faUnlock} {switchPages} />
  <SideMenuItem title="Setting" icon={faSliders} {switchPages} />
  <SideMenuItem title="Security" icon={faFingerprint} {switchPages} />
  <!-- <Link to="account">
    <SideMenuItem title="Account" icon={faUser} />
  </Link>
  <Link to="change_password">
    <SideMenuItem title="Password" icon={faUnlock} />
  </Link>
  <Link to="setting">
    <SideMenuItem title="Setting" icon={faSliders} />
  </Link>
  <Link to="security">
    <SideMenuItem title="Security" icon={faFingerprint} />
  </Link> -->
</div>

<style lang="scss">
  .sidebar {
    position: absolute;
    left: 0;
  }

  :global(a) {
    color: inherit !important;
    text-decoration: none !important;
  }
</style>
