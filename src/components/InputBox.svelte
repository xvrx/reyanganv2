<script>
    export let placeholder = 'input text..'
    // export let bindvalue;
    export let onClick = () => {}
    export let search = true;
    export let text = 'search'
    export let onChange = () => {}

    import FaSearch from 'svelte-icons/fa/FaSearch.svelte'
</script>


<div class="form-group">
  <input id="mainInput" spellcheck="false" required on:change={onChange} class="form-field" placeholder={placeholder}>
    {#if search === true}
      <span on:click={onClick} type="text" class="cari flex justify-center align-center"><span class="icon-wrapper flex "><FaSearch/></span></span>
    {:else}
      <span on:click={onClick} class="cari">{text}</span>
    {/if}
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
  /* color: var(--secondary-color-grey-menu); */
  width: 25px;
  padding: 1px;
}



.form-field {
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  color: var(--input-color);
  border: 1px solid var(--input-border);
  background: var(--input-background);
  transition: border 0.3s ease;
}

#mainInput{
  min-width: 150px ;
  color: var(--grey-dark);
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

.form-field:valid + span {
  color: white;
  background-color: var(--blue-active);
}






.form-group {
  position: relative;
  display: flex;
  width: 100%;
}
.form-group > span,
.form-group .form-field {
  white-space: nowrap;
  display: block;
}
.form-group > span:not(:first-child):not(:last-child),
.form-group .form-field:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.form-group > span:first-child,
.form-group .form-field:first-child {
  border-radius: 6px 0 0 6px;
}
.form-group > span:last-child,
.form-group .form-field:last-child {
  border-radius: 0 6px 6px 0;
}
.form-group > span:not(:first-child),
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
.form-group > span {
  text-align: center;
  padding: 1% 5px;
  font-size: 14px;
  line-height: 25px;
  color: var(--group-color);
  background: var(--group-background);
  border: 1px solid var(--group-border);
  transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
}
.form-group:focus-within > span {
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

/* body {
  min-height: 100vh;
  font-family: "Mukta Malar", Arial;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #F5F9FF;
} */

/* body .form-group {
  max-width: 360px;
} */
/* body .form-group:not(:last-child) {
  margin-bottom: 32px;
} */

</style>