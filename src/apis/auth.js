import { navigate } from 'svelte-navigator';

import api from '../utils/api';
import { auth, errors } from '../store';

// Register User
export const createAccount = async newUser => {
  try {
    const res = await api.post('/user', newUser);
    console.log(res);

  } catch (error) {
    console.log(error)
  }
};