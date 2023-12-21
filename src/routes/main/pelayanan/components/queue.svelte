
<script>
    // @ts-nocheck
    // @ts-ignore-all
    // export let data;
    import {get, writable} from 'svelte/store'
    
    // state
    import { mainData,mainMenu } from "$lib/pelayanan";
    import { dataAntrian } from "$lib/queue.js";
    
    // SVELTE MOTION
    import { fade, fly } from 'svelte/transition';
    import { spring, tweened } from "svelte/motion";
    import { cubicInOut, backInOut, quintInOut } from "svelte/easing";
    
    // UTILS
    import { toNPWP, limitchar } from "$lib/utils.js";
    // queue
    import { queueCategory, que_on_call, que_last_call } from "$lib/queue.js"
    
    // svelte icons
    import FaSearch from 'svelte-icons/fa/FaSearch.svelte'
    import GiBalkenkreuz from 'svelte-icons/gi/GiBalkenkreuz.svelte'
    import GoTasklist from 'svelte-icons/go/GoTasklist.svelte'
    import IoMdCodeDownload from 'svelte-icons/io/IoMdCodeDownload.svelte'
    import Selectx from "$components/selectx.svelte";

    // reset
    import GiBackForth from 'svelte-icons/gi/GiBackForth.svelte'
    // klik
    import GiClick from 'svelte-icons/gi/GiClick.svelte'
    // kembali
    import GiClockwiseRotation from 'svelte-icons/gi/GiClockwiseRotation.svelte'
    
    
    // COMPONENTS
    import Loader from '$components/loader_small.svelte';
    import InputBox from "$components/InputBox.svelte"
    import Button from '$components/button.svelte';
    import Button_2 from '$components/button_2.svelte';
    import LoadableIcon from '$components/loadable_icon.svelte';
    import Queue_list from './queue/Queue_list.svelte'
    
    // import icons
    // resolved
    
    
    // store
    import { baseUrl } from "$lib/store.js";
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
     
    // export let { url, selectObjects } = data
    
    // console.log(window.location.hostname)
    // console.log('http://'+get(baseUrl)+':2000')
    // console.log($mainData)





    function queueOnClick (x) {
        que_on_call.set(x)
    }

    function queueLastCallClick (x) {
        console.log($que_last_call)
    }

    export let searchStat = writable(false)

