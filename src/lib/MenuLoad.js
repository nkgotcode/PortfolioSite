import { writable } from 'svelte/store';
import { page } from '$app/stores';

export const menu = writable(false);
export const sidebar_show = writable(false);
export const url_path = writable(page.path);
