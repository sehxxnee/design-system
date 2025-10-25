import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./style.module.scss";

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /** Type is the exact icon. You can find valid "type" values in the documentation example */
  type: string;
  /** Will fill the icon when set to "true" */
  isFilled?: boolean;
  /** Icon disabled state */
  disabled?: boolean;
  /** Additional className */
  className?: string;
}

const Icon = forwardRef<HTMLElement, IconProps>(function Icon(
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
    styles[`icon-${type}`],
    {
      [styles.filled]: isFilled,
      [styles.disabled]: disabled,
    },
    className
  );

  return (
    <i
      ref={ref}
      className={cls}
      aria-hidden="true"
      aria-disabled={disabled}
      {...rest}
    />
  );
});

export default Icon;

