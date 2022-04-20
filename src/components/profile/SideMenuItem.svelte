<script>
  import { Icon } from "svelte-fontawesome";

  let innerWidth;

  const standardWidth = 768;

  let titleDisplay;
  let itemWidth;
  let itemPadding;

  export let title;
  export let icon;
  export let switchPages;

  const handelMouseover = () => {
    if (innerWidth < standardWidth) {
      titleDisplay = "display: block";
      itemWidth = "width: fit-content";
      itemPadding = "px-3";
    }
  };

  const handleMouseout = () => {
    if (innerWidth < standardWidth) {
      titleDisplay = "display: none";
      itemWidth = "width: fit-content";
      itemPadding = "px-1";
    }
  };

  $: if (innerWidth >= standardWidth) {
    titleDisplay = "display: block";
    itemWidth = "width: 100%";
    itemPadding = "px-3";
  } else {
    titleDisplay = "display: none";
    itemPadding = "px-1";
    itemWidth = "width: fit-content";
  }

  const onClickMenu = async () => {
    await switchPages(title);
  };
</script>

<svelte:window bind:innerWidth />

<div
  class={`sidemenu-item ${itemPadding}`}
  style={itemWidth}
  on:mouseenter={handelMouseover}
  on:mouseleave={handleMouseout}
  on:click={onClickMenu}
>
  <Icon {icon} class="me-2" />
  <span style={titleDisplay}>{title}</span>
</div>

<style lang="scss">
  .sidemenu-item {
    background-color: #b471ae;
    margin-bottom: 1rem;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    height: 2.5rem;
    display: flex;
    justify-content: start;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      -6px -4px 16px rgba(180, 113, 174, 0.4),
      inset 9px 9px 16px rgba(255, 255, 255, 0.2);
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    &:hover {
      cursor: pointer;
      background-color: #ca9bc6;
    }
  }
</style>
