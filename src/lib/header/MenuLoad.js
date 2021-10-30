import { writable } from 'svelte/store';

export const menu = writable(false);
export const sidebar_show = writable(false);
export const url_path = writable('');
