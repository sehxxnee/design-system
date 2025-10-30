import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./style.module.scss";

export type BadgeColor = "danger" | "primary";
export type BadgeSize = "default" | "medium" | "big" | "huge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Badge color */
  color?: BadgeColor;
  /** Set this property to have only dot instead of number */
  dot?: boolean;
  /** Badge size */
  size?: BadgeSize;
  /** Any valid React node */
  children?: React.ReactNode;
  /** Shows the specified number on the badge */
  count?: number;
  /** When the "count" is greater than "maxCount" Badge will show "maxCount" value and "+" */
  maxCount?: number;
  /** Any custom class name */
  className?: string;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  {
    color = "danger",
    dot = false,
    size = "default",
    children,
    count,
    maxCount,
    className,
    ...rest
  },
  ref
) {
  const hasChildren = !!children;

  const badgeWrapperCls = cn(
    styles.badgeWrapper,
    {
      [styles.standalone]: !hasChildren,
    },
    className
  );

  const badgeCls = cn(
    styles.badge,
    styles[`color-${color}`],
    styles[`size-${size}`],
    {
      [styles.dot]: dot,
      [styles.withChildren]: hasChildren,
    }
  );

  const getDisplayCount = () => {
    if (dot) return null;
    if (count === undefined) return null;
    if (maxCount !== undefined && count > maxCount) {
      return `${maxCount}+`;
    }
    return count;
  };

  const displayCount = getDisplayCount();
  const showBadge = dot || (count !== undefined && count > 0);

  return (
    <span ref={ref} className={badgeWrapperCls} {...rest}>
      {children}
      {showBadge && (
        <span className={badgeCls}>
          {!dot && displayCount}
        </span>
      )}
    </span>
  );
});

export default Badge;

