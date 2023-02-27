import { Button } from "../../components (library)/Basic Components/Buttons";
import Toast from "../../components (library)/Toast/Toast";
import { ToastProps } from "../../components (library)/Toast/ToastProps";

const SingleToastExample = (toastProps: ToastProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        buttonProps={{ fontFamily: "Red Hat Display" }}
        onClick={() =>
          toastProps.onToastAdd({
            toastHeader: toastProps.toastHeader,
            typeOfToast: toastProps.typeOfToast,
            toastDescription: toastProps.toastDescription,
            size: toastProps.size,
            boxShadow: toastProps.boxShadow,
            toastIcon: toastProps.toastIcon,
            iconColor: toastProps.iconColor,
            toastBacgroundColor: toastProps.toastBacgroundColor,
            toastFontColor: toastProps.toastFontColor,
          })
        }
      >
        {toastProps.mainButtonText}
      </Button>
      <Toast
        toastList={toastProps.toastList}
        onToastRemove={toastProps.onToastRemove}
        mainButtonText={toastProps.mainButtonText}
        toastHeader={toastProps.toastHeader}
        id={toastProps.id}
        animationType={toastProps.animationType}
        toastsPosition={toastProps.toastsPosition}
        onToastAdd={toastProps.onToastAdd}
      />
    </div>
  );
};

export default SingleToastExample;
