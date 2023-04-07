<svelte:options tag="cobalt-checkbox"/>

<div class="cobalt">
    <input 
        type="checkbox"
        id="name"
        {checked}
        {disabled}
        on:change={onChange}
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
    function onChange(event) {
        event.target.dispatchEvent(new CustomEvent("onchange", { composed: true }));
    }
    $: checked = checked !== false;
</script>