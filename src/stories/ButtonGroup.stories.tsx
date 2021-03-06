import React from 'react';

import { Story, Meta } from '@storybook/react';

import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

//👇 Imports the Button stories
import * as ButtonExampleStories from './ButtonExample.stories';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Pair = Template.bind({});
Pair.args = {
  buttons: [{ ...ButtonExampleStories.Primary.args }, { ...ButtonExampleStories.Secondary.args }],
  orientation: 'horizontal',
};