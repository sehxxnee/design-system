import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./index";
import React, { useState, useEffect } from "react";
import { ArgTypes, Stories } from '@storybook/blocks';

const meta: Meta<typeof Icon> = {
  title: "Atoms/Display/Icon",
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
  argTypes: {
    type: {
      control: 'text',
      description: 'Type is the exact icon. You can find valid "type" values in the documentation example',
      table: {
        category: 'Content',
        defaultValue: { summary: '-' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Icon disabled state',
      table: {
        category: 'States',
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

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    type: "favorite",
    disabled: false,
  },
};

export const Catalog: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    // Material Icons 목록
    const iconList = [
      // Actions
      'home', 'search', 'settings', 'favorite', 'star', 'check_circle', 'done', 'info',
      'help', 'delete', 'add', 'remove', 'close', 'refresh', 'sync', 'lock', 'lock_open',
      'visibility', 'visibility_off', 'edit', 'save', 'cancel', 'print', 'share', 'download',
      'upload', 'copy', 'content_copy', 'content_cut', 'content_paste', 'undo', 'redo',
      
      // Navigation
      'menu', 'arrow_back', 'arrow_forward', 'arrow_upward', 'arrow_downward', 'expand_more',
      'expand_less', 'chevron_left', 'chevron_right', 'first_page', 'last_page', 'more_vert',
      'more_horiz', 'fullscreen', 'fullscreen_exit', 'zoom_in', 'zoom_out',
      
      // Communication
      'mail', 'email', 'chat', 'message', 'comment', 'notifications', 'call', 'phone',
      'contacts', 'person', 'people', 'group', 'forum', 'send',
      
      // Content
      'add_circle', 'remove_circle', 'block', 'flag', 'link', 'attach_file', 'cloud',
      'cloud_upload', 'cloud_download', 'folder', 'folder_open', 'insert_drive_file',
      'description', 'text_fields', 'title', 'format_bold', 'format_italic', 'format_underlined',
      
      // Device
      'phone_android', 'phone_iphone', 'tablet', 'laptop', 'computer', 'tv', 'watch',
      'camera', 'photo_camera', 'videocam', 'headset', 'keyboard', 'mouse', 'print',
      
      // Image
      'image', 'photo', 'photo_library', 'collections', 'camera_alt', 'filter', 'palette',
      'brush', 'color_lens', 'crop', 'rotate_left', 'rotate_right', 'flip',
      
      // Maps
      'place', 'location_on', 'my_location', 'directions', 'map', 'navigation', 'explore',
      'local_shipping', 'local_taxi', 'flight', 'hotel', 'restaurant',
      
      // Social
      'thumb_up', 'thumb_down', 'mood', 'sentiment_satisfied', 'sentiment_dissatisfied',
      'public', 'language', 'share', 'cake', 'school', 'work',
      
      // Toggle
      'check_box', 'check_box_outline_blank', 'radio_button_checked', 'radio_button_unchecked',
      'star', 'star_border', 'favorite', 'favorite_border', 'toggle_on', 'toggle_off',
      
      // Alert
      'error', 'warning', 'info', 'check_circle', 'cancel', 'report_problem', 'notification_important',
      
      // AV
      'play_arrow', 'pause', 'stop', 'skip_next', 'skip_previous', 'fast_forward', 'fast_rewind',
      'volume_up', 'volume_down', 'volume_off', 'mic', 'mic_off', 'videocam', 'videocam_off',
      
      // Editor
      'attach_money', 'insert_chart', 'pie_chart', 'show_chart', 'functions', 'table_chart',
      
      // File
      'cloud', 'folder', 'insert_drive_file', 'attachment', 'cloud_upload', 'cloud_download',
      'create_new_folder', 'file_upload', 'file_download',
      
      // Hardware
      'keyboard', 'mouse', 'headset', 'memory', 'storage', 'usb', 'power', 'battery_full',
      'battery_charging_full', 'wifi', 'bluetooth', 'gps_fixed',
      
      // Places
      'business', 'store', 'local_cafe', 'local_bar', 'local_hospital', 'local_pharmacy',
      'fitness_center', 'pool', 'beach_access', 'golf_course', 'casino', 'spa'
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
      <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
        {/* Search Input */}
        <div style={{ marginBottom: '24px' }}>
          <input
            type="text"
            placeholder="Search icons..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none',
              boxSizing: 'border-box',
              fontFamily: 'var(--ds-font-family)',
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 110px))',
                gap: '16px',
                justifyContent: 'start',
              }}>
                {filteredIcons.map((iconName) => (
                  <div
                    key={iconName}
                    onClick={() => copyToClipboard(iconName)}
                    style={{
                      width: '110px',
                      height: '110px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      backgroundColor: 'transparent',
                      boxSizing: 'border-box',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#a144ff';
                      e.currentTarget.style.backgroundColor = '#faf5ff';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      width: '100%',
                      flex: '0 0 auto',
                      marginBottom: '8px',
                    }}>
                      <Icon type={iconName} style={{ fontSize: '32px', display: 'block' }} />
                    </div>
                    <span style={{ 
                      fontSize: '10px', 
                      color: '#6b7280',
                      textAlign: 'center',
                      wordBreak: 'break-word',
                      lineHeight: '1.3',
                      width: '100%',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      fontFamily: 'var(--ds-font-family)',
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
                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#111827', fontFamily: 'var(--ds-font-family)' }}>
                  No matching icons found
                </h3>
                <p style={{ margin: 0, fontSize: '14px', fontFamily: 'var(--ds-font-family)' }}>
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