$:{
    if ($dataAntrian) {
        $queueCategory.forEach(data => {
            const a = $dataAntrian.filter(x => x?.kode === data?.kode)
            data.queue_count = a.length
        });
    }
}




    </script>
  
    
    <div in:fly={{ x: -200, duration: 300, delay:300 }} out:fly={{ x: -200, duration: 300}} class="pelayanan-secondary-tabs">
        <div class="external-border">
            <span class="kategori-antri">Kategori Antrian</span>
            
            <div class="opts-etc flex">
                <div class="button-add-new-wrapper">
                <Button title="Panggil Antrian" desc="panggil antrian ter-awal" icon iconsize = "24" color_backgr="var(--blue-active)" color_font="var(--white)"> 
                    <svelte:fragment slot=icon>
                        <GoTasklist />
                    </svelte:fragment>
                </Button>
                </div>
                <div class="button-xls-wrapper">
                <Button_2 title="panggil ulang antrian" icon iconsize="24" onClick={queueLastCallClick} color_backgr="var(--white)" color_font="var(--red-active-2)" color_font_hover="var(--red-active-2)" color_backgr_hover="var(--white)"> 
                    <svelte:fragment slot=icon >
                        <GiClockwiseRotation/>
                    </svelte:fragment>
                </Button_2>
                </div>
            </div>

            <span class="total-antri">Total Antrian : {$queueCategory.reduce((x,y) => {return x + y.queue_count}, 0)}</span>

            <div class="counter-outer-wrapper">
                <div class="counter-border">
                    <div class="counter-wrapper">
                        {#each $queueCategory as category }
                            <div class="counter flex-col" on:click={queueOnClick(category.kode)}>
                                <div class="counter-top h-full irt flex-col flex-between align-between">
                                   <div class="first-wrapper flex-col justify-center align-center">
                                        <div class="nomor-antri irt rlv">
                                            {category?.kode}
                                            {#if category.queue_count > 0}
                                            <div class="antrian-count abs flex justify-center align-center">
                                                {category.queue_count}
                                            </div>
                                            {/if}
                                        
                                        </div>
                                        <div class="nama-loket irt flex align-center justify-center">
                                            Antrian {category.namaLoket}
                                            
                                        </div>
                                   </div>
                                    <div class="deskripsi-loket irt">
                                       <span class="desc-1"> Last call</span> <span class="desc-1-value">{category?.current_call ? `${category?.current_call}` : ''}</span>
                                        <span class="desc-2">Next queue</span> <span class="desc-2-value">{category?.next_que ? `${category?.next_que}` : ''}</span>
                                    </div>
                                </div>
                                <div class="counter-bottom  irtflex justify-center">
                                    <div title="panggil antrian selanjutnya" class="ico-wrapper">
                                        <div class="iconx irt">
                                            <Loader loading={$que_on_call === category.kode ? true : false}/> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div in:fly={{ x: -200, duration: 300, delay:300 }}  class="pelayanan-data-lists">
        <div class="table-headers">
            <span class="table-head table-num flex justify-center">No.</span>
            <div class="table-head rlv">Nama <button class="click-search" on:click={() => searchStat.set(!$searchStat)}><FaSearch/></button>
                {#if $searchStat }
                    <div in:fly={{ x: -50, duration: 300 }} out:fly={{ x: -50, duration: 300}} class="opts-searchbox flex abs">
                        <InputBox onClick={() => console.log('bruh')} placeholder="cari data antrian"/>
                        <button on:click={() => searchStat.set(false)} class="btn-1">x</button>
                    </div>
                {/if}
            </div>
            <span class="table-head">NPWP / NIK</span>
            <span class="table-head">Kepentingan</span>
            <span class="table-head">Status</span>
            <span class="table-head table-date">Opsi</span>
        </div>
        <div class="data-list-wrapper">
            <div class="data-list-inner-wrapper">
                {#if $mainData.length > 0}
                    {#each $dataAntrian as dataList}
                        <Queue_list dataList={dataList} />
                    {/each}
                {:else}
                <div class="no-data-found flex w-full justify-center align-center">No Data Found!</div>
                {/if}
            </div>
        </div>
    </div>

<style>
.btn-1{
    all: unset;
    color: var(--white);
    cursor: pointer;
    padding: 0px 10px;
    border-radius: 0px 5px 5px 0px;
    background-color: var(--grey-not-so-dark);
    transition: all 150ms ease-out;
}

.btn-1:active {
    /* color: var(--blue-active); */
    background-color:var(--grey-dark) ;
}
.click-search{
    cursor: pointer;
    color: var(--grey-not-so-dark);
    padding: 4px;
    border-radius: 5px;
    width: 30px;
    border: 1px solid var(--grey-not-so-dark);
    margin-left: 10px;
    transition: background-color 200ms;
}

.antrian-count{
    color: var(--red-active);
    font-family: quantico;
    font-size: 1.1rem;
    left: calc(100% + 23px);
    top: 20px;
    background-color: var(--light-red);
    padding: 2px 7px;
    border-radius: 7.5px;
}

.click-search:hover{
    color: var(--white);
    background-color: var(--blue-active);
}

.click-search:active{
    transform: scale(0.95);
}

.counter-border{
    width: 100%;
    padding: 1px;
    scrollbar-width:thin;
    display: flex;
    overflow-x: scroll;
}

.counter-outer-wrapper{
    margin-top: 32px;
    border: 4px solid var(--table-header);
    width: 100%;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
}

.counter-wrapper{
    display: flex;
    margin-top: 28px;
}
.external-border{
    position: relative;
}

.kategori-antri{
    color: var(--grey-dark);
    position: absolute;
    background-color: var(--white);
    padding: 10px;
    left: 25px;
    top: -22px;
}
.total-antri{
    color: var(--grey-dark);
    position: absolute;
    background-color: var(--white);
    padding: 10px;
    right: 25px;
    top: -23px;
}

.counter-wrapper {
    display: flex;
 
}

.counter-border::-webkit-scrollbar {
    width: 5px;
    height: 10px;
    position: absolute;
    right: -10em;
    border-radius: 0px;
  }

  .counter-border:hover::-webkit-scrollbar-thumb {
    background: var(--secondary-color-grey); 
    position: absolute;
    right: -50px;
  }
  
.no-data-found{
    margin: 10px 0;
}

.nomor-antri{
    font-family: "quanticoBold";
    font-size: 3rem;
}

.nama-loket{
    font-weight: 500;
    text-align: center;
    margin-bottom: 15px;
}

.deskripsi-loket{
    color: var(--grey-not-so-dark);
    width: 100%;
    font-size: 0.95rem;
    font-weight: 500;
    text-align: center;
    display: grid;
    gap: 3px 0px;
    grid-template-columns: 50% 50%;
}

.desc-1, .desc-2 {
    font-size: 0.85rem;
    color: var(--blue-active);
    padding: 0px 3px 0px 5px;
    background-color: var(--light-blue);
    text-align: start;
}

.desc-1 {
    color: var(--green-active);
    background-color: var(--light-green);
}

.desc-1-value, .desc-2-value {
    font-size: 0.85rem;
    color: var(--blue-active);
    border: 1px solid var(--light-blue);
    font-weight: 500;
    text-align: start;
    padding-left: 5px;
}

.desc-1-value {
    color: var(--green-active);
}

.desc-1{
    border-radius: 6px 0 0 0;
}

.desc-2 {
    border-radius: 0 0 0 6px;
}
.desc-1-value {
    border-radius: 0 6px 0 0;
}
.desc-2-value {
    border-radius: 0 0 6px 0px;
}


.opts-searchbox{
    top: 5px;
    left: 0px;
    box-shadow: 0px 1px 35px 0px rgba(0,0,0,0.35); 
    -webkit-box-shadow: 0px 1px 35px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 0px 1px 35px 0px rgba(0,0,0,0.45);
}

.counter{
    cursor: pointer;
    user-select: none;
    color: var(--grey-dark);
    position: relative;
    padding: 10px;
    width: 193px;
    border: 1px solid var(--grey-not-so-dark);
    margin: 11px 10px;
    border-radius: 10px;
}

.counter:hover{
    color: var(--blue-active);
    border: 1px solid var(--blue-semi)
}

.counter:active{
    transform: scale(0.98);
}

.ico-wrapper{
    padding: 0px 5px 0px 5px;
    top: -10px;
    left: 71px;
    border-radius: 100px;
    background-color: var(--white);
    position: absolute;
}
.iconx{
    padding: 1px;
    width: 38px;
    display: flex;
    justify-content: center;
}

    .pelayanan-data-lists{
        height: calc(100% - 14.5em);
    }
    
    .data-list-inner-wrapper{
        width: calc(100%);
    }
    
    .data-list-wrapper{
        overflow-y: auto;
        overflow-x: hidden;
        height: calc(100% - 3.5em);
        width: calc(100% + 0.45rem);
    }
    
    .table-headers {
        width: 100%;
    display: grid;
    grid-template-columns: 6% 17% 25% 25% 15% 11%;
    gap: 3px;
    background-color: var(--table-header);
    font-size: 1rem;
    }
   
    .table-num{
        text-align: center;
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
        padding: 5px 0;
        font-size: 1rem;
        /* background-color: var(--light-blue); */
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
    
    
    .opts-etc{
        position: absolute;
        justify-content: center;
        align-items: center;
        background-color: var(--white);
        left: 236px;
        top: -20px;
        padding: 0px 10px;
    }
    
    </style>