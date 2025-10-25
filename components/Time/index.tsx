import React, { forwardRef, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./style.module.scss";

export interface TimeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Displays a clock icon when set to "true" */
  showIcon?: boolean;
  /** Display format */
  format?: string;
  /** Specifying this prop will make the Time atom a counter starting from "startDate" */
  startDate?: Date | string | number;
  /** Show seconds in time display */
  showSeconds?: boolean;
  /** Additional className */
  className?: string;
}

const Time = forwardRef<HTMLDivElement, TimeProps>(function Time(
  {
    showIcon = false,
    format,
    startDate,
    showSeconds = true,
    className,
    ...rest
  },
  ref
) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      if (startDate) {
        const start = new Date(startDate);
        const elapsed = Math.floor((now.getTime() - start.getTime()) / 1000);
        setElapsedTime(elapsed);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  const formatTime = (date: Date): string => {
    if (format) {
      const hours = date.getHours();
      const hours12 = hours % 12 || 12;
      const period = hours >= 12 ? 'PM' : 'AM';
      
      // Simple format parsing
      let result = format
        .replace('DD', String(date.getDate()).padStart(2, '0'))
        .replace('MM', String(date.getMonth() + 1).padStart(2, '0'))
        .replace('YYYY', String(date.getFullYear()))
        .replace('HH', String(date.getHours()).padStart(2, '0'))
        .replace('hh', String(hours12).padStart(2, '0'))
        .replace('mm', String(date.getMinutes()).padStart(2, '0'))
        .replace('ss', String(date.getSeconds()).padStart(2, '0'));
      
      // Handle AM/PM
      if (result.includes('AM') || result.includes('PM')) {
        result = result.replace(/[AP]M/, period);
      }
      
      return result;
    }

    // Default format
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    if (showSeconds) {
      return `${hours}:${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}`;
  };

  const formatElapsedTime = (seconds: number): string => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const parts = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours > 0) parts.push(`${hours}h`);
    if (mins > 0) parts.push(`${mins}m`);
    if (secs > 0 || parts.length === 0) parts.push(`${secs}s`);

    return parts.join(' ');
  };

  const containerCls = cn(
    styles.timeContainer,
    {
      [styles.withIcon]: showIcon,
    },
    className
  );

  const displayText = startDate 
    ? formatElapsedTime(elapsedTime)
    : formatTime(currentTime);

  return (
    <div ref={ref} className={containerCls} {...rest}>
      {showIcon && (
        <span className={styles.icon}>schedule</span>
      )}
      <span className={styles.timeText}>{displayText}</span>
    </div>
  );
});

export default Time;

