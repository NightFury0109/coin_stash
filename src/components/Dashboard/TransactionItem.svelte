<script>
  import { fly } from "svelte/transition";
  import { Icon } from "svelte-fontawesome";
  import { faInfoCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

  import { cursList, curTypes } from "../../store";

  export let pendTran;

  let currency = $cursList.filter((item) => item.cur_id == pendTran.cr_cur_id);
  let type = $curTypes.filter(
    (item) => item.cur_type_id == currency[0].cur_type
  );
</script>

<div class="row mx-0 py-1 transaction-item" in:fly={{ duration: 500, y: 500 }}>
  <div class="col-2 text-center">
    <span>{new Date(pendTran.time).toLocaleDateString()}</span>
    <span>{new Date(pendTran.time).toLocaleTimeString("it-IT")}</span>
  </div>
  <div class="col-2 d-flex justify-content-center align-items-center">
    {[type[0].name.charAt(0).toUpperCase() + type[0].name.slice(1)]} withdrawal
  </div>
  <div
    class="col-2 text-center d-flex justify-content-center align-items-center"
  >
    <img
      src={`vendor/image/${currency[0].icon_image}`}
      alt="asset"
      class="asset-icon me-2"
    />
    <span>{currency[0].symbol}</span>
  </div>
  <div class="col-3 d-flex justify-content-center align-items-center">
    {new Intl.NumberFormat().format(pendTran.dr_amount)}
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
