import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./index";
import React, { useState } from "react";
import { ArgTypes, Stories } from '@storybook/blocks';

const meta: Meta<typeof Radio> = {
  title: "Atoms/Radio",
  component: Radio,
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
    label: {
      control: 'text',
      description: 'A label will be added to the Radio',
      table: {
        category: 'Content',
        defaultValue: { summary: "''" },
      },
    },
    description: {
      control: 'text',
      description: 'Optional description field',
      table: {
        category: 'Content',
        defaultValue: { summary: "''" },
      },
    },
    name: {
      control: 'text',
      description: 'Needed for "RadioGroup" molecule',
      table: {
        category: 'Content',
        defaultValue: { summary: '-' },
      },
    },
    type: {
      control: 'select',
      options: ['default', 'tab'],
      description: "Type defines the appearance of the radio </br> Possible values: 'default' | 'tab'",
      table: {
        category: 'Appearance',
        defaultValue: { summary: "'default'" },
      },
    },
    value: {
      control: 'text',
      description: 'Use this prop to get specified value when "onChange" is fired',
      table: {
        category: 'Content',
        defaultValue: { summary: '-' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Radio size',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'small' },
      },
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Specify the label position',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'right' },
      },
    },
    labelAlignment: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Specify the label alignment',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'start' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Specifies does the Radio checked or not.',
      table: {
        category: 'States',
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Will make Radio disabled when set to "true"',
      table: {
        category: 'States',
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Will make Radio readonly when set to "true"',
      table: {
        category: 'States',
        defaultValue: { summary: 'false' },
      },
    },
    isValid: {
      control: 'boolean',
      description: 'Control Radio validation. For more info see "ValidatableRadio"(integrated Radio with "Form" organism).',
      table: {
        category: 'Validation',
        defaultValue: { summary: 'true' },
      },
    },
    errorText: {
      control: 'text',
      description: 'Shows error text when "isValid" is set to "false".',
      table: {
        category: 'Validation',
        defaultValue: { summary: "''" },
      },
    },
    required: {
      control: 'boolean',
      description: 'Radio will add an extra asterix to the "label". For more info see "ValidatableRadio"(integrated Radio with "Form" organism).',
      table: {
        category: 'Validation',
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      control: false,
      description: 'Fires an event when Radio is clicked',
      table: {
        category: 'Functionality',
        type: { summary: '(event: Event) => void' },
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

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: "Default Radio",
    size: "small",
    type: "default",
    checked: false,
    disabled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Radio
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const WithDescription: Story = {
  args: {
    label: "Option with description",
    description: "This is a helpful description for this radio option",
    size: "medium",
    type: "default",
    checked: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Radio
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const TabType: Story = {
  args: {
    label: "Tab Style Radio",
    description: "This is a tab-styled radio button",
    type: "tab",
    size: "medium",
    checked: false,
    disabled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Radio
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const WithValidation: Story = {
  args: {
    label: "Required Field",
    required: true,
    isValid: false,
    errorText: "Please select this option",
    size: "medium",
    checked: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Radio
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

