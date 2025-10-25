import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./style.module.scss";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Type is the exact icon. You can find valid "type" values in the documentation example */
  type: string;
  /** Will fill the icon when set to "true" */
  isFilled?: boolean;
  /** Icon disabled state */
  disabled?: boolean;
  /** Additional className */
  className?: string;
}

const Icon = forwardRef<HTMLSpanElement, IconProps>(function Icon(
  {
    type,
    isFilled = false,
    disabled = false,
    className,
    ...rest
  },
  ref
) {
  const cls = cn(
    styles.icon,
    {
      [styles.filled]: isFilled,
      [styles.outlined]: !isFilled,
      [styles.disabled]: disabled,
    },
    className
  );

  // isFilled가 false면 outlined 버전 사용
  const iconName = !isFilled && !type.includes('_outlined') ? `${type}_outlined` : type;

  return (
    <span
      ref={ref}
      className={cls}
      aria-hidden="true"
      aria-disabled={disabled}
      {...rest}
    >
      {iconName}
    </span>
  );
});

export default Icon;

