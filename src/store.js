import { readable, writable } from 'svelte/store';

export const apiURL = readable("https://api.coinstash.co.za");

export const isAuth = writable(false);
export const errors = writable({});