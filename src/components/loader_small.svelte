
<script>
  import { fade, fly } from 'svelte/transition';
  export let loading = true
  export let size = 17
  export let thickness = 3
</script>

{#if loading === true}
    <div in:fade={{ duration: 200 }} out:fade={{  duration: 200}} class="loader-container">
        <div style="--ring-size : {size}px; --thickness:{thickness}px" class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
{/if}

<style>
.loader-container{
  width: 15px;
  height: 15px;
  /* background-color: black; */
    transform: scale(1.5);
    -moz-transform: scale(1.5);
}

.lds-ring {
    position: relative;
    width: 10px;
    height: 10px;
  }
  .lds-ring div {
    transform: scale(0.5);
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: var(--ring-size);
    height: var(--ring-size);
    border: var(--thickness) solid var(--grey-dark);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--grey-dark) transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>