<script>
// @ts-ignore
import FaExclamationTriangle from 'svelte-icons/fa/FaExclamationTriangle.svelte'
import { mainMenu } from '$lib/pelayanan';
import { spring, tweened } from "svelte/motion";

export let buttonTitle1 = "unnamed button";
export let buttonTitle2 = "unnamed button";
export let buttonTitle3 = "unnamed button";
export let num1 = 150;
export let num2 = 223;
export let num3 = 410;
export let onClick1 = () => alert('no function assigned to this button');
export let onClick2 = () => alert('no function assigned to this button');
export let onClick3 = () => alert('no function assigned to this button');

</script>

<div on:click={onClick1} class="button-wrapper {$mainMenu === 0 ? "active" : ''}">
    <span class=logo>
        <slot name=icon1> 
            <FaExclamationTriangle/>
        </slot>
    </span>
    <button >{buttonTitle1}</button>
    <span class="num-badge-0">{num1}</span>
</div>
<div  on:click={onClick2} class="button-wrapper {$mainMenu === 1 ? "active" : ''}">
    <span class=logo>
        <slot name=icon2> 
            <FaExclamationTriangle/>
        </slot>
    </span>
    <button >{buttonTitle2}</button>
    <span class="num-badge-1">{num2}</span>
</div>
<div  on:click={onClick3} class="button-wrapper {$mainMenu === 2 ? "active" : ''}">
    <span class=logo>
        <slot name=icon3> 
            <FaExclamationTriangle/>
        </slot>
    </span>
    <button >{buttonTitle3}</button>
    <span class="num-badge-2">{num3}</span>
</div>

<style>
    button  {
        all: unset;
        transition: all 0.25s ease-in-out;
        color: inherit;
        padding: 5px 5px;
        border-radius: 5px;
    }

    .logo {
        color: inherit;
        display: flex;
        align-items: center;
        width: 30px;
    }

    .num-badge-0 {
        left: 0;
        transition: all 0.25s ease-in-out;
        /* transform: translateY(-1px);
        background-color: var(--secondary-color-grey); */
        transform: translateY(var(--badge-transformY-0));
        background-color: var(--badge-backgr-0);
        top: -9px;
        font-size: small;
        padding: 3px 7px;
        border-radius: 3px;
    }
    .num-badge-1 {
        left: 0;
        transition: all 0.25s ease-in-out;
        /* transform: translateY(-1px);
        background-color: var(--secondary-color-grey); */
        transform: translateY(var(--badge-transformY-1));
        background-color: var(--badge-backgr-1);
        top: -9px;
        font-size: small;
        padding: 3px 7px;
        border-radius: 3px;
    }
    .num-badge-2 {
        transition: all 0.25s ease-in-out;
        left: 0;
        /* transform: translateY(-1px);
        background-color: var(--secondary-color-grey); */
        transform: translateY(var(--badge-transformY-2));
        background-color: var(--badge-backgr-2);
        top: -9px;
        font-size: small;
        padding: 3px 7px;
        border-radius: 3px;
    }


    .button-wrapper{
        user-select: none;
        transition: background-color 0.25s ease-in-out;
        transition: all 0.25s ease-in-out;
        margin-right: 10px;
        color: var(--grey-dark);
        cursor: pointer;
        display: flex;
        padding: 5px 10px;
        align-items: center;
        width: fit-content;
        height: 30px;
    }

    .active {
        color: var(--blue-active);
    }

   


    .button-wrapper:hover, button:hover {
        /* scale: ; */
        color: var(--blue-active);
    }

</style>

