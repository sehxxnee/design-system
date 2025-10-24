import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonType } from "./index";
import React from "react";

// Storybook 네비게이션 순서를 위해 '01.'을 접두사로 붙였습니다.
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Button" },
  parameters: {
    docs: {
      description: {
        component: 'Button 컴포넌트는 다양한 스타일과 크기 옵션을 제공하는 재사용 가능한 버튼입니다.\n\n## 주요 기능\n\n- **Variants**: Fill, Outline, Ghost 세 가지 스타일\n- **Colors**: Purple, Blue, Red, Black 네 가지 색상\n- **Sizes**: Small, Medium, Large 세 가지 크기\n- **Icons**: Left, Right, Both 아이콘 지원\n- **States**: Disabled 상태 지원\n- **Accessibility**: 키보드 네비게이션 및 스크린 리더 지원',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

// --- Button Variants ---
export const ButtonVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: '버튼의 세 가지 기본 스타일 변형입니다.\n\n- **Fill**: 배경색이 있는 기본 버튼 스타일\n- **Outline**: 테두리만 있고 배경은 투명한 스타일 (hover 시 배경색 채워짐)\n- **Ghost**: 배경과 테두리 모두 투명한 스타일 (hover 시 연한 배경색)',
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: '버튼의 색상 옵션입니다. 각 색상은 Fill 스타일로 표시됩니다.\n\n- **Purple**: 연보라색 (#a144ff) - 기본 브랜드 컬러\n- **Blue**: 파란색 (#3b82f6) - 정보나 링크에 적합\n- **Red**: 빨간색 (#f43f5e) - 경고나 삭제 액션에 적합\n- **Black**: 블랙 (#374151) - 중립적이거나 보조 액션에 적합',
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: '버튼에 아이콘을 추가하는 방법입니다. leftIcon과 rightIcon 속성을 사용하여 아이콘을 배치할 수 있습니다.\n\n- **Left Icon**: 버튼 텍스트 왼쪽에 아이콘 배치\n- **Right Icon**: 버튼 텍스트 오른쪽에 아이콘 배치\n- **Both Icons**: 양쪽에 아이콘을 동시에 배치 가능\n- **아이콘 타입**: React.ReactNode를 받으므로 이모지, SVG, 아이콘 컴포넌트 등 사용 가능',
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: '버튼의 크기 옵션과 전체 너비 설정입니다.\n\n- **Small (sm)**: 작은 크기 - 보조 액션이나 컴팩트한 UI에 적합\n- **Medium (md)**: 중간 크기 - 기본 크기로 가장 많이 사용\n- **Large (lg)**: 큰 크기 - 주요 액션이나 강조가 필요한 버튼에 적합\n- **Full Width**: 전체 너비 - 모바일이나 폼에서 전체 너비를 차지하는 버튼',
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: '버튼의 비활성화 상태입니다. disabled 속성을 true로 설정하면 버튼이 비활성화됩니다.\n\n- **시각적 변화**: 투명도 50%로 감소, 커서가 not-allowed로 변경\n- **상호작용 불가**: 클릭, 호버, 포커스 등 모든 상호작용이 비활성화\n- **접근성**: 스크린 리더에서 비활성화 상태로 인식',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button theme={ButtonType.COLOR} color="purple" disabled>Disabled Purple</Button>
      <Button theme={ButtonType.OUTLINE} disabled>Disabled Outline</Button>
      <Button theme={ButtonType.GHOST} disabled>Disabled Ghost</Button>
    </div>
  ),
};
