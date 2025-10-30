import type { Meta, StoryObj } from "@storybook/react";
import Title from "./index";
import Button from "../Button";
import Icon from "../Icon";
import React from "react";
import { ArgTypes, Stories } from '@storybook/blocks';

const meta: Meta<typeof Title> = {
  title: "Atoms/Title",
  component: Title,
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
    text: {
      control: 'text',
      description: 'Text/Component to be displayed. Any valid React node',
      table: {
        category: 'Content',
        type: { summary: 'node' },
      },
    },
    actions: {
      control: false,
      description: 'Actions to be displayed. Any valid React node',
      table: {
        category: 'Content',
        type: { summary: 'node' },
      },
    },
    icon: {
      control: 'text',
      description: 'Display an icon. Values are the same as "Icon" atoms type prop',
      table: {
        category: 'Content',
        defaultValue: { summary: '-' },
      },
    },
    color: {
      control: 'select',
      options: ['base', 'primary', 'subtle', 'danger'],
      description: 'Title color',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'base' },
      },
    },
    withLine: {
      control: 'boolean',
      description: 'Displays a divider line',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'false' },
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

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    text: "Page Title",
    color: "base",
    withLine: false,
  },
};

export const WithIcon: Story = {
  args: {
    text: "Title with Icon",
    icon: "home",
    color: "base",
    withLine: false,
  },
};

export const WithActions: Story = {
  args: {
    text: "Title with Actions",
    color: "base",
    withLine: false,
  },
  render: (args) => (
    <Title
      {...args}
      actions={
        <>
          <Button size="sm" theme="outline">
            Cancel
          </Button>
          <Button size="sm" theme="fill">
            Save
          </Button>
        </>
      }
    />
  ),
};

export const WithLine: Story = {
  args: {
    text: "Title with Divider Line",
    icon: "settings",
    color: "base",
    withLine: true,
  },
  render: (args) => (
    <div>
      <Title {...args} />
      <p style={{ marginTop: '16px', color: '#6b7280' }}>
        Content below the title with divider line...
      </p>
    </div>
  ),
};

export const Complete: Story = {
  args: {
    text: "Complete Example",
    icon: "dashboard",
    color: "primary",
    withLine: true,
  },
  render: (args) => (
    <div>
      <Title
        {...args}
        actions={
          <>
            <Button size="sm" theme="ghost">
              <Icon type="refresh" style={{ fontSize: '18px' }} />
            </Button>
            <Button size="sm" theme="ghost">
              <Icon type="more_vert" style={{ fontSize: '18px' }} />
            </Button>
          </>
        }
      />
      <p style={{ marginTop: '16px', color: '#6b7280' }}>
        This example shows a title with icon, actions, color, and divider line.
      </p>
    </div>
  ),
};

