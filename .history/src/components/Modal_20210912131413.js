import React from 'react';
import '../App.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button className="btn btn-primary"  type="button" onClick={() =>handleClose()}>
                    Close
                </button>
            </section>
        </div>
    );
};
export default Modal