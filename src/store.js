import { readable, writable } from 'svelte/store';

export const apiURL = readable("https://api.coinstash.co.za");

export const isAuth = writable(false);
export const userInfo = writable({});
export const errors = writable({});
export const profilePage = writable("Account");