import Checkbox from './Checkbox.svelte';


export default {
  title: 'Cobalt UI Library / Basic Components / Checkbox',
  component: Checkbox
};

const Template = props => ({
  Component: Checkbox,
  props
});

export const Default = Template.bind({});
Default.args = {
    checked: false,
    onClick: () => alert("clicked")
};
  