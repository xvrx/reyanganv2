<script>
    export let dataList;
    import { fade, fly } from 'svelte/transition';
    import { spring, tweened } from "svelte/motion";
    import { toNPWP, limitchar, toLocale } from "$lib/utils.js";
    import { writable } from "svelte/store";


    import Button_2 from '$components/button_2.svelte';
    
    // ICONS
    import TiArrowMinimise from 'svelte-icons/ti/TiArrowMinimise.svelte'
    import GiBackwardTime from 'svelte-icons/gi/GiBackwardTime.svelte'
    import IoIosAddCircleOutline from 'svelte-icons/io/IoIosAddCircleOutline.svelte'
    import GiSpeaker from 'svelte-icons/gi/GiSpeaker.svelte'
    import MdAddBox from 'svelte-icons/md/MdAddBox.svelte'
    import MdAddCircleOutline from 'svelte-icons/md/MdAddCircleOutline.svelte'
    
    import { petugas } from '$lib/pelayanan';



    let button2rotation = tweened(0, {
        // easing:quintInOut,
        duration:150
    })


</script>

    <div in:fly={{ x: 200, duration: 300 }} class="content-data-list">
        <span class="table-list table-num"> {dataList?.nomor}{dataList?.kode} </span>
        <span class="table-list">{dataList?.nama}</span>
        <span class="table-list">
            {#if dataList?.npwp.length > 1 || dataList?.nik.length > 1}
            NPWP: {toNPWP(dataList?.npwp)} <br> NIK: {dataList?.nik}
            {/if}
        </span>
        <span class="table-list">{dataList?.kendala }</span>
        <span class="table-list">{dataList?.called ? `dipanggil ke loket ${dataList?.assignedTo}` : 'belum dipanggil'}</span>
        <span class="table-list table-date">
          <span class="iconx">
            <Button_2 title="Panggil Antrian" color_backgr="var(--primary-color)" color_font="var(--white)" color_backgr_hover="var(--primary-color)">
                <svelte:fragment slot="icon">
                    <GiSpeaker/>
                </svelte:fragment>
            </Button_2>
          </span>
          <span class="iconx">
            <Button_2 title="Tambah Data Pelayanan" color_backgr="var(--primary-color)" color_font="var(--white)" color_backgr_hover="var(--primary-color)">
                <svelte:fragment slot="icon">
                    <MdAddCircleOutline/>
                </svelte:fragment>
            </Button_2>
          </span>
        </span>
    </div>


<style>
    

@keyframes extend{
    0% { max-height: 0px;}
    25% { max-height: 300px;}
    75% { max-height: 800px;}
    100% { max-height: fit-content;}
}

@keyframes shrink {
    0% { max-height: fit-content;}
    25% { max-height:500px;}
    75% { max-height: 200px;}
    100% { max-height: 0px;}
}


.iconx{
    transform:rotate(var(--buttonRotation));
    transition: background-color 0.5s ease-in-out,
                color 0.5s ease-in-out;
    width: fit-content;
    margin: 0px 5px;
}
/* 
.list-content-1{
    margin-top: 10px;
} */


.content-data-list{
    width: 100%;
    font-size: 1rem;
    color: var(--dark-grey);
    margin-top: 1em;
    display: grid;
    padding: 10px 0;
    border-radius: 10px;
    grid-template-columns: 6% 17% 25% 25% 15% 11%;
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

    @media only screen and (max-width: 1200px) {
    .table-date{
        flex-direction: column;
        align-items: center;
    }
}
</style>