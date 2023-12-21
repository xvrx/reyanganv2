<script>
    export let bindTo = 'no bind value'
    export let className = '';
    export let title = 'untitled';
    export let disabled = false;
    export let id = className;
    export let readOnly = false;
    export const max = 1024;
    export const onChange = () => {alert('no onchange function assigned!')};
    // export let value = 'untitled'
    export const onBlur = () => {alert('no onBlur function assigned!')};
    export const onClick = () => {alert('no onClick function assigned!')};
</script>


    
<div class={`tunggakan-modal-${className}`}>
    <div class={`modal-${className}-input-container`}>
        <textarea
            bind:value={bindTo}
            on:change={onChange}
            on:blur={onBlur}
            on:click={onClick}
            maxlength={max}
            disabled={disabled}
            readonly={readOnly}
            placeholder={title}
            autoComplete="off"
            spellCheck="false"
            class={`modal-${className}-input`}
            id={id}
            required
        />
    </div>
</div>


<style>
    
.tunggakan-modal-nip--peminjam{
    font-size: 1rem;
    font-family: 'robotBold', sans-serif;
    display: flex;
    margin : 22px 22px 22px 0
}


.modal-nip--peminjam-input-container{
    position: relative;
    width: -moz-fit-content;
    width: fit-content;
    height: -moz-fit-content;
    height: fit-content;
    width: fit-content;
    cursor: text;
    text-align: flex-start;
}

.modal-nip--peminjam-input{
    left: 0;
    font-size: 1rem;
    font-family: "quantico";
    color: black;
    border: none;
    background: none;
    outline: none;
    text-decoration: none;
    width: 158px;
}

.nip--peminjam-modal-line{
    position: absolute;
    background-color: rgb(224, 103, 103);
    left: 0;
    bottom: -2px;
    width:160px;
    height: 1px;
    cursor:text;
    transition: all 0.15s ease-in-out;
} 


.nip--peminjam-modal-text{
    font-family: 'quantico';
    font-size: 1rem;
    -webkit-user-select: none;
    user-select: none;
    position: absolute;
    left: 0px;
    bottom: 3px;
    color: rgb(119, 119, 119);
    cursor: text;
    transition: all 0.15s ease-in-out;
}

#modal-nip--peminjam-input-label {
    transition: transform 0.25s ease-in-out,
                background-color 0.25s ease-in-out,
                padding 0.25s ease-in-out,
                color 0.25s ease-in-out,
    
}


.tunggakan-modal-areax{
    font-size: 1rem;
    font-family: 'robotBold', sans-serif;
    display: flex;
    margin : 22px 22px 22px 0
}


.modal-areax-input-container{
    position: relative;
    width: -moz-fit-content;
    width: fit-content;
    height: -moz-fit-content;
    height: fit-content;
    width: fit-content;
    cursor: text;
    text-align: flex-start;
}

.modal-areax-input{
    left: 0;
    font-size: 1rem;
    color: #4c4c4c;
    border: none;
    background: none;
    outline: none;
    text-decoration: none;
    min-height: 70px;
    max-height: 100px;
    max-width: 514px;
    min-width: 514px;
    overflow-x: hidden;
    overflow-y: auto;
}

.areax-modal-line{
    position: absolute;
    background-color: rgb(224, 103, 103);
    left: 0;
    bottom: -2px;
    width:160px;
    height: 1px;
    cursor:text;
    transition: all 0.15s ease-in-out;
} 


.areax-modal-text{
    font-family: 'quantico';
    font-size: 1rem;
    -webkit-user-select: none;
    user-select: none;
    position: absolute;
    left: 0px;
    bottom: 3px;
    color: rgb(119, 119, 119);
    cursor: text;
    transition: all 0.15s ease-in-out;
}

#modal-areax-input-label {
    transition: transform 0.25s ease-in-out,
                background-color 0.25s ease-in-out,
                padding 0.25s ease-in-out,
                color 0.25s ease-in-out,
    
}




</style>