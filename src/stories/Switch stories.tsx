import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from '../components';

export default {
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultChecked: true
}
