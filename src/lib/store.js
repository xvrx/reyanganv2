export const ssr = false
import { browser } from "$app/environment";
import { writable,readable } from "svelte/store"


export const bruh = writable("nigga");
export const baseUrl = readable('http://10.29.63.250:2000')
