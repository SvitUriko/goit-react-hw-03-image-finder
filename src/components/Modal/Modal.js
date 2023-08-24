import Modal from 'react-modal';

import css from './Modal.module.css';

Modal.setAppElement('#root');


export const ModalWindow = ({ isOpen, isClose, children }) => {
  return (
    <Modal className={css.modal} overlayClassName={css.overlay} isOpen={isOpen} onRequestClose={isClose}>
      {children}
    </Modal>
  );
};