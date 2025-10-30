import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FileUploader from './index';

const meta: Meta<typeof FileUploader> = {
  title: 'Molecules/Form/FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
  argTypes: {
    browseLabel: { control: 'text' },
    chooseFileLabel: { control: 'text' },
    dropHereLabel: { control: 'text' },
    startUploadLabel: { control: 'text' },
    loadingLabel: { control: 'text' },
    informationMessage: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isActiveDrop: { control: 'boolean' },
    isImageUpload: { control: 'boolean' },
    multiple: { control: 'boolean' },
    required: { control: 'boolean' },
    immediatelyUploadAfterSelect: { control: 'boolean' },
    allTypesAccepted: { control: 'boolean' },
    showDownloadButton: { control: 'boolean' },
    showPreviewButton: { control: 'boolean' },
    showResetButton: { control: 'boolean' },
    showTrash: { control: 'boolean' },
    showLocalErrors: { control: 'boolean' },
    hideName: { control: 'boolean' },
    maxFileSize: { control: 'number' },
    maxFileCount: { control: 'number' },
    uploaderAppearance: {
      control: 'select',
      options: ['default', 'compact'],
    },
    uploadedItemsAppearance: {
      control: 'select',
      options: ['list', 'grid'],
    },
    cornerRadius: {
      control: 'select',
      options: ['smooth', 'sharp', 'rounded'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUploader>;

export const Default: Story = {
  args: {
    chooseFileLabel: 'Upload File',
    browseLabel: 'Browse',
    informationMessage: 'Maximum file size: 5MB',
  },
};

