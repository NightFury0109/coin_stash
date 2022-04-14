import { readable, writable } from 'svelte/store';

export const apiURL = readable("http://localhost:7000/api");