<script>
    export let condition
    export let overlayClick = () => {}
    export let modalTitle = "Untitled Modal"
    // SVELTE MOTION
    import { fade, fly } from 'svelte/transition';
    import TiArrowMinimise from 'svelte-icons/ti/TiArrowMinimise.svelte'
  import { info_open_modal_add } from '../lib/loadContext';
</script>

{#if condition}
    <div class="modal-overlay" on:mousedown|self|stopPropagation={overlayClick} in:fade={{ duration: 150, delay:100 }} out:fade={{ duration: 150, delay:300 }}>
        <div in:fly={{ y: -500, duration: 300, delay:350 }} out:fly={{ y: -500, duration: 300}} class="outer-container">
            <div class="inner-container">
                <div class="modal-header flex w-full flex-between align-start">
                    <div class="modal-title flex">
                        <span class="icon-wrapper flex flex-center align-center irt">
                            <slot name="title-logo">
                                <TiArrowMinimise/>
                            </slot>
                        </span>
                        <div class="modal-title-wrapper">
                            {modalTitle}
                        </div>
                    </div>
                    <div on:click={()=>info_open_modal_add.set(false)} class="modal-opts-buttons">
                        <span class="icon-wrapper flex flex-center align-center irt">
                            <TiArrowMinimise/>
                        </span>
                    </div>
                </div>
                <slot name='content'>
                    <div class="modal-no-content">modal content doesn't exist</div>
                </slot>
            </div>
        </div>
    </div>
{/if}



<style>
.modal-title-wrapper{
    margin-left: 10px;
}
.icon-wrapper{   
    display: flex;
    width: 25px;
    padding: 1px;
}

.modal-opts-buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 150ms ease-in;
}
.modal-opts-buttons:hover{
    color: var(--blue-active);
    background-color: var(--light-blue);
    border-radius: 5px;
}

.modal-opts-buttons:active{
    scale: 0.98;
    filter: brightness(0.95);
}

.modal-header {
    font-weight: bold;
    color: var(--grey-dark);
    height: 38px;
    margin-bottom: 10px;
}

    .modal-overlay {
        position: fixed;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100vh;
        top: 0px;
        left: 0px;
        background-color: rgba(0,0,0,0.5);
        z-index: 2;
        opacity: 100;
    }

    .outer-container {
        border-radius: 10px;
        margin-top: calc(1% + 50px);
        width: var(--width);
        min-width: var(--minwidth);
        max-width: var(--maxwidth);
        height: fit-content;
        min-height: var(--minheight);
        max-height: var(--maxheight);
        background-color: var(--white);
    }

    .inner-container {
        padding: 1px;
        z-index: 3;
        margin: 20px 20px 20px 20px;
        box-sizing: border-box;
        
    }

</style>