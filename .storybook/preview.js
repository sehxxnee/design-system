// React 컴포넌트 렌더링에 필요하므로 React를 임포트합니다.
import React from 'react';

// 1. _tokens.scss 파일을 import하여 모든 컴포넌트에서 CSS 변수 사용 가능하게 합니다.
// 경로는 .storybook 폴더 기준입니다. 프로젝트 구조에 따라 ../styles/abstracts/_tokens.scss 로드가 필요합니다.
import '../styles/abstracts/_tokens.scss'; 

// Storybook의 기본 설정을 내보냅니다.
const preview = {
  // 컴포넌트가 정렬되는 방식, 전역 배경색 등을 설정합니다.
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // 모든 스토리의 배경색을 흰색으로 통일 (선택 사항)
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  
  // 모든 스토리에 적용될 Decorators (예: Provider)를 여기에 설정합니다.
  decorators: [
    (Story) => (
      // 컴포넌트 주변에 여백을 주어 보기 좋게 만듭니다.
      <div style={{ padding: '3rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
