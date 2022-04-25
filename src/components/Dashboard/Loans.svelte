<script>
  import { fade } from "svelte/transition";
  import { Icon } from "svelte-fontawesome";
  import {
    faHandHoldingDollar,
    faCheckToSlot,
    faLandmarkDome,
  } from "@fortawesome/free-solid-svg-icons";

  import { loan, cursList } from "../../store";

  import LTVRatio from "../LTVRatio.svelte";

  import isEmpty from "../../utils/validation/is-empty";

  let loans = [];
  let collaterals = [];

  Object.entries($loan.loans).forEach((item) => {
    let currency = $cursList.filter((i) => i.cur_id == item[0].substr(1, 1));
    loans.push({
      symbol: currency[0].symbol,
      amount: new Intl.NumberFormat().format(Math.abs(item[1])),
    });
  });

  Object.entries($loan.collateral).forEach((item) => {
    let currency = $cursList.filter((i) => i.cur_id == item[0].substr(1, 1));
    collaterals.push({
      symbol: currency[0].symbol,
      amount: new Intl.NumberFormat().format(Math.abs(item[1])),
    });
  });

  let loanString = loans[0].symbol + " " + loans[0].amount;
  let collateralString = collaterals[0].symbol + " " + collaterals[0].amount;

  loans.forEach((item, index) => {
    if (index !== 0)
      loanString = loanString.concat(" + ", item.symbol, " ", item.amount);
  });

  collaterals.forEach((item, index) => {
    if (index !== 0)
      collateralString = collateralString.concat(
        " + ",
        item.symbol,
        " ",
        item.amount
      );
  });

  collateralString = collateralString.concat(
    " = ZAR ",
    new Intl.NumberFormat().format($loan.collateral_eq)
  );

  if (
    (Object.keys($loan.loans).length === 1 && isEmpty($loan.loans.c1)) ||
    Object.keys($loan.loans).length !== 1
  ) {
    loanString = loanString.concat(
      " = ZAR ",
      new Intl.NumberFormat().format(Math.abs($loan.loan_eq))
    );
  }
</script>

<div class="fit-content-width" in:fade={{ duration: 300 }}>
  <p class="text-start">
    <span class="fw-bold me-2 cl-dark-blue">Loan:</span>
    <span class="cl-dark-blue">{loanString}</span>
  </p>
  <p class="text-start mb-0">
    <span class="fw-bold me-2 cl-dark-blue">Collateral:</span>
    <span class="cl-dark-blue">{collateralString}</span>
  </p>

  <LTVRatio series={new Intl.NumberFormat().format($loan.ltv * 100)} />

  <div class="d-flex justify-content-center flex-wrap">
    <button type="button" class="btn-blue mx-1 my-1">
      <Icon icon={faCheckToSlot} />
      <span class="ms-2">Settle</span>
    </button>
    <button type="button" class="btn-main mx-1 my-1">
      <Icon icon={faHandHoldingDollar} />
      <span class="ms-2">Borrow</span>
    </button>
    <button type="button" class="btn-orange mx-1 my-1">
      <Icon icon={faLandmarkDome} />
      <span class="ms-2">Adjust Collateral</span>
    </button>
  </div>
</div>
