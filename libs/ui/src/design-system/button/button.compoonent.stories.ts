import type { Meta, StoryObj } from '@storybook/angular';
import { Button } from './button.component';

const meta: Meta<Button> = {
  component: Button,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
};
