import React, { FC } from "react";

import "./Modal.css";

type Props = {
  show: boolean;
  disabledClose?: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: FC<Props> = ({ show, disabledClose, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {disabledClose && (
          <span
            className="modal-close select-none flex items-center justify-center"
            onClick={onClose}
          >
            &times;
          </span>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
