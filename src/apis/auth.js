import { navigate } from 'svelte-navigator';

import api from '../utils/api';
import { isAuth, errors, userInfo } from '../store';

// Get User
export const getUserData = async () => {
  try {
    const res = await api.get('/user');

    if (res.result === 0) {
      console.log(res);
      userInfo.set(res.data);
    } else {
      console.log(res);
    }
  } catch (error) {
    console.log(error)
  }
};

// Register User
export const createAccount = async newUser => {
  try {
    const res = await api.post('/user', JSON.stringify(newUser));

    if (res.result === 0) {
      errors.set({});
      navigate("/signin", { replace: true });
    } else {
      if (res.result === 41 && (res.error_code === 15 || res.error_code === 14)) {
        errors.set({
          email: res.error_text
        })
      }
      if (res.result === 41 && res.error_code === 13) {
        errors.set({
          password: res.error_text
        })
      }
    }
  } catch (error) {
    console.log(error)
  }
};

// Login User
export const login = async userData => {
  try {
    const res = await api.post('/session', JSON.stringify(userData));
    // console.log(res)
    if (res.result === 0) {
      errors.set({});
      isAuth.set(true);
      localStorage.setItem("token", res.token);
      navigate("/", { replace: true });
    } else {
      // if (res.result === 41 && (res.error_code === 15 || res.error_code === 14)) {
      //   errors.set({
      //     email: res.error_text
      //   })
      // }
      // if (res.result === 41 && res.error_code === 13) {
      //   errors.set({
      //     password: res.error_text
      //   })
      // }
    }
  } catch (error) {
    console.log(error)
  }
};

// Update User Info
export const updateUserInfo = async userData => {
  try {
    const res = await api.put('/user', JSON.stringify(userData));
    console.log(res)
    if (res.result === 0) {
      errors.set({});
    } else {
      // if (res.result === 41 && (res.error_code === 15 || res.error_code === 14)) {
      //   errors.set({
      //     email: res.error_text
      //   })
      // }
      // if (res.result === 41 && res.error_code === 13) {
      //   errors.set({
      //     password: res.error_text
      //   })
      // }
    }
  } catch (error) {
    console.log(error)
  }
};

// Logout
export const logout = async () => {
  try {
    await api.delete('/session');

    localStorage.removeItem("token");
    isAuth.set(false);
  } catch (error) {
    console.log(error);
  }
}