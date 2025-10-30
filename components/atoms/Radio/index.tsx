import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./style.module.scss";

export type RadioSize = "small" | "medium" | "large";
export type RadioType = "default" | "tab";
export type RadioLabelPosition = "left" | "right" | "top" | "bottom";
export type RadioLabelAlignment = "start" | "center" | "end";

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** A label will be added to the Radio */
  label?: string;
  /** Optional description field */
  description?: string;
  /** Needed for "RadioGroup" molecule */
  name?: string;
  /** Type defines the appearance of the radio */
  type?: RadioType;
  /** Use this prop to get specified value when "onChange" is fired */
  value?: any;
  /** Radio size */
  size?: RadioSize;
  /** Specify the label position */
  labelPosition?: RadioLabelPosition;
  /** Specify the label alignment */
  labelAlignment?: RadioLabelAlignment;
  /** Specifies does the Radio checked or not. */
  checked?: boolean;
  /** Will make Radio disabled when set to "true" */
  disabled?: boolean;
  /** Will make Radio readonly when set to "true" */
  readOnly?: boolean;
  /** Control Radio validation */
  isValid?: boolean;
  /** Shows error text when "isValid" is set to "false". */
  errorText?: string;
  /** Radio will add an extra asterix to the "label" */
  required?: boolean;
  /** Fires an event when Radio is clicked */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Additional className */
  className?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    label,
    description,
    name,
    type = "default",
    value,
    size = "small",
    labelPosition = "right",
    labelAlignment = "start",
    checked = false,
    disabled = false,
    readOnly = false,
    isValid = true,
    errorText = "",
    required = false,
    onChange,
    className,
    ...rest
  },
  ref
) {
  const containerCls = cn(
    styles.radioContainer,
    styles[`type-${type}`],
    styles[`size-${size}`],
    styles[`label-${labelPosition}`],
    styles[`align-${labelAlignment}`],
    {
      [styles.checked]: checked,
      [styles.disabled]: disabled,
      [styles.readOnly]: readOnly,
      [styles.invalid]: !isValid,
    },
    className
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && !readOnly && onChange) {
      onChange(event);
    }
  };

  return (
    <div className={containerCls}>
      <label className={styles.radioLabel}>
        <input
          ref={ref}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
          className={styles.radioInput}
          {...rest}
        />
        <span className={styles.radioMark}>
          {type === "default" && <span className={styles.radioDot} />}
        </span>
        {(label || description) && (
          <span className={styles.labelContent}>
            {label && (
              <span className={styles.labelText}>
                {label}
                {required && <span className={styles.required}>*</span>}
              </span>
            )}
            {description && (
              <span className={styles.description}>{description}</span>
            )}
          </span>
        )}
      </label>
      {!isValid && errorText && (
        <span className={styles.errorText}>{errorText}</span>
      )}
    </div>
  );
});

export default Radio;

