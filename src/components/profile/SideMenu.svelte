<script>
  import {
    faUserEdit,
    faFingerprint,
    faSliders,
    faUnlock,
  } from "@fortawesome/free-solid-svg-icons";
  import { navigate } from "svelte-navigator";
  import { fly } from "svelte/transition";

  import SideMenuItem from "./SideMenuItem.svelte";
  import { profilePage, errors } from "../../store";

  const switchPages = (title) => {
    profilePage.set(title);
    errors.set({});
    navigate(`#${title.toLowerCase()}`);
  };
</script>

<div class="sidebar" transition:fly={{ duration: 500, x: -300 }}>
  <SideMenuItem title="Account" icon={faUserEdit} {switchPages} />
  <SideMenuItem title="Password" icon={faUnlock} {switchPages} />
  <SideMenuItem title="Setting" icon={faSliders} {switchPages} />
  <SideMenuItem title="Security" icon={faFingerprint} {switchPages} />
</div>

<style lang="scss">
  .sidebar {
    position: fixed;
    left: 0;
  }

  :global(a) {
    color: inherit !important;
    text-decoration: none !important;
  }
</style>
