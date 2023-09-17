import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, ButtonClose, IconClose, ModalCard } from './Modal.styled';
import sprite from "../../assets/sprite.svg"

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
        <ModalCard>
        <ButtonClose type="button" onClick={onClose} aria-label="Close Modal">
          {" "}
          <IconClose>
            <use href={sprite + "#icon-x"}></use>
          </IconClose>
        </ButtonClose>
        {children}
        </ModalCard>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    };

export default Modal;

