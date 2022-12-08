import { cloneElement, isValidElement, useCallback, useState } from "react";
import { AvatarButton, AvatarButtonProps } from "./AvatarButton";

export const AvatarButtonDialog = ({ id, expand, children }: TProps) => {
  const [popoverState, setShowPopover] = useState<React.MouseEvent<HTMLIonButtonElement> | undefined>(undefined);

  const handleOpen = useCallback((event: React.MouseEvent<HTMLIonButtonElement>) => {
    event.persist();
    setShowPopover(event);
  }, []);

  const handleClose = useCallback(() => {
    setShowPopover(undefined);
  }, []);

  const renderChildren = useCallback(
    (child: React.ReactNode) => {
      const element = isValidElement(child) ? child : <span>{child}</span>;
      return cloneElement(element, {
        event: popoverState,
        isOpen: Boolean(popoverState),
        onDidDismiss: handleClose,
      });
    },
    [handleClose, popoverState]
  );

  return (
    <>
      <AvatarButton expand={expand} id={id} onClick={handleOpen} />
      {renderChildren(children)}
    </>
  );
};

type TProps = AvatarButtonProps & {
  children: React.ReactNode;
};
