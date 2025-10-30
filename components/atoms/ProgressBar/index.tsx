import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./style.module.scss";

export type ProgressBarSize = "sm" | "md" | "lg";
export type ProgressBarColor = "blue" | "green" | "red" | "yellow" | "purple";
export type ProgressBarStatus = "default" | "success" | "error" | "warning";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress value (0-100) */
  value: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Show percentage label */
  showLabel?: boolean;
  /** Custom label text (overrides percentage) */
  label?: string;
  /** Size variant */
  size?: ProgressBarSize;
  /** Color variant */
  color?: ProgressBarColor;
  /** Status variant (overrides color) */
  status?: ProgressBarStatus;
  /** Show animated stripes */
  striped?: boolean;
  /** Animate the progress bar */
  animated?: boolean;
  /** Additional className */
  className?: string;
}

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(function ProgressBar(
  {
    value,
    max = 100,
    showLabel = false,
    label,
    size = "md",
    color = "blue",
    status = "default",
    striped = false,
    animated = false,
    className,
    ...rest
  },
  ref
) {
  // Normalize value to 0-100 range
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  // Auto-determine status color
  const getStatusColor = (): ProgressBarColor => {
    if (status === "success") return "green";
    if (status === "error") return "red";
    if (status === "warning") return "yellow";
    return color;
  };

  const displayLabel = label || (showLabel ? `${Math.round(percentage)}%` : null);
  const finalColor = status !== "default" ? getStatusColor() : color;

  const containerCls = cn(
    styles.progressBar,
    styles[`size-${size}`],
    className
  );

  const barCls = cn(
    styles.progressBarFill,
    styles[`color-${finalColor}`],
    {
      [styles.striped]: striped,
      [styles.animated]: animated,
    }
  );

  return (
    <div
      ref={ref}
      className={containerCls}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      {...rest}
    >
      <div 
        className={barCls}
        style={{ width: `${percentage}%` }}
      >
        {displayLabel && (
          <span className={styles.progressBarLabel}>{displayLabel}</span>
        )}
      </div>
    </div>
  );
});

export default ProgressBar;

