import type { Meta, StoryObj } from "@storybook/react";
import BusyLoader from "./index";
import React from "react";
import { ArgTypes, Stories } from '@storybook/blocks';

const meta: Meta<typeof BusyLoader> = {
  title: "Atoms/BusyLoader",
  component: BusyLoader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <ArgTypes />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    isBusy: {
      control: 'boolean',
      description: 'Show loader',
      table: {
        category: 'States',
        defaultValue: { summary: 'true' },
      },
    },
    spinnerSize: {
      control: 'select',
      options: ['small', 'medium', 'big'],
      description: 'Loader size </br> Possible values: small | medium | big',
      table: {
        category: 'Appearance',
        defaultValue: { summary: "'small'" },
      },
    },
    type: {
      control: 'select',
      options: ['spinner', 'bubbles', 'bar'],
      description: 'Loader available type/style </br> Possible values: spinner | bubbles | bar',
      table: {
        category: 'Appearance',
        defaultValue: { summary: "'spinner'" },
      },
    },
    children: {
      control: 'text',
      description: 'Any valid React node. Renders when "isBusy" is set to false',
      table: {
        category: 'Content',
        defaultValue: { summary: '-' },
      },
    },
    loadingText: {
      control: 'text',
      description: 'Show provided text when loading, it will be ignored in the type of bar',
      table: {
        category: 'Content',
        defaultValue: { summary: '-' },
      },
    },
    className: {
      control: 'text',
      description: 'Any custom class name',
      table: {
        category: 'Others',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof BusyLoader>;

const SampleContent = () => (
  <div style={{ padding: '20px' }}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto dicta dolor ea excepturi id illum itaque laudantium, magni minima mollitia nemo odio odit possimus praesentium quas tempora vero voluptates?
  </div>
);

export const Default: Story = {
  args: {
    isBusy: true,
    loadingText: "Loading text...",
    spinnerSize: "medium",
    type: "spinner",
    children: <SampleContent />,
  },
};

export const Spinner: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
      <div>
        <h4 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Small</h4>
        <BusyLoader
          isBusy
          loadingText="Loading text..."
          spinnerSize="small"
          type="spinner"
        >
          <SampleContent />
        </BusyLoader>
      </div>
      <div>
        <h4 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Medium</h4>
        <BusyLoader
          isBusy
          loadingText="Loading text..."
          spinnerSize="medium"
          type="spinner"
        >
          <SampleContent />
        </BusyLoader>
      </div>
      <div>
        <h4 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Big</h4>
        <BusyLoader
          isBusy
          loadingText="Loading text..."
          spinnerSize="big"
          type="spinner"
        >
          <SampleContent />
        </BusyLoader>
      </div>
    </div>
  ),
};

export const Bubbles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
      <div>
        <h4 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Small</h4>
        <BusyLoader
          isBusy
          loadingText="Loading text..."
          spinnerSize="small"
          type="bubbles"
        >
          <SampleContent />
        </BusyLoader>
      </div>
      <div>
        <h4 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Medium</h4>
        <BusyLoader
          isBusy
          loadingText="Loading text..."
          spinnerSize="medium"
          type="bubbles"
        >
          <SampleContent />
        </BusyLoader>
      </div>
      <div>
        <h4 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Big</h4>
        <BusyLoader
          isBusy
          loadingText="Loading text..."
          spinnerSize="big"
          type="bubbles"
        >
          <SampleContent />
        </BusyLoader>
      </div>
    </div>
  ),
};

export const Bar: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', flexDirection: 'column' }}>
      <div>
        <h4 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Small</h4>
        <BusyLoader
          isBusy
          loadingText="Loading text..."
          spinnerSize="small"
          type="bar"
        >
          <SampleContent />
        </BusyLoader>
      </div>
      <div>
        <h4 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Medium</h4>
        <BusyLoader
          isBusy
          loadingText="Loading text..."
          spinnerSize="medium"
          type="bar"
        >
          <SampleContent />
        </BusyLoader>
      </div>
      <div>
        <h4 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Big</h4>
        <BusyLoader
          isBusy
          loadingText="Loading text..."
          spinnerSize="big"
          type="bar"
        >
          <SampleContent />
        </BusyLoader>
      </div>
    </div>
  ),
};

export const LoadedContent: Story = {
  args: {
    isBusy: false,
    children: <SampleContent />,
  },
};

