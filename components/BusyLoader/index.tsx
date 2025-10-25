import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./style.module.scss";

export type SpinnerSize = "small" | "medium" | "big";
export type LoaderType = "spinner" | "bubbles" | "bar";

export interface BusyLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  isBusy?: boolean;
  spinnerSize?: SpinnerSize;
  type?: LoaderType;
  children?: React.ReactNode;
  loadingText?: string;
  className?: string;
}

const BusyLoader = forwardRef<HTMLDivElement, BusyLoaderProps>(function BusyLoader(
  {
    isBusy = true,
    spinnerSize = "small",
    type = "spinner",
    children,
    loadingText,
    className,
    ...rest
  },
  ref
) {
  const loaderCls = cn(
    styles.busyLoader,
    styles[type],
    styles[spinnerSize],
    className
  );

  if (!isBusy) {
    return <>{children}</>;
  }

  return (
    <div ref={ref} className={loaderCls} {...rest}>
      <div className={styles.loaderContainer}>
        {type === "spinner" && (
          <div className={styles.spinner}>
            <div className={styles.spinnerCircle}></div>
          </div>
        )}
        {type === "bubbles" && (
          <div className={styles.bubbles}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
          </div>
        )}
        {type === "bar" && (
          <div className={styles.bar}>
            <div className={styles.barProgress}></div>
          </div>
        )}
        {loadingText && type !== "bar" && (
          <div className={styles.loadingText}>{loadingText}</div>
        )}
      </div>
    </div>
  );
});

export default BusyLoader;

