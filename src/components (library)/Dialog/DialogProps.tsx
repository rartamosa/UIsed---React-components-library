export type HorizontalPosition = "left" | "center" | "right";
export type VerticalPosition = "top" | "center" | "bottom";

export type DialogProps = DialogExampleProps & {
  onAction: () => void;
  onCancel: () => void;
  isDialogOpen: boolean;
  dialogHeader: string;
  dialogBody: string;
  actionButtonText: string;
  cancelButtonText: string;
  isMobileMenuOpen?: boolean;
};

export type DialogExampleProps = {
  mainButtonText: string;
  dialogHeader?: string;
  dialogBody?: string;
  actionButtonText?: string;
  cancelButtonText?: string;
  buttonProps?: React.CSSProperties;
  actionButtonColor?: string;
  cancelButtonColor?: string;
  overlayColor?: string;
  dialogPosition?:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
  size?: "small" | "medium" | "large";
  blockScroll?: boolean;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
};
