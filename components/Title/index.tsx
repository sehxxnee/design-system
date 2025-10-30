import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./style.module.scss";
import Icon from "../Icon";

export type TitleColor = "base" | "primary" | "subtle" | "danger";

export interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Text/Component to be displayed. Any valid React node */
  text: React.ReactNode;
  /** Actions to be displayed. Any valid React node */
  actions?: React.ReactNode;
  /** Display an icon. Values are the same as "Icon" atoms type prop */
  icon?: string;
  /** Title color */
  color?: TitleColor;
  /** Displays a divider line */
  withLine?: boolean;
  /** Additional className */
  className?: string;
}

const Title = forwardRef<HTMLDivElement, TitleProps>(function Title(
  {
    text,
    actions,
    icon,
    color = "base",
    withLine = false,
    className,
    ...rest
  },
  ref
) {
  const containerCls = cn(
    styles.titleContainer,
    styles[`color-${color}`],
    {
      [styles.withLine]: withLine,
    },
    className
  );

  return (
    <div ref={ref} className={containerCls} {...rest}>
      <div className={styles.titleHeader}>
        <div className={styles.titleContent}>
          {icon && <Icon type={icon} className={styles.titleIcon} />}
          <h2 className={styles.titleText}>{text}</h2>
        </div>
        {actions && <div className={styles.titleActions}>{actions}</div>}
      </div>
      {withLine && <div className={styles.titleDivider} />}
    </div>
  );
});

export default Title;

