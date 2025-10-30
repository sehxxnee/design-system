import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FileItem from './index';

const meta: Meta<typeof FileItem> = {
  title: 'Atoms/Feedback/FileItem',
  component: FileItem,
  tags: ['autodocs'],
  argTypes: {
    fileName: { control: 'text' },
    fileSize: { control: 'text' },
    preview: { control: 'text' },
    metadata: { control: 'text' },
    showPreview: { control: 'boolean' },
    showDownload: { control: 'boolean' },
    showDelete: { control: 'boolean' },
    hideName: { control: 'boolean' },
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileItem>;

export const Default: Story = {
  args: {
    fileName: 'document.pdf',
    fileSize: 2048576,
    metadata: '2024-01-15',
    onPreview: () => alert('Preview clicked'),
    onDownload: () => alert('Download clicked'),
    onDelete: () => alert('Delete clicked'),
  },
};

