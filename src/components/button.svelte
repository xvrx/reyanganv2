<script>
import FaExclamationTriangle from 'svelte-icons/fa/FaExclamationTriangle.svelte'
export let title="unnamed Button";
export let desc="unnamed Button";
export let onClick = () => {};
export let icon = false;
export let iconsize = 25;

export let color_backgr = "var(--white)"
export let color_font = "var(--secondary-color-grey-menu)"

export let color_font_hover = "var(--white)"
export let color_backgr_hover = "var(--blue-active)"
export let displayButton = true
export let height = "2.70em"

</script>

<div on:click={onClick}  style="--height:{height};--color_backgr: {color_backgr}; --color_font:{color_font}; --color_font_hover:{color_font_hover}; --color_backgr_hover:{color_backgr_hover}  " title={desc} class="button flex align-center justify-center">
    {#if icon}
    <span style="--icon-size: {iconsize}px" class="logo-container flex justify-center align-center ">
        <slot name="icon"><FaExclamationTriangle/></slot>
    </span>
    {/if}
    {#if displayButton}
        <button class="button-0">{title}</button>
    {/if}
</div>

<style>
    .button{
        background-color: var(--color_backgr);
        transition: background-color 0.15s ease-in-out, color 0.25s ease-in-out,width 0.25s ease-in-out, filter 0.15s;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 5px;
        margin: 0 5px;
        color: var(--color_font);
        width: fit-content;
        border: 1px solid var(--color_font);
        padding:1px 10px;
        height: var(--height);
    }

    button {
        transition: width 0.25s ease-in-out;
        all:unset;
        /* background-color: black; */
    }

    .button-0{
        margin-left: 10px;
    }

    .button:hover {
        color: var(--color_font_hover);
        background-color: var(--color_backgr_hover);
        border: 1px solid rgba(red, green, blue, 0);
    }

    .button:active {
        filter: brightness(0.75);
        transform: scale(0.97);
    }

    .logo-container{
        
        color: inherit;
        width : var(--icon-size);
    }



    @media only screen and (max-width: 1200px) {
        button {
            width: 0px;
            scale: 0;
        }

        .button-0{
        margin-left: 0px;
    }

        .logo-container{
        margin-right: 0px;
    }


    }

</style>