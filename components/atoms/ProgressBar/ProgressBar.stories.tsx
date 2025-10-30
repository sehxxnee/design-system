import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './index';

const meta: Meta<typeof ProgressBar> = {
  title: 'Atoms/Feedback/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: { 
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    max: { control: 'number' },
    showLabel: { control: 'boolean' },
    label: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['blue', 'green', 'red', 'yellow', 'purple'],
    },
    status: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning'],
    },
    striped: { control: 'boolean' },
    animated: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 65,
    showLabel: true,
  },
};

