import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./index";
import React, { useState, useEffect } from "react";
import { ArgTypes, Stories } from '@storybook/blocks';

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icons",
  component: Icon,
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

type Story = StoryObj<typeof Icon>;

// --- Icon Example ---
export const IconExample: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon type="heart" />
      <Icon type="star" />
      <Icon type="check" />
      <Icon type="close" />
    </div>
  ),
};

// --- Icon States ---
export const IconStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <Icon type="heart" />
        <span style={{ fontSize: '12px' }}>Normal</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <Icon type="heart" isFilled />
        <span style={{ fontSize: '12px' }}>Filled</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <Icon type="heart" disabled />
        <span style={{ fontSize: '12px' }}>Disabled</span>
      </div>
    </div>
  ),
};

// --- Icon Catalog ---
export const IconCatalog: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    // 샘플 아이콘 목록
    const iconList = [
      'heart', 'star', 'check', 'close', 'arrow-left', 'arrow-right',
      'arrow-up', 'arrow-down', 'plus', 'minus', 'search', 'filter',
      'settings', 'user', 'home', 'bell', 'mail', 'calendar',
      'edit', 'delete', 'download', 'upload', 'refresh', 'lock'
    ];

    const filteredIcons = iconList.filter(icon => 
      icon.toLowerCase().includes(searchValue.toLowerCase())
    );

    useEffect(() => {
      // 로딩 시뮬레이션
      setTimeout(() => setIsLoading(false), 500);
    }, []);

    const copyToClipboard = (iconName: string) => {
      navigator.clipboard.writeText(`<Icon type="${iconName}" />`);
      alert(`Copied: <Icon type="${iconName}" />`);
    };

    return (
      <div style={{ width: '100%' }}>
        {/* Search Input */}
        <div style={{ marginBottom: '24px' }}>
          <input
            type="text"
            placeholder="Search icons"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none',
            }}
          />
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              border: '3px solid #f3f4f6',
              borderTopColor: '#a144ff',
              borderRadius: '50%',
              margin: '0 auto',
              animation: 'spin 1s linear infinite'
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        ) : (
          <>
            {/* Icons Grid */}
            {filteredIcons.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                gap: '16px',
              }}>
                {filteredIcons.map((iconName) => (
                  <div
                    key={iconName}
                    onClick={() => copyToClipboard(iconName)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '16px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#a144ff';
                      e.currentTarget.style.backgroundColor = '#faf5ff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <Icon type={iconName} style={{ fontSize: '24px' }} />
                    <span style={{ 
                      fontSize: '12px', 
                      color: '#6b7280',
                      textAlign: 'center',
                      wordBreak: 'break-word'
                    }}>
                      {iconName}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ 
                textAlign: 'center', 
                padding: '40px',
                color: '#6b7280'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#111827' }}>
                  No matching icons found
                </h3>
                <p style={{ margin: 0, fontSize: '14px' }}>
                  Try searching with different keywords
                </p>
              </div>
            )}
          </>
        )}
      </div>
    );
  },
};

