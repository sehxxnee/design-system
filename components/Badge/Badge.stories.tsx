import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./index";
import Avatar from "../Avatar";
import React from "react";
import { ArgTypes, Stories } from '@storybook/blocks';

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
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
    color: {
      control: 'select',
      options: ['danger', 'primary'],
      description: 'Badge color </br> Possible values: danger | primary',
      table: {
        category: 'Appearance',
        defaultValue: { summary: "'danger'" },
      },
    },
    dot: {
      control: 'boolean',
      description: 'Set this property to have only dot instead of number',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'medium', 'big', 'huge'],
      description: 'Badge size </br> Possible values: default | medium | big | huge',
      table: {
        category: 'Appearance',
        defaultValue: { summary: "'default'" },
      },
    },
    children: {
      control: false,
      description: 'Any valid React node',
      table: {
        category: 'Content',
        defaultValue: { summary: '-' },
      },
    },
    count: {
      control: 'number',
      description: 'Shows the specified number on the badge',
      table: {
        category: 'Content',
        defaultValue: { summary: '-' },
      },
    },
    maxCount: {
      control: 'number',
      description: 'When the "count" is greater than "maxCount" Badge will show "maxCount" value and "+"',
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

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    color: "danger",
    count: 5,
    size: "default",
  },
  render: (args) => (
    <Badge {...args}>
      <Avatar icon="person" shape="square" />
    </Badge>
  ),
};

export const Dotted: Story = {
  args: {
    color: "danger",
    dot: true,
    size: "default",
  },
  render: (args) => (
    <Badge {...args}>
      <Avatar icon="person" shape="square" />
    </Badge>
  ),
};

export const MaxCount: Story = {
  args: {
    color: "danger",
    count: 100,
    maxCount: 99,
    size: "default",
  },
  render: (args) => (
    <Badge {...args}>
      <Avatar icon="person" shape="square" />
    </Badge>
  ),
};

export const WithoutChildren: Story = {
  args: {
    color: "primary",
    count: 10,
    size: "default",
  },
};

