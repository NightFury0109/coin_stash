<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { Icon } from "svelte-fontawesome";
  import {
    faSync,
    faPlusCircle,
    faMinusCircle,
  } from "@fortawesome/free-solid-svg-icons";
  import Switch from "svelte-switch";

  import {
    balances,
    pendTrans,
    isBalanceLoading,
    isPendTransLoading,
    isLoanLoading,
  } from "../store";
  import {
    getBalances,
    getCursList,
    getCurTypes,
    getPendTrans,
    getLoan,
  } from "../apis/finance";

  import WalletItem from "../components/dashboard/WalletItem.svelte";
  import TransactionItem from "../components/dashboard/TransactionItem.svelte";
  import DashboardSpinner from "../components/loading/DashboardSpinner.svelte";
  import Loans from "../components/dashboard/Loans.svelte";

  let hideZeroBal = false;

  onMount(async () => {
    await getCursList();
    await getCurTypes();
    await getBalances();
    await getPendTrans();
    await getLoan();
  });

  const handleHideZeroBal = (e) => {
    hideZeroBal = e.detail.checked;
  };

  const reloadBalances = async () => {
    isBalanceLoading.set(true);
    await getBalances();
  };

  const reloadPenTrans = async () => {
    isPendTransLoading.set(true);
    await getPendTrans();
  };

  const reloadLoan = async () => {
    isLoanLoading.set(true);
    await getLoan();
  };
</script>

<div in:fly={{ duration: 300, x: -300 }}>
  <!-- Wallets -->
  <div class="wallets">
    <div class="sync-icon" on:click={reloadBalances}>
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
          {#if $isBalanceLoading}
            <DashboardSpinner />
          {:else}
            {#each $balances as balance}
              <WalletItem asset={balance} />
            {/each}
          {/if}
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
    <div class="sync-icon" on:click={reloadPenTrans}>
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
          {#if $isPendTransLoading}
            <DashboardSpinner />
          {:else}
            {#each $pendTrans as pendTran}
              <TransactionItem {pendTran} />
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Loan Health -->
  <div class="loan mt-4 d-flex align-items-center flex-column">
    <div class="sync-icon" on:click={reloadLoan}>
      <Icon icon={faSync} />
    </div>
    <p class="fs-5 cl-primary">Loan Health</p>

    {#if $isLoanLoading}
      <DashboardSpinner />
    {:else}
      <Loans />
    {/if}
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
  }
</style>
