<script>
  import { Icon } from "svelte-fontawesome";
  import { faInfoCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

  import { assets } from "../../utils/constants";

  export let date;
  export let asset;
  export let amount;
</script>

<div class="row mx-0 py-1 transaction-item">
  <div class="col-2 text-center">
    <span>{date.toLocaleDateString()}</span>
    <span>{date.toLocaleTimeString("en-GB")}</span>
  </div>
  <div class="col-2 d-flex justify-content-center align-items-center">
    {asset === "zar" ? "Fiat withdrawal" : "Crypto withdrawal"}
  </div>
  <div
    class="col-2 text-center d-flex justify-content-center align-items-center"
  >
    <img src={assets[asset].image} alt="asset" class="asset-icon me-2" />
    <span>{assets[asset].symbol}</span>
  </div>
  <div class="col-3 d-flex justify-content-center align-items-center">
    {amount}
  </div>
  <div class="col-3 d-flex justify-content-start align-items-center">
    <div class="d-flex info-icon me-2">
      <Icon icon={faInfoCircle} />
    </div>
    <div class="d-flex delete-icon">
      <Icon icon={faTrashAlt} />
    </div>
  </div>
</div>

<style lang="scss">
  .asset-icon {
    width: 1.8rem;
  }

  .transaction-item {
    border-radius: 0.2rem;
  }

  .transaction-item:hover {
    background-color: rgba(180, 113, 174, 0.25);
  }

  .info-icon {
    font-size: 1.25rem;
  }

  .info-icon:hover {
    cursor: pointer;
    color: #13b5ec;
  }

  .delete-icon {
    background-color: #ff4d4d;
    padding: 0.3rem;
    border-radius: 50%;
    color: white;
  }

  .delete-icon:hover {
    cursor: pointer;
    background-color: #ff1a1a;
  }
</style>
