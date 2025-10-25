import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./style.module.scss";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Type is the exact icon. You can find valid "type" values in the documentation example */
  type: string;
  /** Icon disabled state */
  disabled?: boolean;
  /** Additional className */
  className?: string;
}

// 아이콘 매핑 (예제용 - 실제로는 아이콘 폰트나 SVG 사용)
const iconMap: Record<string, string> = {
  'heart': '❤️',
  'star': '⭐',
  'check': '✓',
  'close': '✕',
  'arrow-left': '←',
  'arrow-right': '→',
  'arrow-up': '↑',
  'arrow-down': '↓',
  'plus': '+',
  'minus': '−',
  'search': '🔍',
  'filter': '🔽',
  'settings': '⚙️',
  'user': '👤',
  'home': '🏠',
  'bell': '🔔',
  'mail': '✉️',
  'calendar': '📅',
  'edit': '✏️',
  'delete': '🗑️',
  'download': '⬇️',
  'upload': '⬆️',
  'refresh': '🔄',
  'lock': '🔒',
};

const Icon = forwardRef<HTMLSpanElement, IconProps>(function Icon(
  {
    type,
    disabled = false,
    className,
    ...rest
  },
  ref
) {
  const cls = cn(
    styles.icon,
    {
      [styles.disabled]: disabled,
    },
    className
  );

  const iconContent = iconMap[type] || '❓';

  return (
    <span
      ref={ref}
      className={cls}
      aria-hidden="true"
      aria-disabled={disabled}
      {...rest}
    >
      {iconContent}
    </span>
  );
});

export default Icon;

