<script lang="ts">
    /** the label for the input*/
    export let label = "Label:";
    export let placeholder = "";
    export let fieldType = "text";
    export let disabled = false;
    export let inputName = "";
    export let fieldID = "";

    function onInput(event) {
        event.target.dispatchEvent(new CustomEvent("oninput", {composed: true}));
    }
</script>

<svelte:options tag="cobalt-input"/>

<div class="cobalt">
    {#if label}
        <label for={fieldID}>{label}</label>
    {/if}
    <input
        type={fieldType}
        id={fieldID}
        name={inputName}
        placeholder={placeholder}
        disabled={disabled}
        on:input={onInput}
        {...$$props}
    />
</div>

<style>
    .cobalt {
        display: flex;
        flex-direction: row;
        font-family: Arial, Helvetica, sans-serif;
    }
    input[type="text"] {
        width: 200px;
        border-radius: 4px;
        border-color: #19247c;
        height: 30px;
        outline: none;
    }
    input[type="email"] {
        width: 200px;
        border-radius: 4px;
        border-color: #19247c;
        height: 30px;
        outline: none;
    }
    label {
        padding-right: 10px;
        display: flex;
        align-self: center;
    }
</style>