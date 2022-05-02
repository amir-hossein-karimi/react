import React from 'react';
import ReactDom from "react-dom"

const Modal = () => {
    return ReactDom.createPortal(
        <div>
            modal
        </div>,
        document.body
    );
};

export default Modal;