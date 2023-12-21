<script>
  import FaSearch from 'svelte-icons/fa/FaSearch.svelte'
  import { writable } from 'svelte/store';

  export let placeholder = 'input text..'
  // export let bindvalue;

  export let search = false;
  export let text = 'search'
  export let minWidth = "75px"
  export let inputMinWidth = "150px"
  export let disabled = false
  let id = Math.random(0,5)

  export let onChange = () => {}
  let validStatus = writable(false)
  
  export let value = '';

 $: {
  if (value.length > 0) {
    validStatus.set(true)
  } else {
    validStatus.set(false)
  }
 }

</script>


<div style="--minWidth:{minWidth}; --inputMinWidth:{inputMinWidth}" class="form-group">
{#if search === true}
  <label for={text+id} style="display: flex; align-items: center;justify-content: center;" type="text" class={`cari flex align-center ${$validStatus ? "focused" : ""}`}><label class="icon-wrapper flex "><FaSearch/></label></label>
{:else}
  <label for={text+id} style="display: flex; align-items: center;justify-content: center;" class={`cari flex align-center ${$validStatus ? "focused" : ""}`}>{text}</label>
{/if}
  <input disabled={disabled} autocomplete="off" bind:value id={text+id} spellcheck="false" required on:change={onChange} class="form-field" placeholder={placeholder}>

</div>

<style>
  :root {
--input-color: var(--secondary-color-grey-menu);
--input-border: var(--secondary-color-grey);
--input-background: #fff;
--input-placeholder: #CBD1DC;
--input-border-focus: var(--blue-active);
--group-color: var(--input-color);
--group-border: var(--input-border);
--group-background: #EEF4FF;
--group-color-focus: #fff;
--group-border-focus: var(--input-border-focus);
--group-background-focus: var(--blue-active);
}




.icon-wrapper{
width: 25px;
padding: 1px;
}



.form-field {
display: block;
width: 100%;
padding: 8px 16px;
line-height: 19px;
font-size: 14px;
font-weight: 500;
font-family: inherit;
border-radius: 6px;
color: var(--input-color);
border: 1px solid var(--input-border);
background: var(--input-background);
/* transition: border 0.3s ease; */
}

.form-field:disabled {
  background: var(--grey-not-so-dark);
}

.form-group input{
  min-width: var(--inputMinWidth) ;
  color: var(--grey-dark);
  background-color: var(--form-background);
  transition: background-color 0.2s ease-in;
}

.form-group input:focus, .form-group input:valid{
  background-color: var(--white);
}

.form-group input::placeholder{
  color: var(--grey-not-so-dark);
}

.form-field::-moz-placeholder {
color: var(--input-placeholder);
}
.form-field:-ms-input-placeholder {
color: var(--input-placeholder);
}
.form-field::placeholder {
color: var(--input-placeholder);
}
.form-field:focus, .form-field:valid {
outline: none;
border-color: var(--input-border-focus);
}


.form-group {
position: relative;
display: flex;
width: 100%;
}
.form-group > label,
.form-group .form-field {
white-space: nowrap;
display: block;
}
.form-group > label:not(:first-child):not(:last-child),
.form-group .form-field:not(:first-child):not(:last-child) {
border-radius: 0;
}
.form-group > label:first-child,
.form-group .form-field:first-child {
border-radius: 6px 0 0 6px;
}
.form-group > label:last-child,
.form-group .form-field:last-child {
border-radius: 0 6px 6px 0;
}
.form-group > label:not(:first-child),
.form-group .form-field:not(:first-child) {
margin-left: -1px;
}
.form-group .form-field {
position: relative;
z-index: 1;
flex: 1 1 auto;
height: 32px;
width: 1%;
margin-top: 0;
margin-bottom: 0;
}
.form-group > label {
text-align: center;
padding: 1% 5px;
font-size: 14px;
min-width: var(--minWidth);
line-height: 10px;
color: var(--group-color);
background: var(--group-background);
border: 1px solid var(--group-border);
/* transition: background 0.3s ease, border 0.3s ease, color 0.3s ease; */
}

.form-group:focus-within > label {
color: var(--group-color-focus);
background: var(--group-background-focus);
border-color: var(--group-border-focus);
}

.cari {
z-index: 1;
cursor: pointer;
user-select: none;
}

* {
box-sizing: inherit;
}
*:before, *:after {
box-sizing: inherit;
}

.cari.focused {
  color: var(--group-color-focus);
  background: var(--group-background-focus);
  border-color: var(--group-border-focus);
}

</style>