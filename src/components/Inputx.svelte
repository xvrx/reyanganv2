<script>
export let bindTo = ''
export let className = 'nip--peminjam';
export let title = 'untitled';
export let disabled = false;
export let id = '';
export let readOnly = false;
export const type = 'text'
export let max = 999;
export const onChange = () => {};
// export let value = 'untitled'
export const onBlur = () => {};
export const onClick = () => {};
</script>


<div class={`tunggakan-modal-${className}`}>
    <div class={`modal-${className}-input-container`}>
        <input
            bind:value={bindTo}
            readOnly={readOnly}
            disabled={disabled}
            on:change={onChange}
            on:blur={onBlur}
            on:click={onClick}
            autoComplete="off"
            spellCheck="false"
            class={`modal-${className}-input`}
            maxLength={max}
            id={id}
            required
        />
        <label
            id={`modal-${className}-input-label`}
            class={`${className}-modal-text`}
            for={id}
        >{title}
        </label>
        <label
            id={`modal-${className}-input-garis`}
            class={`${className}-modal-line`}
            for={id}
        ></label>
    </div>
</div>


<style>


.tunggakan-modal-nip--peminjam{
    font-size: 1rem;
    font-family: 'robotBold', sans-serif;
    display: flex;
    margin : 22px 0px 0px 0
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



.modal-nip--peminjam-input:focus ~ #modal-nip--peminjam-input-label,
.modal-nip--peminjam-input:disabled ~ #modal-nip--peminjam-input-label,
.modal-nip--peminjam-input:valid ~ #modal-nip--peminjam-input-label {
    font-family: 'quantico';
    color: black;
    transform: translate(-15px,-10px) scale(0.8);
    background-color: rgba(red, green, blue, 0);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}


.modal-nip--peminjam-input:focus ~ .nip--peminjam-modal-line,
.modal-nip--peminjam-input:disabled ~ .nip--peminjam-modal-line,
.modal-nip--peminjam-input:valid ~ .nip--peminjam-modal-line
{
    background-color: rgba(33, 150, 243, 1);
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



.modal-areax-input:focus ~ #modal-areax-input-label,
.modal-areax-input:disabled ~ #modal-areax-input-label,
.modal-areax-input:valid ~ #modal-areax-input-label {
    font-family: 'quantico';
    color: black;
    top: 0px;
    transform: translate(-10px, -35px);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}


.modal-areax-input:focus ~ .areax-modal-line,
.modal-areax-input:disabled ~ .areax-modal-line,
.modal-areax-input:valid ~ .areax-modal-line
{
    background-color: rgba(33, 150, 243, 1);
}

</style>