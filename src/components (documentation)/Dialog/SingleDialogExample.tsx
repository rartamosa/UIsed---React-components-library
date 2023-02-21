import { useState } from "react";

import { Button } from "../../components (library)/Basic Components/Buttons";
import Dialog from "../../components (library)/Dialog/Dialog";
import { DialogProps } from "../../components (library)/Dialog/DialogProps";

const SingleDialogExample = (dialogProps: DialogProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onActionLogic = (): void => {
    console.log("Action taken");
    setIsDialogOpen(false);
  };

  const onCancelLogic = (): void => {
    console.log("Action cancelled");
    setIsDialogOpen(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        onClick={() => setIsDialogOpen(true)}
        buttonProps={{ fontFamily: "Red Hat Display" }}
      >
        {dialogProps.mainButtonText}
      </Button>
      <Dialog
        {...dialogProps}
        onAction={onActionLogic}
        onCancel={onCancelLogic}
        isDialogOpen={isDialogOpen}
        dialogHeader={dialogProps.dialogHeader}
        dialogBody={dialogProps.dialogBody}
        actionButtonText={dialogProps.actionButtonText}
        cancelButtonText={dialogProps.cancelButtonText}
      />
    </div>
  );
};

export default SingleDialogExample;
