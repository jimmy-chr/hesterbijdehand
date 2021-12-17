import React from "react";
import { Image, Modal } from "semantic-ui-react";
import * as S from "./image-modal.styles";

const ImageModal = ({
  src,
  children,
}: {
  src: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<S.Wrapper>{children}</S.Wrapper>}
    >
      <Modal.Content image onClick={() => setOpen(false)}>
        <Image size="huge" src={src} />
      </Modal.Content>
    </Modal>
  );
};

export default ImageModal;
