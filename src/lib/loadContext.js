import { writable } from "svelte/store";



export let info_queue = writable(false)
export let info_open = writable(true)
export let info_resolved = writable(false)
export let info_open_modal_add = writable(false)