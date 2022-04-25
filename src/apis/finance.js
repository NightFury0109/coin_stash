import api from '../utils/api';
import { cursList, curTypes, balances, pendTrans, loan, isBalanceLoading, isPendTransLoading, isLoanLoading } from '../store';

// Get currencies list
export const getCursList = async () => {
  try {
    const res = await api.get('/curs/list');

    if (res.result === 0) {
      cursList.set(res.data);
    } else {
      console.log(res);
    }
  } catch (error) {
    console.log(error)
  }
};

// Get currency types
export const getCurTypes = async () => {
  try {
    const res = await api.get('/curs/types');

    if (res.result === 0) {
      curTypes.set(res.data);
    } else {
      console.log(res);
    }
  } catch (error) {
    console.log(error)
  }
};

// Get currency types
export const getBalances = async () => {
  try {
    isBalanceLoading.set(true);
    const res = await api.get('/balances');

    if (res.result === 0) {
      balances.set(Object.entries(res.data));
      isBalanceLoading.set(false);
    } else {
      console.log(res);
    }
  } catch (error) {
    console.log(error)
  }
};

// Get pending transaction
export const getPendTrans = async () => {
  try {
    isPendTransLoading.set(true);
    const res = await api.get('/trans?pend');

    if (res.result === 0) {
      console.log(res.data);
      pendTrans.set(res.data);
      isPendTransLoading.set(false);
    } else {
      console.log(res);
    }
  } catch (error) {
    console.log(error)
  }
};

// Get loan
export const getLoan = async () => {
  try {
    isLoanLoading.set(true);
    const res = await api.get('/loans');

    if (res.result === 0) {
      loan.set(res.data);
      isLoanLoading.set(false);
    } else {
      console.log(res);
    }
  } catch (error) {
    console.log(error)
  }
};