import { IconName } from "@fortawesome/fontawesome-svg-core";

export type ToastProps = SingleToastExample &
  ToastToAdd &
  SingleToastProps & {
    toastList: SingleToastProps[];
    animationType?: "fade" | "grow" | "slide";
    onToastRemove: (id: string) => void;
    onToastAdd: (toastToAdd: ToastToAdd) => void;
    toastsPosition?:
      | "bottom-center"
      | "bottom-left"
      | "bottom-right"
      | "top-center"
      | "top-left"
      | "top-right";
    buttonProps?: React.CSSProperties;
  };

export type ToastToAdd = {
  toastHeader: string;
  toastDescription?: string;
  toastBacgroundColor?: string;
  toastFontColor?: string;
  toastIcon?: IconName;
  iconColor?: string;
  typeOfToast?: "success" | "error" | "warning" | "info";
  size?: "small" | "medium" | "large";
  boxShadow?: boolean;
};

export type SingleToastProps = ToastToAdd & {
  id: string;
  isUnmounting?: boolean;
  toastsPosition?:
    | "bottom-center"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "top-left"
    | "top-right";
};

export type SingleToastExample = {
  buttonText: string;
  animationType?: "fade" | "grow" | "slide";
  toastsPosition?:
    | "bottom-center"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "top-left"
    | "top-right";
  buttonProps?: React.CSSProperties;
  toastDescription?: string;
  toastBacgroundColor?: string;
  toastFontColor?: string;
  toastIcon?: IconName;
  iconColor?: string;
  typeOfToast?: "success" | "error" | "warning" | "info";
  size?: "small" | "medium" | "large";
  boxShadow?: boolean;
  isUnmounting?: boolean;
};

export const toastFontColorHex = "#fff";
