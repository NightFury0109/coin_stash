<script>
  import { Icon } from "svelte-fontawesome";
  import { faSync } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="wallets">
  <div class="sync-icon">
    <Icon icon={faSync} />
  </div>
  <p class="fs-5 cl-primary">Wallets</p>

  <div class="wallets-field">
    <div class="wallets-field-size">
      <div class="wallets-header">
        <div class="row mx-0">
          <div class="col-3 text-center cl-primary">Asset</div>
          <div class="col-3 text-center cl-primary">Spot Wallet</div>
          <div class="col-3 text-center cl-primary">Loan</div>
          <div class="col-3 text-center cl-primary">In Collateral</div>
        </div>
      </div>

      <div class="wallets-list">
        <div class="row mx-0">
          <div class="col-3 text-center">ZAR</div>
          <div class="col-3 text-center">45000.00</div>
          <div class="col-3 text-center">-39000.00</div>
          <div class="col-3 text-center">-</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .wallets {
    position: relative;
    background-color: rgba(128, 128, 128, 0.25);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 18px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.2rem;
    padding: 0.8rem;
  }

  .sync-icon {
    background-color: #b471ae;
    border-radius: 50%;
    padding: 0.3rem;
    position: absolute;
    right: 0.8rem;
    height: 2.3rem;
    width: 2.3rem;
    color: white;
  }

  .sync-icon:hover {
    cursor: pointer;
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transition: transform 1s ease-in-out;
    -webkit-transition: transform 1s ease-in-out;
  }

  .wallets-field {
    background-color: white;
    padding: 0.5rem;
    border-radius: 0.2rem;
    overflow: auto;
  }

  .wallets-field-size {
    min-width: 500px;
    max-height: 250px;
  }

  .wallets-header {
    position: sticky;
    top: 0;
    border-bottom: 2px solid #b471ae;
    padding: 0.5rem 0;
  }

  .wallets-list {
    padding: 0.5rem 0;
  }
</style>
