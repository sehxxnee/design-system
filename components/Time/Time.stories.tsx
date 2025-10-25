import type { Meta, StoryObj } from "@storybook/react";
import Time from "./index";
import React from "react";
import { ArgTypes, Stories } from '@storybook/blocks';

const meta: Meta<typeof Time> = {
  title: "Atoms/Time",
  component: Time,
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
    showIcon: {
      control: 'boolean',
      description: 'Displays a clock icon when set to "true"',
      table: {
        category: 'Content',
        defaultValue: { summary: 'false' },
      },
    },
    format: {
      control: 'text',
      description: 'Display format (e.g., "DD/MM/YYYY HH:mm:ss")',
      table: {
        category: 'Functionality',
        defaultValue: { summary: '-' },
      },
    },
    startDate: {
      control: false,
      description: 'Specifying this prop will make the Time atom a counter starting from "startDate". Accepts Date, string, or number',
      table: {
        category: 'Functionality',
        defaultValue: { summary: '-' },
      },
    },
    showSeconds: {
      control: 'boolean',
      description: 'Show seconds in time display',
      table: {
        category: 'Content',
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional className',
      table: {
        category: 'Others',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Time>;

export const DateAndTime: Story = {
  args: {
    format: "DD/MM/YYYY HH:mm:ss",
    showIcon: true,
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <Time {...args} />
    </div>
  ),
};

export const TimeWithFormat: Story = {
  args: {
    format: "AM hh:mm",
    showIcon: true,
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <Time {...args} />
    </div>
  ),
};

