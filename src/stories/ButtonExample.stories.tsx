// import React from 'react'

// import { Meta } from '@storybook/react';

// import { Button } from './Button';

// export default {
//   component: Button,
//   title: 'Components/Button',
// } as Meta;

// ------------------------------------------------------ //

// import React from 'react';

// import { Meta } from '@storybook/react';

// import { Button } from './Button';

// export default {
//   title: 'Button',
//   component: Button,
//   //👇 Creates specific parameters for the story
//   parameters: {
//     backgrounds: {
//       values: [
//         { name: 'red', value: '#f00' },
//         { name: 'green', value: '#0f0' },
//         { name: 'black', value: '#000' },
//       ],
//     },
//     // outlines: { // outlines does not work, but the above effects the backgrounds icon in Storybook
//     //   values: [
//     //     { name: 'solid', value: '#00ffa3' },
//     //     { name: 'dashed', value: '#777' },
//     //   ]
//     // }
//   },
// } as Meta;

// ------------------------------------------------------ //

import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

// ------------------------------------------------------ //

// export const Primary: React.VFC<{}> = () => <Button primary>Button</Button>;

//displays 'primary' when not specified.
// Primary.storyName = 'I am the primary';

// ------------------------------------------------------ //

// export const Primary: React.VFC<{}> = () => <Button background="#ff0" label="Button" />;
// export const Secondary: React.VFC<{}> = () => <Button background="#ff0" label="😄👍😍💯" />;
// export const Tertiary: React.VFC<{}> = () => <Button background="#ff0" label="📚📕📈🤓" />;

// name your story^^ // VFC = Void Function component // 


// ------------------------------------------------------ //

// 👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { background: '#ff0', label: 'Button' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: '😄👍😍💯' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: '📚📕📈🤓' };

// ButtonGroup.stories.ts | ButtonGroup.stories.tsx


// ------------------------------------------------------ //