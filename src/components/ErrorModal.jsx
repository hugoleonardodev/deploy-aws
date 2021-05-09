/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = () => {
  // const {
  //   // buttonLabel,
  //   // className,
  // } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  const reload = () => window.location.reload();
  return (
    <div>
      {/* <Button color="danger" onClick={ toggle }>{buttonLabel}</Button> */}
      <Modal onClosed={ reload } isOpen={ modal } toggle={ toggle }>
        <ModalHeader toggle={ toggle }>ERROR 403</ModalHeader>
        <ModalBody>
          GitHub API calls limit exceeded.
          Wait a moment for more queries.
          Click OK to go back to home.
        </ModalBody>
        <ModalFooter>
          <Button color="dark" onClick={ toggle }>OK</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
