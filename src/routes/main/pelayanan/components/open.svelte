
<script>
    // @ts-nocheck
    // @ts-ignore-all
    export let data;
    import {get, writable} from 'svelte/store'
    
    // state
    import {info_open_modal_add} from '$lib/loadContext'
    import { mainData,
        mainMenu, 
        totalRec,petugas, prevMenu,
        modal_kepentingan_context,
        petugas_context, modal_penyelesaian_status,
        petugas_value, 
        uploadFileContainer,addNewContainer,
        searchBox, modal_kategori} from "$lib/pelayanan";
    let petugasList = $petugas.map(x => x?.nama)
    
    // SVELTE MOTION
    import { fade, fly } from 'svelte/transition';
    import { spring, tweened } from "svelte/motion";
    import { cubicInOut, backInOut, quintInOut } from "svelte/easing";
    
    // UTILS
    import { toNPWP, limitchar } from "$lib/utils.js";
    
    // svelte icons
    import IoMdCodeDownload from 'svelte-icons/io/IoMdCodeDownload.svelte'
    import Selectx from "$components/selectx.svelte";
    import MdPlaylistAdd from 'svelte-icons/md/MdPlaylistAdd.svelte'
    import GiPerson from 'svelte-icons/gi/GiPerson.svelte'
    import GiPiercedBody from 'svelte-icons/gi/GiPiercedBody.svelte'
    import GiSupersonicArrow from 'svelte-icons/gi/GiSupersonicArrow.svelte'
    
    
    // COMPONENTS
    import InputBox from "$components/InputBox.svelte";
    import Button from '$components/button.svelte';
    import LoadableIcon from '$components/loadable_icon.svelte';
    import DataBar from './open/data_bar.svelte'
    import InputBox2 from '$components/InputBox2.svelte';
    import TiArrowMinimise from 'svelte-icons/ti/TiArrowMinimise.svelte'
    import MdPlaylistAddCheck from 'svelte-icons/md/MdPlaylistAddCheck.svelte'
    import Slide from "$components/Slide.svelte"

    // MODAL ICONS
    import MdLibraryBooks from 'svelte-icons/md/MdLibraryBooks.svelte'
    // tambah data
    import GiBlackBook from 'svelte-icons/gi/GiBlackBook.svelte'
    // petugas
    import GiBowman from 'svelte-icons/gi/GiBowman.svelte'
    // tags
    import MdBookmark from 'svelte-icons/md/MdBookmark.svelte'
    import MdBookmarkBorder from 'svelte-icons/md/MdBookmarkBorder.svelte'
    // deadlines
    import FaSkullCrossbones from 'svelte-icons/fa/FaSkullCrossbones.svelte'
    // upload
    import MdAddAPhoto from 'svelte-icons/md/MdAddAPhoto.svelte'
    import IoMdPhotos from 'svelte-icons/io/IoMdPhotos.svelte'
    // KPDL
    import GiRadarSweep from 'svelte-icons/gi/GiRadarSweep.svelte'
    // add to repo
    import GiBrain from 'svelte-icons/gi/GiBrain.svelte'

    import GiCogLock from 'svelte-icons/gi/GiCogLock.svelte'
    import GiPhone from 'svelte-icons/gi/GiPhone.svelte'
    import IoIosPerson from 'svelte-icons/io/IoIosPerson.svelte'

    // import icons
    // resolved
    
    // store
    import Lazy from '$lib/lazy.svelte';
    import { baseUrl } from "$lib/store.js";
    import Modal from '$components/Modal.svelte';
  import Button_2 from '$components/button_2.svelte';
  import Switch from '$components/Switch.svelte';

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
        }

}

    export let { url, selectObjects } = data
 
    // console.log(window.location.hostname)
    // console.log('http://'+get(baseUrl)+':2000')
    // console.log($mainData)


    function petugasOnChange(x) {
        console.log('petugas active :', x)
        petugas_value.set(x)
        petugas_context.set(false)
    }

    function searchOnClick () {
        console.log('value:', $searchBox)
    }

    function tambahDataOpen () {
        info_open_modal_add.set(true)
    }
    

    let tagBox = ["billing","efiling","efaktur",""]


    function uploadFile(e) {
        const file = Object.values(e.target?.files)
        file.forEach(x => {
            if (!x.size) {} else {
            $uploadFileContainer = [...$uploadFileContainer, x]
            }
        })
    }

    function discardUpload(index) {
        console.log(index)
        const a = $uploadFileContainer
        a.splice(index,1)
        uploadFileContainer.set(a)
    }


    // paste to clipboard
    // window.addEventListener('paste', ... or
    document.onpaste = function (event) {
    // use event.originalEvent.clipboard for newer chrome versions
    var items = (event.clipboardData  || event.originalEvent.clipboardData).items;
    console.log(JSON.stringify(items)); // will give you the mime types
    // find pasted image among pasted items
    var blob = null;
    for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") === 0) {
        blob = items[i].getAsFile();
        }
    }
    // load image if there is a pasted image
    if (blob !== null) {
        var reader = new FileReader();
        reader.onload = function(event) {
        console.log(event.target.result); // data url!
        };
        reader.readAsDataURL(blob);
    }
    }

    
    </script>
  
    
    <div in:fly={{ x: $prevMenu === 0 ? 200 : -200, duration: 300, delay:300 }}  class="pelayanan-secondary-tabs">
        <div class="options-container">
            <div class="inner-opts-container flex flex-between align-center">

                <div class="opts-searchbox">
                    <InputBox onClick={searchOnClick} onChange={e => searchBox.set(e.target.value)} placeholder="cari data pelayanan"/>
                </div>

                <div class="opts-etc flex justify-center align-center">
                    <div class="button-add-new-wrapper">
                    <Button 
                        onClick = {tambahDataOpen}
                        color_font_hover="var(--red-active)"
                        color_font="var(--red-active)"
                        color_backgr_hover = "rgba(0,0,0,0)"
                        height="32px" 
                        title="Data Baru" 
                        desc="tambah data pelayanan baru"
                        icon iconsize=20>
                        <svelte:fragment slot=icon>
                            <MdPlaylistAdd />
                        </svelte:fragment>
                    </Button>
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

    <div in:fly={{ x: $prevMenu === 0 ? 200 : -200, duration: 300, delay:300 }}  class="pelayanan-data-lists">
        <div class="table-headers">
            <span class="table-head table-num">No</span>
            <span class="table-head">Nama</span>
            <span class="table-head">NPWP</span>
            <span class="table-head">Kepentingan</span>
            <span class="table-head">Penyelesaian</span>
            <span class="table-head table-date">Tanggal</span>
        </div>
        <div class="data-list-wrapper">
            <div class="data-list-inner-wrapper">

                {#if $mainData.length > 0} 
                    {#each $mainData as dataList, idx}
                    <DataBar dataList={dataList} idx={idx}/>
                    {/each}
                {:else}
                <div class="no-data-found flex w-full justify-center align-center">No Data Found!</div>
                {/if}

                {#if $totalRec > $mainData.length}
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

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <Modal --width=754px modalTitle="Input Form" overlayClick={() => {info_open_modal_add.set(false); console.log('closed')}} condition={$info_open_modal_add}>
        <svelte:fragment slot="title-logo">
            <MdLibraryBooks/>
        </svelte:fragment>
        <svelte:fragment slot="content">

            <div on:click={() => console.log($addNewContainer)} class="modal-subheader flex w-full flex-between align-center">
                <div class="modal-title flex">
                    <span class="icon-wrapper flex flex-center align-center irt">
                        <IoIosPerson/>
                    </span>
                    <div class="modal-title-wrapper">
                        Identitas
                    </div>
                </div>
            </div>

            <div class="kategori w-full flex">
                <Slide categories={modal_kategori} bind:value={$addNewContainer.id_kategori}/>
            </div>

            <div class="outer-grid">
                    <div class="input-wrapper">
                        <InputBox2 bind:value={$addNewContainer.id_npwp} text="NPWP" placeholder="NPWP 15 Digit"/>
                    </div>
                    <div class="input-wrapper">
                        <InputBox2 bind:value={$addNewContainer.id_nama}  text="Nama" placeholder="Nama"/>
                    </div>
                    <div class="input-wrapper">
                        <InputBox2 bind:value={$addNewContainer.id_nik} text="NIK" placeholder="NIK 16 Digit"/>
                    </div>
            </div>

            <div class="outer-grid grid_2">
                <div class="input-wrapper">
                    <InputBox2 bind:value={$addNewContainer.id_klu} text="KLU" placeholder="Kode Usaha"/>
                </div>
                <div class="input-wrapper">
                    <InputBox2 bind:value={$addNewContainer.id_alamat} text="Alamat" placeholder="Alamat"/>
                </div>
            </div>

            <div class="modal-subheader flex w-full flex-between align-center">
                <div class="modal-title flex">
                    <span class="icon-wrapper flex flex-center align-center irt">
                        <GiPhone/>
                    </span>
                    <div class="modal-title-wrapper">
                        Kontak
                    </div>
                </div>
            </div>

            <div class="outer-grid">
                <div class="input-wrapper">
                    <InputBox2 bind:value={$addNewContainer.id_nohp} text="No. HP" placeholder="No. HP"/>
                </div>
                <div class="input-wrapper">
                    <InputBox2 bind:value={$addNewContainer.id_email} text="Email" placeholder="Alamat Email"/>
                </div>
                <div class="input-wrapper">
                    <InputBox2 bind:value={$addNewContainer.id_kontak_lain} text="Tiktok" placeholder="@akun_tiktok"/>
                </div>
            </div>

            <div class="modal-subheader flex w-full align-center flex-between">
                <div class="modal-title flex">
                    <span class="icon-wrapper flex flex-center align-center irt">
                        <GiCogLock/>
                    </span>
                    <div class="modal-title-wrapper">
                        Pelayanan
                    </div>
                </div>
                <Switch scaleSize="0.8" revert slideStatus={modal_penyelesaian_status} fontSize="13" label={$modal_penyelesaian_status ? "pelayanan telah selesai (resolved)" : 'belum ada solusi/belum diselesaikan secara tuntas (open)'}/>
            </div>

            
            <!-- <div class="tag-box w-full">

            </div> -->

            <div class="outer-grid grid-pelayanan rlv">
                <div class="input-wrapper">
                    <InputBox2 bind:value={$addNewContainer.pelayanan_kepentingan}  minWidth="100px" text="Kepentingan" placeholder="Kepentingan / kendala yang dikelola dalam kegiatan pelayanan"/>
                </div>

                <div class="button-add">
                    <Button 
                    color_font = "var(--blue-active)"
                    color_font_hover = "var(--blue-active)" 
                    color_backgr_hover = "var(--white)"
                    displayButton={false} height=32px icon
                    desc="tambahkan kepentingan pelayanan"
                    >
                    <svelte:fragment slot=icon ><MdPlaylistAdd/></svelte:fragment>
                    </Button>
                </div>

                <div class="button-view">
                    <Button 
                    color_font = "var(--white)"
                    color_backgr = "var(--blue-active)"    
                    displayButton={false} height=32px icon
                    desc="lihat daftar kepentingan pelayanan" 
                     >
                        <svelte:fragment slot=icon ><MdPlaylistAddCheck/></svelte:fragment>
                    </Button>
                </div>

                {#if $modal_kepentingan_context}

                <div in:fly={{ y: -500, duration: 300, delay:350 }} class="suggestion-box abs">
                    
                </div>

                {/if}
            </div>

            <div class="outer-grid grid-pelayanan grid_upload rlv">
                <div class="input-wrapper">
                    <InputBox2 bind:value={$addNewContainer.pelayanan_desc} minWidth="100px" text="Penyelesaian" placeholder="Penyelesaian kegiatan pelayanan"/>
                </div>

                
                {#if $modal_kepentingan_context}

                    <div in:fly={{ y: -500, duration: 300, delay:350 }} class="suggestion-box abs">
                        
                    </div>

                {/if}
            </div>

            <div 
          
            class="upload flex">
                <div class="button-add">
                    <label for="image-upload">
                        <Button 
                        color_font = "var(--blue-active)"
                        desc="add new files"
                        color_font_hover = "var(--blue-active)" 
                        color_backgr_hover = "var(--white)"
                        displayButton={false} height=32px icon>
                        <svelte:fragment slot=icon ><MdAddAPhoto/></svelte:fragment>
                        </Button>
                    </label>
                <input multiple="multiple" id="image-upload" on:change={(e)=> uploadFile(e)} type="file" class="upload-file">
                </div>
                {#if $uploadFileContainer.length > 0}
                    {#each $uploadFileContainer as file,i}
                        <div class="uploaded-container flex">
                            <div on:click={() =>console.log(file)} class="uploaded flex align-center">
                                <div class="icon-wrapper-upload flex justify-center align-center"><IoMdPhotos/></div>
                                <div class="uploaded-description">{`${limitchar(file?.name,35) || "Name not found!"} (${file?.size} bytes | ${file?.type})`}  </div>
                            </div>
                            <span on:click={()=>discardUpload(i)} class="discard-upload" title="batalkan upload file '{limitchar(file?.name,35)}'">x</span>
                        </div>
                    {/each}
                {:else}
                <label for="image-upload" class="warning-1">
                    upload file pendukung (jika ada)
                </label>
                {/if}
            </div>

        </svelte:fragment>
    </Modal>


<style>
.warning-1{
    font-size: 0.85rem;
    user-select: none;
    cursor: pointer;
    border-radius: 5px;
    /* background-color: var(--blue-active); */
    color: var(--blue-active);
    width: fit-content;
    padding: 5px;  
    border: 50px;
    height: 32px;
}
.uploaded {
    user-select: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: var(--blue-active);
    border: 50px;
    font-size: 0.8rem;
    height: 32px;
    padding: 0 10px;
    overflow: clip;
    color: var(--white);
}

.icon-wrapper-upload{
    padding: 2px;
    margin-right:3px;
    color: var(--white);
    width: 25px;
}

.uploaded-container {
    margin-right: 10px;
}
.discard-upload{
    text-align: center;
    padding: 1px ;
    margin-left: 5px;
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    color: var(--red-active);
    font-weight: bold;
    height: fit-content;
    width: 27px;
    transition: background-color ease-in 0.15s;
    border-radius: 50%;
}

.uploaded-description{
    white-space: nowrap;
    display: flex;
    align-items: center;
    height: 32px;
}

.discard-upload:active{
    scale: 0.9;
}
.discard-upload:hover{
    /* color: var(--red-active); */
    background-color: var(--light-red);
    
}
#image-upload {
    display: none;
}
.suggestion-box{
    background-color: var(--white);
    width: 100%;
    height: 50px;
    top: 40px;
    border-radius: 10px;
    filter: drop-shadow(-1px 4px 8px rgba(0,0,0,0.5));
}


.upload{
    overflow-y: hidden;
    overflow-x: auto;
    height: 48px;
    margin-bottom: 10px;
}
.upload::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.35);
    border-radius: 10px;
    position: absolute;
}
.upload::-webkit-scrollbar-thumb:active{
    background: rgba(0,0,0,0.55);
}
.upload::-webkit-scrollbar {
    width: 5px;
    height: 10px;
    position: absolute;
    right: -10em;
    border-radius: 0px;
  }


.outer-grid {
    display: grid;
    /* overflow: clip; */
    gap: 10px;
    grid-template-columns: 33.3% 33.2% 30%;
    /* grid-template-columns: 50% 50%; */
    margin-bottom: 10px;
}
.grid-pelayanan {
    grid-template-columns: 84% 7% 9%;
}

.grid_2{
    grid-template-columns: 33.3% 66%;
}

.grid_upload{
    grid-template-columns: 100% 0% 0%;
}



.input-wrapper {
    /* width: 150px; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 10px 10px 0 0; */
}

.kategori {
    margin-bottom: 10px;
}


.modal-title-wrapper{
    margin-left: 5px;
    margin-right: 10px;
}

.modal-subheader {
    font-size: 1rem;
    color: var(--grey-dark);
    height: 25px;
    margin-top: 20px;
    margin-bottom: 10px;
}

.icon-wrapper{
    color: var(--secondary-color-grey-menu);
    display: flex;
    width: 25px;
    padding: 1px;
}



.no-data-found{
    color: inherit;
    margin: 10px 0;
}

.pelayanan-data-lists{
 padding-top: 5px;
 flex-grow: 1;
 overflow: clip;
}


.pelayanan-secondary-tabs{
    height: 47px;
}

.data-list-wrapper{
    width: calc(100% + 0.45rem);
    flex-grow: 1;
    overflow-y: auto;
    /* overflow-x: hidden; */
    display: flex;
    flex-direction: column;
}

.data-list-inner-wrapper{
    flex-grow: 1;
    width: 100%;
    overflow-y: auto;
}


.table-headers {
    width: 100%;
    min-height: 10px ;
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
    /* max-height: 40px; */
    padding-top: 5px;
}



</style>