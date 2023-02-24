import { Button } from "../../components (library)/Basic Components/Buttons";
import Toast from "../../components (library)/Toast/Toast";
import { ToastProps } from "../../components (library)/Toast/ToastProps";
import useToast from "../../components (library)/Toast/useToast";

const SingleToastExample = (toastProps: ToastProps) => {
  const [toastList, onToastAdd, onToastRemove] = useToast(30000);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        buttonProps={{ fontFamily: "Red Hat Display" }}
        onClick={() => toastProps.onToastAdd}
      >
        {toastProps.buttonText}
      </Button>
      <Toast
        toastList={toastList}
        onToastRemove={onToastRemove}
        animationType={toastProps.animationType}
        toastsPosition={toastProps.toastsPosition}
        buttonText={toastProps.buttonText}
        toastHeader={toastProps.toastHeader}
        id={toastProps.id}
        onToastAdd={onToastAdd}
      />
    </div>
  );
};

export default SingleToastExample;
