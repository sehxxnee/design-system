import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./style.module.scss";

/** 버튼 컬러 스킴 */
export enum ButtonType {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  GHOST = "ghost",
  OUTLINE = "outline",
}

type Size = "sm" | "md" | "lg";
type Rounded = "sm" | "md" | "lg" | "pill";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 색상/스킴 */
  theme?: ButtonType;
  /** 크기 */
  size?: Size;
  /** 전체 너비 */
  fullWidth?: boolean;
  /** 로딩 상태 */
  loading?: boolean;
  /** 왼쪽 아이콘 */
  leftIcon?: React.ReactNode;
  /** 오른쪽 아이콘 */
  rightIcon?: React.ReactNode;
  /** 모서리 둥글기 */
  rounded?: Rounded;
}

/** 디자인 시스템 공용 버튼 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    theme = ButtonType.PRIMARY,
    size = "md",
    fullWidth,
    loading,
    leftIcon,
    rightIcon,
    className,
    disabled,
    rounded = "md",
    ...rest
  },
  ref
) {
  const cls = cn(
    styles.button,
    styles[theme],                    // variant
    styles[`size-${size}`],           // size
    styles[`rounded-${rounded}`],     // radius
    {
      [styles.fullWidth]: !!fullWidth,
      [styles.loading]: !!loading,
    },
    className
  );

  return (
    <button
      ref={ref}
      className={cls}
      disabled={disabled || loading}
      aria-busy={!!loading}
      {...rest}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span className={styles.label}>{children}</span>
      {loading && <span className={styles.spinner} aria-hidden />}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
});

export default Button; 