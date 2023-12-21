<script>
export let onSelect = (e) => {console.log(e.target.value)}
export let categories = ["no","props", "data"]

</script>

<div class="container">
    <ul id="filter1" on:change={onSelect} class="filter-switch">
        {#each categories as category,id}
            <li class="filter-switch-item">
                <input value={category}  type="radio" name="filter1" id="filter-{id}" class="sr-only" checked={id === 0 ? true : false}>
                    <label for="filter-{id}">
                        {category}
                    </label>
                <div aria-hidden="true" class="filter-active"></div>
            </li>
        {/each}
    </ul>
</div>

<style>

.filter-switch{
    user-select: none;
    font-family: quantico;
    font-weight: 100;
    display: inline-flex;
    position: relative;
    padding: 0.25rem;
    border: 1px solid #aebad1;
    align-items: center;
    border-radius: 0.375rem;
    height: 2.5rem;
    font-weight: 600;
    color: var(--white);
    background-color: #e5ecf9;
}


li {
    font-family: quantico;
    font-weight: 300;
    display: flex; 
    position: relative; 
    height: 2rem; 
}


.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0; 
}

label {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem; 
    padding-left: 0.5rem;
    padding-right: 0.5rem; 
    border-radius: 0.25rem; 
    height: 2rem; 
    font-size: 0.875rem;
    line-height: 1.25rem; 
    line-height: 1.5rem; 
    color: var(--grey-not-so-dark); 
    background-color: var(--blue-active); 
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
    }

    label:hover{
        color: var(--grey-dark);
    }

.container {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    background-color: var(--white); 
}



.filter-switch label {
  cursor: pointer;
}
.filter-switch-item input:checked + label {
    font-family: quanticoBold;
    font-weight: 500;
    color: inherit;
}
.filter-switch-item input:not(:checked) + label {
  --bg-opacity: 0;
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0); 
}


  </style>