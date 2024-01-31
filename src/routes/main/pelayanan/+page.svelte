
<script>
    
// @ts-nocheck
// @ts-ignore-all
export let data;
import {get, writable} from 'svelte/store'
import { fade, fly } from 'svelte/transition';

// state
import { mainMenu, totalRec, prevMenu } from "$lib/pelayanan";
import { info_open,info_queue, info_resolved  } from "$lib/loadContext";

let dataProps = {data : data}

// SVELTE MOTION
import {  tweened } from "svelte/motion";
import {  quintInOut } from "svelte/easing";

// UTILS
import { toNPWP, limitchar } from "$lib/utils.js";
import Lazy from '$lib/lazy.svelte';

// svelte icons
import IoMdPricetags from 'svelte-icons/io/IoMdPricetags.svelte'
import GiFlyingFlag from 'svelte-icons/gi/GiFlyingFlag.svelte'
import GiDarkSquad from 'svelte-icons/gi/GiDarkSquad.svelte'

// COMPONENTS
import Tabs3 from "$components/reusables/Tabs3.svelte";

// store
const loadmoreStat = writable(false)


const menuPos = tweened(1500, {
    easing:quintInOut,
    duration:250
})

$ : {
     if ($mainMenu === 0) {
        menuPos.set(0)
     } else if ($mainMenu === 1) {
        menuPos.set(155)
     } else if ($mainMenu === 2) {
        menuPos.set(335)
}}
 
let { url, selectObjects } = data

// console.log(window.location.hostname)
// console.log('http://'+get(baseUrl)+':2000')
// console.log($mainData)



</script>

<div class="pelayanan-margin-wrap">
    <div class="pelayanan-header">
        <h1>Entropy</h1>
    </div>
    <div class="pelayanan-content-x">
        <div class="pelayanan-main-tabs">
            <div 
                style="--menuPos : {$menuPos}px"
                class="main-tabs-inner">
                <div class={`tabs-header
                ${$mainMenu === 0 ? "active" : 
                $mainMenu === 1 ? "active menu-1" : 
                $mainMenu === 2 ? "active menu-2" :
                ''}
                flex`}>

                    <Tabs3
                    --badge-transformY-0 = {$mainMenu === 0 ? "-12px" : '-1px'}
                    --badge-backgr-0 = {$mainMenu === 0 ? "var(--light-blue)" : "var(--secondary-color-grey)"}
                    --badge-transformY-1 = {$mainMenu === 1 ? "-12px" : '-1px'}
                    --badge-backgr-1 = {$mainMenu === 1 ? "var(--light-blue)" : "var(--secondary-color-grey)"}
                    --badge-transformY-2 = {$mainMenu === 2 ? "-12px" : '-1px'}
                    --badge-backgr-2 = {$mainMenu === 2 ? "var(--light-blue)" : "var(--secondary-color-grey)"}
                    buttonTitle1="Queue"
                    buttonTitle2="Open"
                    buttonTitle3="Resolved"
                    onClick1={() => {prevMenu.set($mainMenu);mainMenu.set(0);info_queue.set(true)}}
                    onClick2={() => {prevMenu.set($mainMenu);mainMenu.set(1);info_open.set(true)}}
                    onClick3={() => {prevMenu.set($mainMenu);mainMenu.set(2);info_resolved.set(true)}}
                    >
                        <svelte:fragment slot="icon1">
                            <GiDarkSquad />
                        </svelte:fragment>
                        <svelte:fragment slot="icon2">
                            <IoMdPricetags />
                        </svelte:fragment>
                        <svelte:fragment slot="icon3">
                            <GiFlyingFlag />
                        </svelte:fragment>
                    </Tabs3>
                    
                </div>
                <div class="tabs-header flex">
                    <!-- <Tabs buttonTitle="Unattended"/>
                    <Tabs buttonTitle="Recent"/>
                    <Tabs buttonTitle="Unattended"/> -->
                </div>
            </div>
        </div>
        <div class="pelayanan-main-content">
            {#if $mainMenu === 0 }
                <div class="pelayanan-data-container" out:fly={{ x: -200, duration: 300}}>
                    <Lazy condition={$info_queue} component={() => import("./components/queue.svelte")} />
                </div>
            {:else if $mainMenu === 1}
                <div class="pelayanan-data-container" out:fly={{ x: $mainMenu === 0 ? 200 : -200, duration: 300}}>
                    <Lazy condition={$info_open}  data={data} component={() => import("./components/open.svelte")} />
                </div>
            {:else}
                <div class="pelayanan-data-container" out:fly={{ x: 200, duration: 300}}>
                    <Lazy condition={$info_resolved} data={data} component={() => import("./components/resolved.svelte")} />
                </div>
            {/if}
        </div>
    </div>
</div>



<style>



.no-data-found{
    color: inherit;
    margin: 10px 0;
}

.pelayanan-content-x {
    display: flex;
    flex-direction: column;
    flex-grow: 9;
    overflow: clip;
}

.pelayanan-data-container {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    overflow: clip;
}


.data-list-inner-wrapper{
    width: 100%;
}

.data-list-wrapper{
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100% - 6em);
    width: calc(100% + 0.45rem);
}

.pelayanan-margin-wrap {
    border: 10px solid transparent;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: clip;
}

.content-data-lists{
    height: 100%;
}

.table-headers {
    width: 100%;
    margin-top: 0.5em;
    display: grid;
    grid-template-columns: 6% 15% 18% 21% 23% 15%;
    gap: 3px;
    font-size: 1rem;
}

.content-data-list{
    width: 100%;
    font-size: 1rem;
    color: var(--dark-grey);
    margin-top: 1em;
    display: grid;
    grid-template-columns: 6% 15% 18% 21% 23% 15%;
    gap: 3px;
}

.load-more {
    margin: 1.5em 0px 2em 0px;
}

.table-num{
    display: flex;
    justify-content: center;
}

.table-date{
    display: flex;
    justify-content: center;
    text-align: center;
}

.table-head {
    color: var(--grey-dark);
    padding: 10px 0;
    font-size: 1rem;
    background-color: var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
}
.table-head:first-child {
    border-radius: 5px 0 0 0;
}
.table-head:last-child {
    border-radius: 0 5px 0 0;
}


.pelayanan-header{
    color: var(--grey-dark);
    font-size: medium;
    flex-grow: 1;
}



.inner-opts-container{
    max-height: 32px;
}

.active::after{
    transform: translateX(var(--menuPos));
    content: '';
    position: absolute;
    z-index: 1;
    background-color: var(--blue-active);
    width: 150px;
    height: 1px;
    bottom: 0px;
    left: 0;
}


.pelayanan-main-tabs {
    position: relative;
    /* flex-grow: 1; */
    min-height: 58px;
    display: flex;
    flex-direction: column;
    justify-content: center;

}


.pelayanan-main-content{
    display: flex;
    flex-direction: column;
    overflow: clip;
    flex-grow:1;
}

.pelayanan-main-tabs::after{
    content: '';
    position: absolute;
    background-color: var(--secondary-color-grey);
    width: 100%;
    height: 1px;
    bottom: 0px;
}

</style>