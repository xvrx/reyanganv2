
<script>
    // @ts-nocheck
    // @ts-ignore-all
    export let data;
    import {get, writable} from 'svelte/store'
    
    // state
    import { resolvedData, petugas_context, petugas_value} from "$lib/resolved";
    import { mainMenu, totalRec } from "$lib/pelayanan";
    
    import { petugas } from "$lib/user";
    let petugasList = $petugas.map(x => x?.nama)
    
    // SVELTE MOTION
    import { fade, fly } from 'svelte/transition';
    import { spring, tweened } from "svelte/motion";
    import { cubicInOut, backInOut, quintInOut } from "svelte/easing";
    
    // UTILS
    import { toNPWP, limitchar } from "$lib/utils.js";
    
    // svelte icons
    import GiBalkenkreuz from 'svelte-icons/gi/GiBalkenkreuz.svelte'
    import IoMdCodeDownload from 'svelte-icons/io/IoMdCodeDownload.svelte'
    import Selectx from "$components/selectx.svelte";

    import GiPerson from 'svelte-icons/gi/GiPerson.svelte'
    import GiPiercedBody from 'svelte-icons/gi/GiPiercedBody.svelte'
    import GiSupersonicArrow from 'svelte-icons/gi/GiSupersonicArrow.svelte'
    
    
    // COMPONENTS
    import InputBox from "$components/InputBox.svelte"
    import Button from '$components/button.svelte';
    import LoadableIcon from '$components/loadable_icon.svelte';
    import DataBar from './resolved/data_bar.svelte'
    
    // import icons
    // resolved
    
    
    // store
    import { baseUrl } from "$lib/store.js";
    const loadmoreStat = writable(false)
     
    export let { url, selectObjects } = data

    function petugasOnChange(x) {
        console.log('petugas active :', x)
        petugas_value.set(x)
        petugas_context.set(false)
    }




    </script>
  
    
    <div in:fly={{ x: 200, duration: 300, delay:300 }}  class="pelayanan-secondary-tabs">
        <div class="options-container">
            <div class="inner-opts-container flex flex-between align-center">

                <div class="opts-searchbox">
                    <!-- <Inputx id="search-box" title="cari data"/> -->
                    <InputBox placeholder="cari data pelayanan"/>
                </div>

                <div class="opts-etc flex justify-center align-center">
                    <div class="button-add-new-wrapper">
                    <Button 

                        color_font_hover="var(--red-active)"
                        color_font="var(--red-active)"
                        color_backgr_hover = "rgba(0,0,0,0)"
                        height="32px" 
                        title="Data Baru" 
                        desc="tambah data pelayanan baru"
                        icon iconsize=20>
                        <svelte:fragment slot=icon>
                            <GiBalkenkreuz />
                        </svelte:fragment>
                    </Button>
                        <!-- <button>
                            +
                        </button> -->
                    </div>
                    <div class="button-xls-wrapper flex justify-center align-center">
                    <Button 
                        color_font="var(--white)"
                        color_backgr="var(--blue-active)"
                        height="32px" 
                        title="download" 
                        desc="download data pelayanan"
                        icon iconsize = "30"> 
                        <svelte:fragment slot=icon >
                            <IoMdCodeDownload/>
                        </svelte:fragment>
                    </Button>
                    
                    </div>

                    <div class="select-pic">
                        <Selectx 
                                --boxwidth=131px
                                context_right="-2px"
                                context_top="35px"
                                clicked = {petugas_context}
                                listOnClick_all = { () => {petugas_value.set("all");petugas_context.set(false)}}
                                listOnClick={x => petugasOnChange(x)}
                                lists = {petugasList}
                                opt_all={true}
                                color_font = "var(--blue-active)"
                                icon
                                desc="Filter berdasarkan pegawai"
                                title={$petugas_value === "all" ? "Pilih Pegawai" : $petugas_value}
                                height="32px"
                                >
                            <svelte:fragment slot=list-icon><GiSupersonicArrow /></svelte:fragment>
                            <svelte:fragment slot=icon>
                            {#if $petugas_value === 'all'}<GiPerson />{:else}<GiPiercedBody/>{/if}
                            </svelte:fragment>
                        </Selectx>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div in:fly={{ x: 200, duration: 300, delay:300 }}  class="pelayanan-data-lists">
        <div class="table-headers">
            <span class="table-head table-num">No</span>
            <span class="table-head">Nama</span>
            <span class="table-head">NPWP</span>
            <span class="table-head">Kepentingan</span>
            <span class="table-head">Penyelesaian</span>
            <span class="table-head table-date">Tanggal Penyelesaian</span>
        </div>
        <div class="data-list-wrapper">
            <div class="data-list-inner-wrapper">
                {#if $resolvedData.length > 0}
                    {#each $resolvedData as dataList, idx}
                        <DataBar dataList={dataList} idx={idx}/>
                    {/each}
                {:else}
                <div class="no-data-found flex w-full justify-center align-center">No Data Found!</div>
                {/if}

                {#if $totalRec > $resolvedData.length}
                    <div class="load-more w-full flex align-center justify-center">
                        <Button title="Load More Data" icon>
                            <svelte:fragment slot=icon>
                                <LoadableIcon loading={$loadmoreStat} />
                            </svelte:fragment>
                        </Button>
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
    
    .pelayanan-data-lists{
        height: calc(100% - 0.35em);
    }
    
    .data-list-inner-wrapper{
        width: calc(100%);
    }
    
    .data-list-wrapper{
        overflow-y: auto;
        overflow-x: hidden;
        height: calc(100% - 4.25em);
        width: calc(100% + 0.45rem);
    }

    .table-headers {
        width: calc(100%);
        margin-top: 0.5em;
        display: grid;
        grid-template-columns: 6% 15% 18% 21% 23% 15%;
        gap: 3px;
        background-color: var(--secondary-color);
        font-size: 1rem;
    }

    
    .load-more{
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
    
    
    .inner-opts-container{
        max-height: 32px;
    }
    


    </style>