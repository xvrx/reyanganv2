<script>
    import FaExclamationTriangle from 'svelte-icons/fa/FaExclamationTriangle.svelte'
    import { writable } from 'svelte/store';
    import Button from './button.svelte';
    export let title="unnamed Button";
    export let desc="unnamed Button";
    export let icon = false;
    export let iconsize = 20;

    // export let inputtype = 0
    
    export let color_backgr = "var(--white)"
    export let color_font = "var(--secondary-color-grey-menu)"
    
    export let color_font_hover = "var(--white)"
    export let color_backgr_hover = "var(--blue-active)"
    
    
    export let height = "2.70em"
    export let clicked = writable(false)
    export let lists = ["This", "Slot", "is", "crazy"]
    export let opt_all = false

    export let context_top = 'auto'
    export let context_right = 'auto'
    export let context_left = 'auto'
    export let context_bottom = 'auto'
    export let context_minWidth = "130px";
    export let context_normalWidth = "calc(100% + 100px)";
    export let context_maxWidth = "100%";
    
    export let listOnClick = (x) => {console.log(x)}
    export let listOnClick_all = () => {console.log("select all")}
    </script>


    {#if $clicked}
    <div on:click={() => clicked.set(false)} class="overlay"></div>
    {/if}

    <div class="button-container rlv">
        <div on:blur={() => clicked.set(false)} on:click={() => clicked.set(!$clicked)}  style="--height:{height};--color_backgr: {color_backgr}; --color_font:{color_font}; --color_font_hover:{color_font_hover}; --color_backgr_hover:{color_backgr_hover}  " title={desc} class="button flex align-center {$clicked ? 'selected' : ''} justify-center">
            {#if icon}
            <span style="--icon-size: {iconsize}px" class="logo-container flex justify-center align-center ">
                <slot name="icon"><FaExclamationTriangle/></slot>
            </span>
            {/if}
            <button>{title}</button>
        </div>
        
        {#if $clicked }
                <div style="--icon-size: {iconsize}px;
                            --top: {context_top};
                            --bottom: {context_bottom};
                            --left: {context_left};
                            --right: {context_right};
                            --minWidth : {context_minWidth};
                            --normalWidth:{context_normalWidth};
                            --maxWidth: {context_maxWidth};" 
                            class="drop-down">
                    {#if opt_all}
                    <div on:click={listOnClick_all} class="drop-down-list flex">
                        <div class="iconx">
                            <slot name="list-icon"/>
                        </div>
                        <div class="label">
                            All
                        </div>
                    </div>
                   {/if}
                   {#each lists as list,idx}
                    <div on:click={listOnClick(list)} class="drop-down-list flex">
                        <div class="iconx">
                            <slot name="list-icon"/>
                        </div>
                        <div class="label">
                            {list}
                        </div>
                    </div>
                   {/each}
                </div>
        {/if}
    </div>

    <style>
        
        @keyframes extend{
            0% { max-height: 0px;}
            25% { max-height: 300px;}
            75% { max-height: 800px;}
            100% { max-height: fit-content;}
        }

        .overlay{
            z-index: 1;
            position: absolute;
            background-color: rgba(0,0,0,0);
            top:0px;
            left:0px;
            width: 100%;
            min-height: 100vh;
            height: 100%;
        }

        .drop-down{
            position: relative;
            animation : extend 500ms forwards;
            overflow: hidden;
            transform-origin: bottom;
            z-index: 2;
            padding: 10px 0;
            position: absolute;
            top: var(--top);
            bottom: var(--bottom);
            left: var(--left);
            right: var(--right);
            min-width: var(--minWidth);
            width: var(--normalWidth);
            max-width: var(--maxWidth);
            height: fit-content;
            background-color: var(--white);
            /* border: 2px solid var(--blue-active); */
            border-radius: 5px;
            filter: drop-shadow(-1px 0px 8px rgba(0,0,0,0.5));
        }

        .drop-down-list::after {
        
            position: absolute;
            content: '';
            width: 100%;
            height: 1px;
            background: rgb(255,255,255);
            background: linear-gradient(90deg, var(--grey-not-so-dark) 32%, var(--grey-not-so-dark) 32%, rgba(255,255,255,1) 100%);
            bottom: 0px;
            left: 10px;
        }

        .drop-down-list {
            user-select: none;
            color: var(--grey-dark);
            font-size: 1rem;
            position: relative;
            cursor: pointer;
            padding: 5px 20px;
            transition: color 200ms ease-in-out;
        }

        .drop-down-list:last-child::after {
            opacity: 0;
        }

        .drop-down-list:hover {
            background-color: var(--blue-active);
            color: var(--white);
        }

        .iconx {
            transform: rotate(var(--buttonRotation));
            transition: background-color 0.5s ease-in-out,
                        color 76ms ease-in-out,
                        width 100ms ease-in-out,
                        transform 150ms ease-in;
            /* width: var(--icon-size); */
            width: 0px;
            height: var(--icon-size);
            margin-right: 10px;
            opacity: 0;
        }


        .drop-down-list:hover > .iconx {
            opacity: 1;
            width: var(--icon-size);
            transform: rotate(-44deg);
        }

        .drop-down-list:hover::after {
            opacity: 0;
        }

 
        .button {
            z-index: 2;
            position: relative;
            background-color: var(--color_backgr);
            transition: background-color 0.15s ease-in-out, color 0.25s ease-in-out,width 0.25s ease-in-out, filter 0.15s;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 5px;
            margin: 0 5px;
            color: var(--color_font);
            /* min-width: var(--boxwidth); */
            min-width: var(--boxwidth);
            /* width: fit-content; */
            border: 1px solid var(--color_font);
            padding:1px 10px;
            height: var(--height);
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

        .selected{
            color: var(--color_font_hover);
            background-color: var(--color_backgr_hover);
            border: 1px solid rgba(red, green, blue, 0);
        }
    
        .button:active {
            filter: brightness(0.75);
            transform: scale(0.97);
        }
    
        .logo-container{
            margin-right: 3px;
            color: inherit;
            width : var(--icon-size);
        }
    
    </style>