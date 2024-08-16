import type { Meta, StoryObj } from '@storybook/angular';
import { CampoComponent } from './campo.component';

const meta: Meta<CampoComponent> = {
  component: CampoComponent,
  title: 'Design System/Componentes/Campo',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<CampoComponent>;

export const Primary: Story = {
  args: {
    valor: '1',
    marcado: false,
    x: 1,
    y: 2,
    considerarCampo: true,
  },
};
