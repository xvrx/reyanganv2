// @ts-ignore-all
// export const ssr = false;
import { writable, get } from 'svelte/store'
import { mainData, petugas } from "$lib/pelayanan.js"
import { baseUrl } from '../../../lib/store.js'


export async function load({params}) {
    return {url : get(baseUrl)}
    // try {
    //     let dat = ''
    //     const maindat = await fetch(get(baseUrl))
    //     let res = maindat.json()
    //     mainData.set(res)
    //     return {
    //         selectObjects: get(petugas),
    //         mainData : get(mainData)
    //     }
    // } catch (error) {
    //     // console.log('error :',error)
    //     return {
    //         err : 'something wrong occured!'
    //     }
    // }
}