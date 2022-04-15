<script>
  import { Icon } from "svelte-fontawesome";
  import {
    faSync,
    faPlusCircle,
    faMinusCircle,
    faCheckCircle,
  } from "@fortawesome/free-solid-svg-icons";
  import Switch from "svelte-switch";

  import WalletItem from "../components/Dashboard/WalletItem.svelte";
  import TransactionItem from "../components/Dashboard/TransactionItem.svelte";
  import LTVRatio from "../components/LTVRatio.svelte";

  let hideZeroBal = false;

  const handleHideZeroBal = (e) => {
    hideZeroBal = e.detail.checked;
  };
</script>

<!-- Wallets -->
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
        <WalletItem asset="zar" spot={45000} loan={-39000} collateral={0} />
        <WalletItem asset="btc" spot={2500} loan={150} collateral={1.45257} />
        <WalletItem
          asset="btc"
          spot={104500}
          loan={-1500.59}
          collateral={10.5}
        />
        <WalletItem asset="eth" spot={4500} loan={1000} collateral={0} />
        <WalletItem asset="zar" spot={12000} loan={-5800} collateral={0.5} />
        <WalletItem asset="eth" spot={36500} loan={-1200} collateral={10.5} />
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-start align-items-center mt-2">
    <span class="me-2">Hide zero balances</span>
    <Switch
      on:change={handleHideZeroBal}
      checked={hideZeroBal}
      onColor="#b471ae"
      activeBoxShadow="0 0 2px 3px #b471ae"
      height={25}
      width={50}
    />
  </div>

  <div class="d-flex justify-content-center mt-3">
    <button type="button" class="btn-orange me-3">
      <Icon icon={faMinusCircle} />
      <span class="ms-2">Withdraw</span>
    </button>
    <button type="button" class="btn-blue">
      <Icon icon={faPlusCircle} />
      <span class="ms-2">Deposit</span>
    </button>
  </div>
</div>

<!-- Pending Transactions -->
<div class="transactions mt-4">
  <div class="sync-icon">
    <Icon icon={faSync} />
  </div>
  <p class="fs-5 cl-primary">Pending Transactions</p>

  <div class="transactions-field">
    <div class="transactions-field-size">
      <div class="transactions-header">
        <div class="row mx-0">
          <div class="col-2 text-center cl-primary">Date/Time</div>
          <div class="col-2 text-center cl-primary">Transaction</div>
          <div class="col-2 text-center cl-primary">Asset</div>
          <div class="col-3 text-center cl-primary">Amount</div>
          <div class="col-3 text-center cl-primary">Links</div>
        </div>
      </div>

      <div class="transactions-list">
        <TransactionItem date={new Date()} asset="zar" amount={6800.88} />
        <TransactionItem date={new Date()} asset="zar" amount={1000} />
        <TransactionItem date={new Date()} asset="btc" amount={1.5634842} />
        <TransactionItem date={new Date()} asset="btc" amount={4.5} />
        <TransactionItem date={new Date()} asset="eth" amount={0.55} />
      </div>
    </div>
  </div>
</div>

<!-- Loan Health -->
<div class="loan mt-4 d-flex align-items-center flex-column">
  <div class="sync-icon">
    <Icon icon={faSync} />
  </div>
  <p class="fs-5 cl-primary">Loan Health</p>

  <div class="fit-content-width">
    <p class="text-start">
      <span class="fw-bold me-2 cl-dark-blue">Loan:</span>
      <span class="cl-dark-blue">ZAR 39000</span>
    </p>
    <p class="text-start mb-0">
      <span class="fw-bold me-2 cl-dark-blue">Collateral:</span>
      <span class="cl-dark-blue">BTC 0.05 + ETH 1.52332323 = ZAR 56000</span>
    </p>

    <LTVRatio />

    <div class="d-flex justify-content-center flex-wrap">
      <button type="button" class="btn-blue mx-1 my-1">
        <Icon icon={faMinusCircle} />
        <span class="ms-2">Settle</span>
      </button>
      <button type="button" class="btn-main mx-1 my-1">
        <Icon icon={faPlusCircle} />
        <span class="ms-2">Borrow</span>
      </button>
      <button type="button" class="btn-orange mx-1 my-1">
        <Icon icon={faPlusCircle} />
        <span class="ms-2">Adjust Collateral</span>
      </button>
    </div>
  </div>
</div>

<style lang="scss">
  .wallets,
  .transactions,
  .loan {
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

  .wallets-field,
  .transactions-field {
    // position: relative;
    background-color: white;
    padding: 0 0.5rem 0.5rem 0.5rem;
    border-radius: 0.2rem;
    overflow: auto;
  }

  .wallets-field-size {
    min-width: 400px;
    max-height: 200px;
  }

  .transactions-field-size {
    min-width: 520px;
    max-height: 200px;
  }

  .wallets-header,
  .transactions-header {
    position: sticky;
    top: -1px;
    border-bottom: 2px solid #b471ae;
    padding: 1rem 0 0.5rem 0;
    background-color: white;
  }

  .wallets-list,
  .transactions-list {
    padding: 0.5rem 0;
    // max-height: 180px;
  }
</style>
