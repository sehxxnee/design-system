import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./index";
import Button from "../Button";
import Icon from "../Icon";
import React from "react";
import { ArgTypes, Stories } from '@storybook/blocks';

const meta: Meta<typeof Tooltip> = {
  title: "Molecules/Tooltip",
  component: Tooltip,
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
    children: {
      control: false,
      description: 'Any valid React node.',
      table: {
        category: 'Content',
        type: { summary: 'union' },
      },
    },
    text: {
      control: 'text',
      description: 'Main content for the component.',
      table: {
        category: 'Content',
        defaultValue: { summary: '-' },
      },
    },
    title: {
      control: 'text',
      description: 'Title for the component.',
      table: {
        category: 'Content',
        defaultValue: { summary: '-' },
      },
    },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Positions where will be displayed the Tooltip relates the child component. </br> Possible values: top | right | bottom | left',
      table: {
        category: 'Appearance',
        defaultValue: { summary: "'top'" },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: 'The Tooltip component size </br> Possible values: default | small',
      table: {
        category: 'Appearance',
        defaultValue: { summary: "'default'" },
      },
    },
    padding: {
      control: 'number',
      description: 'Tooltip padding related to the target element',
      table: {
        category: 'Appearance',
        defaultValue: { summary: '5' },
      },
    },
    screenType: {
      control: 'select',
      options: ['desktop', 'mobile'],
      description: 'Control with screenType appearance of component',
      table: {
        category: 'Appearance',
        defaultValue: { summary: "'desktop'" },
      },
    },
    style: {
      control: 'object',
      description: 'Style object, to have extra styles.',
      table: {
        category: 'Appearance',
        type: { summary: 'CSSProperties' },
      },
    },
    customPosition: {
      control: 'object',
      description: 'Will display the component in the specified location.',
      table: {
        category: 'Functionality',
        type: { summary: 'ICustomPosition' },
      },
    },
    isVisible: {
      control: 'boolean',
      description: 'In case of false value, the children component will rendered without Tooltip.',
      table: {
        category: 'Functionality',
        defaultValue: { summary: 'true' },
      },
    },
    alwaysShow: {
      control: 'boolean',
      description: 'If true the component will be visible without any action.',
      table: {
        category: 'States',
        defaultValue: { summary: '-' },
      },
    },
    onClick: {
      control: false,
      description: 'Click event handler',
      table: {
        category: 'Actions',
        type: { summary: '(event: MouseEvent) => void' },
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

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    text: "This is a helpful tooltip message",
    title: "",
    position: "top",
    size: "default",
    padding: 5,
    screenType: "desktop",
    isVisible: true,
    alwaysShow: false,
  },
  render: (args) => (
    <div style={{ padding: '100px', display: 'flex', justifyContent: 'center' }}>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

