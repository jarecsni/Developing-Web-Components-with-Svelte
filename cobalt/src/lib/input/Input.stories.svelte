<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import Input from './Input.svelte';
</script>

<Meta title="Button" component={Input}/>

<Template let:args>
  <Input {...args}/>
</Template>

<Story name="Default" args={{}}/>
  