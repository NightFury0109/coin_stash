import api from '../utils/api';
import { cursList, curTypes } from '../store';

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