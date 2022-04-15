<script>
  import { assets } from "../../utils/constants";

  export let asset;
  export let spot;
  export let loan;
  export let collateral;
</script>

<div class="row mx-0 py-1 wallet-item">
  <div
    class="col-3 text-center d-flex justify-content-center align-items-center"
  >
    <img src={assets[asset].image} alt="asset" class="asset-icon me-2" />
    <span>{assets[asset].symbol}</span>
  </div>
  <div class="col-3 text-center">{spot === 0 ? "-" : spot.toFixed(2)}</div>
  <div class="col-3 text-center">{loan === 0 ? "-" : loan.toFixed(2)}</div>
  <div class="col-3 text-center">{collateral === 0 ? "-" : collateral}</div>
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
