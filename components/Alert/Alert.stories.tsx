import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./index";
import Icon from "../Icon";
import Button from "../Button";

const meta: Meta<typeof Alert> = {
  title: "Molecules/Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    // Content
    title: {
      control: "text",
      description: "Main field to describe alert information. Any valid React node",
      table: { category: "Content", defaultValue: { summary: "-" } },
    },
    message: {
      control: "text",
      description: "Use this field for describing information more verbose. Any valid React node",
      table: { category: "Content", defaultValue: { summary: "-" } },
    },
    iconProps: {
      control: "object",
      description: 'Same as "Icon" atom props',
      table: { category: "Content", defaultValue: { summary: "{}" } },
    },
    swapIcon: {
      control: false,
      description: 'Use this prop for replace main "Icon". Note that when the prop is specified "type" prop will not work(will be overlooked).',
      table: { category: "Content", defaultValue: { summary: "-" } },
    },
    // Appearance
    type: {
      control: "select",
      options: ["success", "info", "warning", "error", "note", "message"],
      description: 'Alert type is for specifying information message to be delivered. Also a corresponding "Icon" atom will be displayed',
      table: { category: "Appearance", defaultValue: { summary: "'info'" } },
    },
    screenType: {
      control: "select",
      options: ["desktop", "mobile"],
      description: "The switch between mobile and desktop version of Alert will be applied automatically, when the prop is not specified. When the prop is present it must be changed from outside.",
      table: { category: "Appearance", defaultValue: { summary: "-" } },
    },
    // Others
    className: {
      control: "text",
      description: "Additional classname",
      table: { category: "Others" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    type: "success",
    title: "Success! Your changes have been saved.",
    message: "Your profile has been updated successfully. All changes are now live.",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    title: "Information",
    message: "This is an informational message. Please read carefully before proceeding.",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "Warning: Action Required",
    message: "Your session will expire in 5 minutes. Please save your work to avoid losing data.",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    title: "Error: Something went wrong",
    message: "We encountered an error while processing your request. Please try again later or contact support.",
  },
};

export const Note: Story = {
  args: {
    type: "note",
    title: "Note",
    message: "This is a helpful note to guide you through the process.",
  },
};

