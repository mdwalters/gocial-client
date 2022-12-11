import { writable } from "svelte/store";

export const screen = writable("start");
export const username = writable(null);
export const password = writable(null);
export const posts = writable([]);