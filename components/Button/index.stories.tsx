import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonType } from "./index";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: { children: "Button" },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Secondary: Story = { args: { theme: ButtonType.SECONDARY } };
export const Danger: Story = { args: { theme: ButtonType.DANGER, children: "삭제" } };

export const Outline: Story = { args: { theme: ButtonType.OUTLINE } };
export const Ghost: Story = { args: { theme: ButtonType.GHOST } };

export const Small: Story = { args: { size: "sm" } };
export const LargePill: Story = { args: { size: "lg", rounded: "pill" } };

export const Loading: Story = { args: { loading: true, children: "저장 중..." } };
export const FullWidth: Story = { args: { fullWidth: true } };

export const WithIcons: Story = {
  args: {
    leftIcon: <span>💾</span>,
    rightIcon: <span>➡️</span>,
    children: "저장",
  },
};
