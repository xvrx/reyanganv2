<script>
import FaExclamationTriangle from 'svelte-icons/fa/FaExclamationTriangle.svelte'
export let desc="";
export let title="";
export let onClick = () => {alert('no function is assigned to this button!')};
export let icon = true;
export let iconsize = 25;
export let width = "42.5px"
export let height = "auto"
export let color_backgr = "var(--white)"
export let color_font = "var(--secondary-color-grey-menu)"

export let color_font_hover = "var(--white)"
export let color_backgr_hover = "var(--blue-active)"

</script>

<div title={title} on:click={onClick} style="--cWidth:{width};--cHeight:{height};--color_backgr: {color_backgr}; --color_font:{color_font}; --color_font_hover:{color_font_hover}; --color_backgr_hover:{color_backgr_hover}  " class="button flex align-center justify-center">
    {#if icon}
    <span style="--icon-size: {iconsize}px" class="logo-container flex justify-center align-center ">
        <slot name="icon"><FaExclamationTriangle/></slot>
    </span>
    {/if}
    <button>{desc}</button>
</div>

<style>
    .button{
        background-color: var(--color_backgr);
        transition: background-color 0.15s ease-in-out, color 0.25s ease-in-out,width 0.25s ease-in-out;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 5px;
        padding: 3px;
        color: var(--color_font);
        width: 42.5px;
        border: 1px solid var(--color_font);
        height: 42.5px;
    }

    button {
        transition: width 0.25s ease-in-out;
        all:unset;
        /* background-color: black; */
    }

    .button:hover {
        color: var(--color_font_hover);
        background-color: var(--color_backgr_hover);
        border: 1px solid rgba(red, green, blue, 0);
    }

    .button:active {
        filter: brightness(0.85);
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

        .logo-container{
        margin-right: 0px;
    }


    }

</style>