<script>
  import { fly } from "svelte/transition";

  import { cursList } from "../../store";

  export let asset;

  let currency = $cursList.filter(
    (item) => item.cur_id == asset[0].substr(1, 1)
  );
</script>

<div class="row mx-0 py-1 wallet-item" in:fly={{ duration: 500, y: 500 }}>
  <div
    class="col-3 text-center d-flex justify-content-center align-items-center"
  >
    <img
      src={`vendor/image/${currency[0].icon_image}`}
      alt="asset"
      class="asset-icon me-2"
    />
    <span>{currency[0].symbol}</span>
  </div>
  <div class="col-3 text-center">
    {asset[1].w0 ? new Intl.NumberFormat().format(asset[1].w0.s2) : "-"}
  </div>
  <div class="col-3 text-center">
    {asset[1].w1 ? new Intl.NumberFormat().format(asset[1].w1.s2) : "-"}
  </div>
  <div class="col-3 text-center">
    {asset[1].w2 ? new Intl.NumberFormat().format(asset[1].w2.s2) : "-"}
  </div>
</div>

<style lang="scss">
  .asset-icon {
    width: 1.8rem;
  }

  .wallet-item {
    border-radius: 0.2rem;
  }

  .wallet-item:hover {
    background-color: rgba(180, 113, 174, 0.25);
  }
</style>
