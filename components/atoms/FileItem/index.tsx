import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./style.module.scss";
import Button, { ButtonType } from "../Button";
import Icon from "../Icon";

export type FileItemLayout = "horizontal" | "vertical";
export type FileItemSize = "sm" | "md" | "lg";

export interface FileItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** File name to display */
  fileName: string;
  /** File size in bytes or formatted string */
  fileSize: string | number;
  /** Image preview URL (for image files) */
  preview?: string;
  /** Additional metadata text (e.g., last modified date) */
  metadata?: string;
  /** Preview button click handler */
  onPreview?: () => void;
  /** Download button click handler */
  onDownload?: () => void;
  /** Delete button click handler */
  onDelete?: () => void;
  /** Show/Hide preview button */
  showPreview?: boolean;
  /** Show/Hide download button */
  showDownload?: boolean;
  /** Show/Hide delete button */
  showDelete?: boolean;
  /** Hide file name */
  hideName?: boolean;
  /** Layout direction */
  layout?: FileItemLayout;
  /** Size variant */
  size?: FileItemSize;
  /** Additional className */
  className?: string;
}

const FileItem = forwardRef<HTMLDivElement, FileItemProps>(function FileItem(
  {
    fileName,
    fileSize,
    preview,
    metadata,
    onPreview,
    onDownload,
    onDelete,
    showPreview = true,
    showDownload = true,
    showDelete = true,
    hideName = false,
    layout = "horizontal",
    size = "md",
    className,
    ...rest
  },
  ref
) {
  const formatFileSize = (size: string | number): string => {
    if (typeof size === 'string') return size;
    if (size === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return Math.round(size / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const containerCls = cn(
    styles.fileItem,
    styles[`layout-${layout}`],
    styles[`size-${size}`],
    {
      [styles.hasPreview]: !!preview,
    },
    className
  );

  return (
    <div ref={ref} className={containerCls} {...rest}>
      {preview && (
        <div className={styles.imagePreview}>
          <img src={preview} alt={fileName} />
        </div>
      )}
      
      <div className={styles.fileInfo}>
        {!hideName && <div className={styles.fileName}>{fileName}</div>}
        <div className={styles.fileSize}>{formatFileSize(fileSize)}</div>
        {metadata && <div className={styles.fileMetadata}>{metadata}</div>}
      </div>

      <div className={styles.fileActions}>
        {showPreview && onPreview && preview && (
          <Button
            type="button"
            theme={ButtonType.GHOST}
            size="sm"
            onClick={onPreview}
            title="Preview"
            className={styles.actionButton}
          >
            <Icon type="visibility" />
          </Button>
        )}
        
        {showDownload && onDownload && (
          <Button
            type="button"
            theme={ButtonType.GHOST}
            size="sm"
            onClick={onDownload}
            title="Download"
            className={styles.actionButton}
          >
            <Icon type="download" />
          </Button>
        )}
        
        {showDelete && onDelete && (
          <Button
            type="button"
            theme={ButtonType.GHOST}
            size="sm"
            onClick={onDelete}
            title="Delete"
            className={styles.actionButton}
          >
            <Icon type="delete" />
          </Button>
        )}
      </div>
    </div>
  );
});

export default FileItem;

