import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonUIComponent } from './button.component';

const meta: Meta<ButtonUIComponent> = {
  component: ButtonUIComponent,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonUIComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
};
