import { readable, writable } from 'svelte/store';

export const apiURL = readable("https://api.coinstash.co.za");

// User
export const isAuth = writable(false);
export const userInfo = writable({});
// Error message
export const errors = writable({});
// Router
export const profilePage = writable("Account");
// Currency
export const cursList = writable({});
export const curTypes = writable({});