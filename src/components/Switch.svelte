<script>
  import { writable } from "svelte/store";
  import { consoleSomeShit } from "../lib";

    // based on suggestions from:
    // Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/
    // On Designing and Building Toggle Switches by Sara Soueidan https://www.sarasoueidan.com/blog/toggle-switch-design/
    // and this example by Scott O'hara https://codepen.io/scottohara/pen/zLZwNv 


    export let label;
    export let fontSize = 16;
    export let slideStatus = writable(false);
    export let scaleSize = "1"
    export let revert = false

    let checked = $slideStatus;

	const uniqueID = Math.floor(Math.random() * 100)

    export function handleClick(event){
        const target = event.target

        const state = target.getAttribute('aria-checked')
        checked = state === 'true' ? false : true
        slideStatus.set(checked)
    }

</script>

<div class="s s--slider" style="font-size:{fontSize}px">
    {#if revert}
    <span id={`switch-${uniqueID}`} class="reverted">{label}</span>
    {/if}
    <button
        style="scale: {scaleSize}"
        role="switch"
        aria-checked={checked}
        aria-labelledby={`switch-${uniqueID}`}
        on:click={handleClick}>
    </button>
    {#if !revert}
    <span id={`switch-${uniqueID}`}>{label}</span>
    {/if}
</div>


<style>
    .reverted{
        margin-right: 5px;
    }
	:root {
		--accent-color: var(--blue-active);
		--gray: var(--form-background);
	}
    .s--slider {
        display: flex;
        align-items: center;
    }

    .s--slider button {
        cursor: pointer;
        width: 3em;
        height: 1.6em;
        position: relative;
        margin: 0 0 0 0;
        background: var(--gray);
        border: none;
        margin-right: 10px;
        box-shadow: 0 0px 0px 1px var(--primary_color_1);
    }

    .s--slider button::before {
        content: '';
        position: absolute;
        width: 1.3em;
        height: 1.3em;
        background-color: var(--primary_color_1);
        top: 0.14em;
        right: 1.5em;
        transition: transform 0.3s, background-color 0.3s;
    }

    .s--slider button[aria-checked='true']{
        background-color: var(--accent-color)
    }

    .s--slider button[aria-checked='true']::before{
        transform: translateX(1.3em);
        transition: transform 0.3s, background-color 1s;
        background: #ffffff;
    }

    .s--slider button:focus {
        box-shadow: 0 0px 0px 1px var(--blue-active);
    }
    .s--slider button {
        border-radius: 1.5em;
    } 
    
    .s--slider button::before {
        border-radius: 100%;
    }

    .s--slider button:focus {
        /* box-shadow: 0 0px 8px var(--accent-color); */
        border-radius: 1.5em;
    }
   

</style>