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

  return (
    <span
      ref={ref}
      className={cls}
      aria-hidden="true"
      aria-disabled={disabled}
      {...rest}
    >
      {type}
    </span>
  );
});

export default Icon;

