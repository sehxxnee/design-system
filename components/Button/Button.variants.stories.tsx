import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonType } from "./index";
import React from "react";
import { ArgTypes, Stories } from '@storybook/blocks';
 
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
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
};
export default meta;

type Story = StoryObj<typeof Button>;

// --- Button Variants ---
export const ButtonVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button theme={ButtonType.FILL}>Fill</Button>
      <Button theme={ButtonType.OUTLINE}>Outline</Button>
      <Button theme={ButtonType.GHOST}>Ghost</Button>
    </div>
  ),
};

// --- Button Colors ---
export const ButtonColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button theme={ButtonType.COLOR} color="purple">Purple</Button>
      <Button theme={ButtonType.COLOR} color="blue">Blue</Button>
      <Button theme={ButtonType.COLOR} color="red">Red</Button>
      <Button theme={ButtonType.COLOR} color="black">Black</Button>
    </div>
  ),
};

// --- Button Icons ---
export const ButtonIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button 
        leftIcon={<span>💾</span>}
        theme={ButtonType.COLOR}
        color="purple"
      >
        저장
      </Button>
      <Button 
        rightIcon={<span>➡️</span>}
        theme={ButtonType.COLOR}
        color="purple"
      >
        다음
      </Button>
      <Button 
        leftIcon={<span>⭐</span>}
        rightIcon={<span>✅</span>}
        theme={ButtonType.COLOR}
        color="purple"
      >
        완료
      </Button>
    </div>
  ),
};

// --- Button Sizes ---
export const ButtonSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Sizes */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Button theme={ButtonType.COLOR} color="purple" size="sm">Small</Button>
        <Button theme={ButtonType.COLOR} color="purple" size="md">Medium</Button>
        <Button theme={ButtonType.COLOR} color="purple" size="lg">Large</Button>
      </div>
      
      {/* Full Width */}
      <div style={{ maxWidth: '400px', border: '1px solid #eee', padding: '16px' }}>
        <Button theme={ButtonType.COLOR} color="purple" fullWidth>
          Full Width Button
        </Button>
      </div>
    </div>
  ),
};

// --- Button States ---
export const ButtonStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button theme={ButtonType.COLOR} color="purple" disabled>Disabled Purple</Button>
      <Button theme={ButtonType.OUTLINE} disabled>Disabled Outline</Button>
      <Button theme={ButtonType.GHOST} disabled>Disabled Ghost</Button>
    </div>
  ),
};
