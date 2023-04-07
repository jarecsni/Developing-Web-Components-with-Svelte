<svelte:options tag="cobalt-checkbox"/>

<div class="cobalt">
    <input 
        type="checkbox"
        id="name"
        {checked}
        {disabled}
        on:click = {onClick}
        {...$$props}
    />
    <label for="name">
        {label}
    </label>
</div>

<script>
    import './checkbox.css';
    export let checked = true;
    export let label = "Checkbox";
    export let disabled = false;
    export let onClick = () => {};
    $: checked = checked !== false;
</script>