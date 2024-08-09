import type { Meta, StoryObj } from '@storybook/angular';
import { InputTextUIComponent } from './inputText.component';

const meta: Meta<InputTextUIComponent> = {
  component: InputTextUIComponent,
  title: 'Design System/Atomicos/Input Texto',
};
export default meta;
type Story = StoryObj<InputTextUIComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
};
