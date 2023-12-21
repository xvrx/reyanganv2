<script>
    export let dataList;
    import { fade, fly } from 'svelte/transition';
    import { spring, tweened } from "svelte/motion";
    export let idx;
    import { toNPWP, limitchar, toLocale } from "$lib/utils.js";
    import { writable } from "svelte/store";
    
    // ICONS
    import TiArrowMinimise from 'svelte-icons/ti/TiArrowMinimise.svelte'
    import GiBackwardTime from 'svelte-icons/gi/GiBackwardTime.svelte'
    import IoIosAddCircleOutline from 'svelte-icons/io/IoIosAddCircleOutline.svelte'
    import { petugas } from '$lib/pelayanan';

    export let clicked = writable(false);

    let extendHistory = writable(null);

    let button2rotation = tweened(0, {
        // easing:quintInOut,
        duration:150
    })

    $:{
        if ($extendHistory === true) {
            button2rotation.set(180)
        } else {
            button2rotation.set(0)
            setTimeout(() => {
                extendHistory.set(null)
            }, 450);
        }
    }

</script>

{#if $clicked === false}

    <div in:fly={{ x: 200, duration: 300 }} on:click={() => clicked.set(!$clicked)} class="content-data-list">
        <span class="table-list table-num"> {idx + 1} </span>
        <span class="table-list">{dataList?.nama_wp}</span>
        <span class="table-list">{toNPWP(dataList?.npwp)}</span>
        <span class="table-list">{limitchar(dataList?.kepentingan) }</span>
        <span class="table-list">{limitchar((dataList?.history?.length > 0) ? dataList?.history?.slice(-1)[0].update : "no solution yet!") }</span>
        <span class="table-list table-date">{toLocale(dataList?.history.slice(-1)[0]?.time, 2)}</span>
    </div>

{:else}

    <div class="content-data-list-spread flex-col justify-content align-center" in:fly={{ x: 200, duration: 300, delay:200 }}  >
    <div class="inner-wrapper w-full">
            <div class="table-list-header flex flex-between w-full">
                <div class="group-1 flex">
                    <span class="table-list table-num bold">{idx + 1}. {dataList?.nama_wp} ({toNPWP(dataList?.npwp)})</span>
                </div>
                <span class="back-arrow flex justify-center align-center" title="switch to normal view" on:click={() => clicked.set(!$clicked)}><TiArrowMinimise /></span>
            </div>
            <div class="table-list-content">
                <div class="list-content-1">
                    <span class="table-list-spread flex-col">
                        <p class="spread-icon bold">Kategori</p>
                        {dataList?.kategori}
                    </span>
                    <span class="table-list-spread flex-col">
                        <p class="spread-icon bold">KLU</p>
                        {dataList?.klu }
                    </span>
                    <span class="table-list-spread flex-col">
                        <p class="spread-icon bold">Alamat</p>
                        {dataList?.alamat }
                    </span>
                    <span class="table-list-spread flex-col">
                        <p class="spread-icon bold">NIK</p>
                        {dataList?.nik }
                    </span>
                
                    <span class="table-list-spread flex-col">
                        <p class="spread-icon bold">Nomor Handphone</p>
                        {dataList?.nohp }
                    </span>
                    <span class="table-list-spread flex-col">
                        <p class="spread-icon bold">Email</p>
                        {dataList?.email }
                    </span>
                </div>
                <div class="list-content-2">
                    <span class="table-list-spread flex-col">
                        <p class="spread-icon bold">di-input oleh {dataList?.pic} ({dataList?.nip_pic})</p>
                        {toLocale(dataList?.history[0]?.time,2,1)}
                    </span>
                    <span class="table-list-spread flex-col">
                        <p class="spread-icon bold">Kepentingan</p>
                        {dataList?.kepentingan }
                    </span>
                    <span class="table-list-spread flex-col">
                        <div class="spread-icon bold flex align-center">Penyelesaian 
                           
                            {#if dataList?.history?.length > 1 }
                            <div title="Lihat detail histori penyelesaian" on:click={() => extendHistory.set(!$extendHistory)} class="button-2 flex justify-center align-center">
                                <span class="iconx" style="--buttonRotation: {$button2rotation}deg"><GiBackwardTime/></span>
                            </div> 
                           {/if}

                            <div title="tambah histori penyelesaian" on:click={() => console.log('add new history records!')} class="button-2 flex justify-center align-center">
                                <span class="iconx" style="--buttonRotation: {$button2rotation}deg"><IoIosAddCircleOutline/></span>
                            </div> 
                        </div>
                           
                           
                            <!-- last records -->
                            {#if dataList?.history?.length > 0}
                                <div class="rec-wrapper fex-col w-full">
                                    <div class="last-rec">{toLocale(dataList?.history?.slice(-1)[0].time,3,1)} </div>
                                    <span class="timeline-dot timeline-recent"></span>
                                    <div title={$petugas[$petugas.findIndex(x => x.nip === dataList?.history?.slice(-1)[0]?.nip_pic)]?.nama || 'Data not found'}>
                                            <!-- // $petugas.findIndex(x => x.nip === dataList?.history?.slice(-1)[0].) -->
                                            [{dataList?.history?.slice(-1)[0]?.nip_pic || 'Data Not Found'}]
                                            {dataList?.history?.slice(-1)[0]?.update || 'Data Not Found'}
                                        
                                    </div>
                                </div>
                            {:else}
                                Belum ada data penyelesaian
                            {/if}
                            <!-- previous records if exist -->
                                <div class="prev-records  {$extendHistory ? "extended" : $extendHistory === false ? 'shrink' : null}  w-full">
                                    {#each dataList?.history?.slice(0,dataList?.history.length - 1) as list, idx}
                                    <div class="rec-wrapper fex-col w-full">
                                        <div class="line-separator"></div>
                                        <div class="last-rec"><span class="timeline-dot"></span>{toLocale(list?.time,2,1)}</div>
                                        <div title={$petugas[$petugas.findIndex(x => x.nip === list?.nip_pic)]?.nama || 'Data Not Found'}>
                                            [{$petugas[$petugas.findIndex(x => x.nip === list?.nip_pic)]?.nip  || 'Data Not Found'}]
                                            {list?.update || 'Data Not Found'}
                                        </div>
                                    </div>
                                    {/each}
                                </div>
                    </span>
                </div>
            </div>
    </div>
    </div>
{/if}

<style>
.prev-records{
    color: var(--grey-not-so-dark);
    overflow-x: visible;
    overflow-y: clip;
    max-height: 0px;
    transition: height 0.5s;
}

.extended {
    animation: extend forwards 2s;
}
.shrink {
    animation: shrink forwards 0.50s;
}


.spread-icon {
    font-size: 0.85rem;
}

.rec-wrapper{
    position: relative;
}

.rec-wrapper::after{
    position: absolute;
    content: '';
    width: 0.5px;
    height: 100%;
    background-color: var(--grey-not-so-dark);
    left: -15px;
    top: 0px;
}

.last-rec{
    position: relative;
    /* color: var(--blue-active); */
    text-decoration: underline;
    width: 100%;
}

.timeline-dot {
    position: absolute;
    content: '';
    background-color: var(--grey-not-so-dark);
    width: 11px;
    height: 11px;
    left: -20px;
    bottom: 4px;
    border-radius: 50%;
}

.timeline-recent {
    bottom: 20px;
}

.line-separator{
    width: 100%;
    height: 25px;
    /* background-color: cyan; */
    position: relative;
}

.line-separator::after{
    position: absolute;
    content: '';
    width: 0.5px;
    height: 25px;
    background-color: var(--grey-not-so-dark);
    left: -15px;
}

.content-data-list-spread {
    color : var(--grey-dark);
}
.table-list-spread{
    color: inherit;
    margin: 10px 0;
}
.table-list-content{
    color: inherit;
    display: grid;
    grid-template-columns: 50% 50%;

}

.iconx{
    transform:rotate(var(--buttonRotation));
    transition: background-color 0.5s ease-in-out,
                color 0.5s ease-in-out,
    ;
    width: 20px;
    height: 20px;
}
/* 
.list-content-1{
    margin-top: 10px;
} */

.back-arrow {
    color: inherit;
    width: 1.5rem;
    transition: all 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 50%;
}

.button-2 {
    color: inherit;
    transition: background-color 0.25s ease-in-out;
    border-radius: 5px;
    /* border: 0.5px solid var(--light-gray); */
    margin-left: 5px;
    padding: 1px;
}


.button-2:hover {
    color: var(--blue-active);
    background-color: var(--light-blue);
}

.button-2:active{

    transform: scale(0.95);
}

.back-arrow:hover {
    color: var(--blue-active);
    background-color: var(--light-blue);
    padding: 3px;
    border-radius: 50%;
}


.table-list-header{
        background-color: var(--secondary-color) ;
        padding: 5px 15px;
        border-radius: 10px;
    }
    .inner-wrapper{
        color : var(--grey-dark);
        padding: 1em 0px;
        /* margin: 10px; */
    }
    .content-data-list{
        cursor: pointer;
        width: 100%;
        font-size: 1rem;
        color: var(--dark-grey);
        margin-top: 1em;
        display: grid;
        padding: 10px 0;
        border-radius: 10px;
        grid-template-columns: 6% 15% 18% 21% 23% 15%;
        gap: 3px;
        transition: all 0.15s ease-in-out;
    }

    .content-data-list-spread{
        cursor: pointer;
        width: 100%;
        font-size: 1rem;
        color: var(--dark-grey);
        padding: 5px;
        border-radius: 10px;
        gap: 3px;
        transition: all 0.15s ease-in-out;
    }

    .content-data-list:active, .content-data-list:hover {
        background-color: var(--secondary-color);
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
  
</style>